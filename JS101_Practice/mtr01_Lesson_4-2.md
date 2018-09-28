#  Lesson 4-2 之 HTTP 基礎與 Ajax



## Request 與 Response

> 說穿了，其實就是擁有特定格式的文字，而 Header 包含一些額外的資訊，Body 則是主要內容。
1. 都包含了 Header 跟 Body
2. 遵循一定的 __標準格式__


標準很重要
> 有了標準、有了規範之後才能被「機器」處理
1. 程式碼遵循著一定的標準
2. USB 介面也也相同標準
3. 手機充電器的機頭也有相同標準
4. HTML 也必須按照標準寫


- Request
1. Method URL HTTP/version
2. Host, Referer... 各種屬性
    - Host: 你要連到哪個網域
    - Referer: 從哪邊連過來的
    - Accept: 接受的形式是什麼
    - Accept-Language: 偏好的語言


- Response
    - Body: 網頁內容
    - Content-type: 它回傳回來的型態是什麼。html utf-8


HTTP Method (Request)
> HTTP 定義了一組能令給定資源，執行特定操作的請求方法（request methods）。他們儘管屬於名詞，但也能稱為 HTTP 動詞。每個方法都有不同的語意，不過也有些共享的相通功能，像是safe、idempotent、cacheable。
1. GET: GET 方法請求展示指定資源。使用 GET 的請求只應用於取得資料。
2. POST: POST 方法用於提交指定資源的實體，通常會改變伺服器的狀態或副作用（side effect）。
3. PATCH: 更改資料。
4. PUT: PUT 方法會取代指定資源所酬載請求（request payload）的所有表現。
5. DELETE: DELETE 方法會刪除指定資源.
6. OPTIONS: OPTIONS 方法描述指定資源的溝通方法（communication option）。
7. HEAD: HEAD 方法請求與 GET 方法相同的回應，但它沒有回應主體（response body）。






