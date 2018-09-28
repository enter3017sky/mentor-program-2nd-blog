# Lesson 4-1 之 JavaScript

> 前言
1. HTML 作為網頁結構與內容
2. CSS 幫網頁打扮得漂漂亮亮亮亮的
3. JavaScript 寫程式
4. 前端所欠缺的最後一塊拼圖：__JavaScript與網頁的互動。__

## JavaScript 的執行環境

1. 跑在Node.js
2. 跑在瀏覽器

跑在哪裡，就能夠操控跟哪邊有關的東西。
沒辦法突破執行環境的限制。

## DOM - Document Object Model

![image](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)
> 你可以用樹狀圖的方式表現出任何 HTML 文件，

1. 把每一個 HTML 的 Tag 看成一個節點（node）。
- 把不同的 HTML 的節點，對應到 JavaScript 的物件。
2. 可以用 JavaScript 來操縱 DOM。
3. 瀏覽器提供的，讓程式語言來操縱 HTML 的橋樑。

---

![image](http://ravisah.in/images/blog/difference-between-innerhtml-and-outerhtml.png)

- alert() :跳出視窗

## dom 如何使用

- 完整的 `<script>` 標籤的寫法

```html
<body>
    <div id="test">
        hello
    </div>
</body>
<script type="text/javascript">
var test = document.getElementById('test') //選到 id="test" 的元素
console.log(test) //把選到的東西 log 出來。
</script>
```

- 在 Chrome 上面 按 `⌥+⌘+J` 選 `console`，查看。
- 用 `document.getElementById` 拿到東西之後，就可以對這個 HTML 的元素作任何操縱。

```html
<script>
var test = document.getElementById('test') //選到 id="test" 的元素
...
test.style.background = 'red' //改變背景顏色為紅色
...
test.innerText = '12345' // 改變內容
...
test.innerHTML = '<ul><li>1</li><li>2</li></ul>' //把內容改變成清單
...
test.outerHTML = '12345' // 改成 outer 整個 div 都不見了
...
test.style.margin = '20px' // 改變 margin
...
</script>
```


## `<script>` 放在哪裡很重要

![image](https://lh6.googleusercontent.com/40kFXa9VoS83Q9TqBZ3yj3pUmT_A2Yx0ufTPmN2vgRkGFWACYioYtaZ9DW1-HglN7agb1KmTxhPfA-bJokcO36IGFzMTugw8OTDN-01ddBh5xq1bF9g2eYyNGKu8c40XRQiH79RY8cU)

- 這個範例中，把`<script>` 放在`<body>`之前，瀏覽器顯示`mtr01_Lesson_4-1.html:11 Uncaught TypeError: Cannot set property 'innerHTML' of null at mtr01_Lesson_4-1.html:11`，未捕獲類型錯誤：無法將屬性'innerHTML'設置為null
  - js 代碼從上往下執行時，沒有找到合適的標籤而出錯。
  - DOM Tree 建完之後才有東西可以拿
- 把 test log 出來 `console.log(test)` 顯示 `null`

```html
<head>
    <script type="text/javascript">
        var test = document.getElementById('test')
        console.log(test)
        test.innerHTML = '<ul><li>1</li><li>2</li></ul>'
        test.style.background = 'red'
        test.style.margin = '20px'
    </script>
</head>
<body>
    <div id="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```


## 真的很想放前面？添加 Event Listener
> 延伸閱讀 [DOMContentLoaded 與 load 的區別](https://www.cnblogs.com/caizhenbo/p/6679478.html)

- 假設網頁上面有一張圖片，如果你用 `DOMContenLoaded` 可能還沒載入好，用 `window 的 load` 的話，它保證你所有東西都加載完成，才會觸發。

```javascript
- 用 __window__ 
document.addEventListener('DOMContenLoaded', function(){
    var test = document.getElementById('#test');
})
window.addEventListener('load', function(){
    var test = document.getElementById('#test');
})
```

- 幫它加入一個 _事件_ 監聽器
- _事件_ 名稱:`__DOMContenLoaded__`，後面接 `function`
- 就不會出錯，因為跑道 `function` 裡面的時候，`DOMContenLoaded`就 __load__ 好了。

```html
<!-- 事件監聽器 EventListener -->
<head>
<script type="text/javascript">
    document.addEventListener('DOMContenLoaded', function(){
        var test = document.getElementById('test')
        test.innerHTML = '<ul><li>1</li><li>2</li></ul>'
        test.style.background = 'red'
        test.style.margin = '20px'
    })
</script>
</head>
<body>
    <div id="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

## CallBack Function - Event Listener 背後的概念

- 為了不要讓其他事情被阻塞（block）而延伸出來的方式
- 總而言之就是：「好了叫我」

```javascript
document.getElementById('#btn').addEventListener('click', function(){
    alert('click!')
    })

document.getElementById('#btn').addEventListener('click',
    function(){       //匿名函式
        alert('click!')
    }
)
```

- 這個範例跟`EventListener`的範例，效果是一樣的。
```javascript
document.addEventListener('DOMContenLoaded', loaded)
function loaded(){
    var test = document.getElementById('test')
    test.innerHTML = '<ul><li>1</li><li>2</li></ul>';
    test.style.background = 'red';
    test.style.margin = '20px';
}
```


## 匿名函式
- 把 function 的名字去掉，直接貼到 document.addEventListener 的參數裡面。
- 就變成匿名函式 好處是比較簡潔。
```javascript
// 把 function 的名字去掉，直接貼到 document.addEventListener 的參數裡面。
// 就變成匿名函式 好處是比較簡潔。
document.addEventListener('DOMContenLoaded', function (){
    var test = document.getElementById('test')
    test.innerHTML = '<ul><li>1</li><li>2</li></ul>';
    test.style.background = 'red';
    test.style.margin = '20px';
})

```
>其實前端的JS基礎就是這兩個東西，基本上我們想要的操縱，可以透過把這兩個東西組合而成，而達成。而前端的互動，按按鈕、發表單，這些東西都是事件，所以既然你有 EventListener 的話，你就可以新增一個事件，去聽這些東西，做出反應。第二個重點 DOM 可以操縱任何物件，它用 JS 改 HTML 的任何東西，我們可以用 callback function 改一些東西，這兩個東西組合而成，幾乎可以做我們想要做的任何事。



27:15

各式各樣的 DOM 操作
document.querySelector(‘.btn’)
document.querySelectorAll(‘.btn’)
document.getElementsByClassName(‘btn’)
document.createElement(‘p’)
document.body.appendChild()
newDiv.classList.add('foo')
newDiv.classList.toggle('foo')


