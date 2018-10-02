# Lesson 4-2 之 HTTP 基礎與 Ajax

## Request 與 Response

> 說穿了，其實就是擁有特定格式的文字，而 Header 包含一些額外的資訊，Body 則是主要內容。
1. 都包含了 Header 跟 Body
2. 遵循一定的 __標準格式__

> __標準很重要__
> 有了標準、有了規範之後才能被「機器」處理
> 1. 程式碼遵循著一定的標準
> 2. USB 介面也也相同標準
> 3. 手機充電器的機頭也有相同標準
> 4. HTML 也必須按照標準寫

### Request

1. Method URL HTTP/version
2. Host, Referer... 各種屬性
    - Host: 你要連到哪個網域
    - Referer: 從哪邊連過來的(妳ㄕ))
    - Accept: 接受的形式是什麼
    - Accept-Language: 偏好的語言

### Response

- Body: 網頁內容
- Content-type: 它回傳回來的型態是什麼。html utf-8

## HTTP Method (Request)

> HTTP 定義了一組能令給定資源，執行特定操作的請求方法（request methods）。他們儘管屬於名詞，但也能稱為 HTTP 動詞。每個方法都有不同的語意，不過也有些共享的相通功能，像是safe、idempotent、cacheable。

1. GET: GET 方法請求展示指定資源。使用 GET 的請求只應用於取得資料。
2. POST: POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。
3. PATCH: 更改資料。
4. PUT: PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。
5. DELETE: DELETE 方法會刪除指定資源。
6. OPTIONS: OPTIONS 方法描述指定資源的溝通方法（communication option）。
7. HEAD: HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。

## HTTP Status Code (Response)

- 200 OK: 沒問題
- 301 Moved Permanently: 永久轉址（瀏覽器會記住）
- 302 Found: 暫時轉址（瀏覽器不會記住）
- 400 Bad Request: 通常是 Client 端有錯誤
- 403 Forbidden: 沒有權限看這個檔案
- 404 Not Found: 沒有這個頁面
- 500 Internal Server Error
- 503 Service Unavailable

## HTTP return codes cheat sheet

- 1** Hold on
- 2** Here you go
- 3** Go away
- 4** You fucked up
- 5** I fucked up

## 前後端怎麼溝通？怎麼發 Request？

1. `<script src='...' />`:
  - 有串過 GA 嗎？ 廣告追蹤的原理之一。
  - Google Analytics 就是利用在網頁上放一個 <script>，發送 request 給 Google 後，他們就能追蹤到一些使用者的資訊，這也是廣告追蹤的原理之一，利用埋一段 <script> 來取得資料。

2. `<link href='...' />`

3. `<img src='...' />` Email 打開信件追蹤的原理。利用放一個透明的圖片，打開信件時點擊到的圖片會試著載入，開 Email 時就會發 request 給圖片網址，圖片的 Server 就能知道有多少人送出 Request。

4. `<form action='...'`: 最常見的方式。

- 不指定的話會發送 Request 到你現在的檔案，用 action 指定發送到你要的地方 rul。
  - `<form method="POST" action="http://a.com">`
  - `<form method="POST" action="http://google.com">`
  - 用 POST 指定到 GOOGLE 出現這個
  > 405 . That’s an error.
  > The request method POST is inappropriate for the URL /. That’s all we know.
  - `<form method="GET"" action="http://google.com">`
  - 連結到 Google 搜尋的畫面。

#### \<form method="GET">

- 資訊帶在網址後面，
- 帶更多的東西會用 & 隔開

```html
<form method="GET">
        name:<input type="text" name="name" />
        <input type="submit" />
</form>
```

#### \<form method="POST">

- POST: 資訊可以在 DevTools -> Network 裡面查看。
- 東西就可以帶到 Server 上面去，Server 就可以對帳號密碼進行驗證。
- Requset 的 Body 那裡，有地方可以讓他帶資料。

```html
<form method="POST"> 
<!-- POST: 資訊在DevTools的 Network 裡面 東西就可以帶到server 上面去，server 就可以對帳號密碼進行驗證。-->
    username:<input type="text" name="name" />
    password:<input type="password" name="pwd" />
    <input type="submit" />
</form>
```



### Form 溝通示範

1. 前端有個搜尋框，使用者輸入 test
2. 前端利用 form 表單送出 Request：http://a.com?q=test
3. 後端接收到 q=test，回傳 Response
4. 前端顯示 test 的搜尋結果頁面

5. 前端點擊購買，利用 form 送出 POST http://a.com/buy
  - item_id: 123
6. 後端接收到 item_id 是 123，確認購買下單，傳回結果頁
7. 前端顯示購買成功

> 一共兩次來回，換了兩次頁面
> a.com
> a.com?q=test
> a.com/buy

### GET vs POST

1. GET 就是在網址後面加上參數，?a=1&b=2&c=3
2. 會自動做 URL encoded（這很重要）
 - JavaScript 可以用`encodeURIComponent`把`=`轉成`%3D`
 `decodeURIComponent`在把`%3D`變回`=`
3. 因為是網址，所以有長度限制
4. 因為是網址，所以不會放敏感資訊
5. http://a.com/login?user=123&password=12345


POST 把參數放在 request body 裡面
適合拿來放敏感資訊，從網址什麼都看不出來
POST http//a.com/login
body: user=123 password=12345