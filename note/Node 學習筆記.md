# 網頁應用程式設計 - 使用 Node 和 Express

> 歐萊禮 2014/12 初版

## 第二章

### 使用 Node 來建立一個簡單的 Web 伺服器

#### Hello World

- Web 伺服器(Apache) 傳送靜態檔案，讓瀏覽器可以透過網路來檢視它們，根據適當的目錄，就可以透過 URL 去瀏覽， URL 與檔案名稱之間的關係很清楚。

- Node 提供的方式跟傳統的方式不一樣。Node 只提供框架讓你建構伺服器。

- `'Content-Type': 'text/html'`: 以 html 網頁形式。
- `'Content-Type': 'text/plain'`: 而text/plain是以純文本格式發送的

- 事件驅動編成：Node 背後核心裡面是事件驅動編成。理解背後有哪些事件可供你使用，及如何回應它們。例如當使用者按下某個東西之後，你要處理 “按下事件”。

```js
var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(3000)

console.log('Server started on localhost:3000; press Ctrl-C to terminate...')
```

---

## 路由

> Routing 的意思是將用戶端所要求的內容傳給它。

- 所有查詢的字串都會被忽略(http://localhost:3000/?foo=far 會導回首頁)

- 而所有其他的 URL (http://localhost:3000/foo) 會被傳送到 Not Found 的頁面。

```js
var http = require('http');

http.createServer((req, res) => {

    // 移除查詢字串、可選的結尾斜線來正規化，並讓它變成小寫
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
                res.writeHead(200, { 'Content-type': 'text.plain' });
                res.end('Homepage');
                break;
        case '/about':
                res.writeHead(300, { 'content-type': 'text/plain' });
                res.end('About');
                break;
        default:
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.end('Not Found');
                break;
    }


}).listen(3000)

console.log('Server started on localhost:3000; press Ctrl-C to terminate...')
```

## 傳送靜態資源

- 讓簡單的路由動作後，我們傳送一些 HTML 或圖片，因為它們不會變動，所以稱為靜態資源。
- Apache 通常是建立一個 HTML 檔案，瀏覽它，並將它自動傳送到瀏覽器。
- Node 工作方式與它不同：我們需要開啟檔案，讀取它，接著將它的內容傳送至瀏覽器。所以我們在專案中建立一個目錄，稱為 _public_ (它不稱為 static 的原因下回揭曉)

```js
var http = require('http'),
    fs = require('fs');

function serverStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(500, { 'content-type':'text/plain' });
            res.end('500 - Internal Error.');
        } else {
            res.writeHead(responseCode, { 'content-type': contentType });
            res.end(data)
        }
    });
}

http.createServer((req, res) => {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
                serverStaticFile(res, '/public/home.html', 'text/html')
                break;
        case '/about':
                serverStaticFile(res, '/public/about.html', 'text/html')
                break;
        case '/img/logo.jpg':
                serverStaticFile(res, '/public/img/logo.jpg', 'image/jpeg')
                break;
        default:
                serverStaticFile(res, '/public/home.html', 'text/html', 404)
                break;
    }

}).listen(3000)

console.log('Server started on localhost:3000; press Ctrl-C to terminate...')
```

- 我們建立了一個協助函示 serverStaticFile 來負責大量的工作。而 fs.readFile 是一種讀取檔案用的非同步方法。這個函式有一個同步的版本 fs.readFileSync 但儘早用非同步的方式來思考比較好。

- 這個函式非常簡單：它會呼叫 fs.readFile 來讀取指定的檔案內容。fs.readFile 會在檔案被讀取的時候執行回呼函式; 如果檔案不存在，或有許可權的問題，err 變數會被設定，函式會回傳 500 這個 HTTP 狀態碼來指示伺服器的錯誤。如果檔案成功被讀取，檔案會被傳送到客戶端，連同指定的回應及內容類型。

### 回呼函數(Google 御用網頁語言 Node.js 的範例 - 3.22)

- Node.js 中用非同步的方式讀取一個檔案。

```js
// readfile.js

var fs = require('fs');

fs.readFile('file.txt', 'utf-8', function(err, data) {
    if(err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');
```

執行結果如下：

```js
end.
Content of the file.
```

- Node.js 也提供了同步讀取檔案的 API

```js
// readfilesync.js

var fs = require('fs');
fs.readFileSync('file.txt', 'utf-8', function(err, data) {
    if(err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');
```

執行結果與前者不同：

```js
$ node readfilesync.js
Content of the file.
end.
```

- Node.js 非同步的 I/O 是透過回呼函數實現的。`fs.readFile` 接收了三個參數，第一個是檔案名稱，第二個是編碼方式，第三個是一個函數，我們稱這個函數為回呼函數。JavaScript 支援匿名的函數定義方式。範例中的回呼函數的定義就是嵌套在`fs.readFile` 的參數表中。


---

### **__dirname**

- `__dirname`: 會被解析為正在執行指令碼所在的目錄。
- 所以你的指令碼位於 _/home/sites/app.js_，**__dirname** 會被解析為 _/home/sites/_。