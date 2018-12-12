## Week4 作業名詞講解 

1. 什麼是 DOM？

DOM 不在Javascript 的規範裡面
DOM 是瀏覽器提供的
html 對應到一個 tree
每個元素都變成一個節點
DOM是瀏覽器提供給 html javascript 之間的橋樑

2. 什麼是 Ajax？

ajax 技術的總稱

JONS 現在是主流
{
    students: [
        {"name": 'peter'},
        {"name": 'nick'}
    ]
}

3. HTTP method 有哪幾個？有什麼不一樣？
    語義化
    列舉那些 method

4. GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？
    GET 的參數會待在網址後面
    POST 帶在 request 的body 裡面

5. 什麼是 RESTful API？跟第三題有關聯

    符合這個規範就可以說是RESTful API
    重點是以資源為中心

    CRUD
    GET     /posts        所有文章
    POST    /post         新增文章
    DELETE  /posts/:id    刪除文章
    PUT     /posts/:id
    GET     /posts/:id

6. JSON 是什麼？
    一種資料格式

7. JSONP 是什麼？
    出現在CORS
    SOP Same origin policy
    透過script 的 src 沒有跨網域的限制

8. 要如何存取跨網域的 API？
    1. JONSP
    2. 開啟跨來源請求：若要開啟跨來源請求，必須在伺服器端做一些設定，像是在 Response Header 加上 Access-Control-Allow-Origin：
    [[JS] 同源政策與跨來源資源共用（CORS）](https://pjchender.github.io/2018/08/20/%E5%90%8C%E6%BA%90%E6%94%BF%E7%AD%96%E8%88%87%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E7%94%A8%EF%BC%88cors%EF%BC%89/)


## Week5 重點總結

1. 後端基本概念（知道前端跟後端的差異） 很重要
2. 熟悉 PHP 語法
3. 物件導向基本概念（超重要）
4. 熟悉 MySQL 語法
5. 資料庫基本概念
    flag
6. 知道如何用 PHP 與資料庫溝通


## week5 作業檢討補充

1. 有關於「刪除」這件事
    新增一個欄位 is_deleted
2. 凡走過必留下痕跡：Log
3. 如何設計 DB(database) 欄位
    資料庫正規化


table: comments
content 留言內容
created_at 留言時間
user_id 1


table: users
id
nickname

week6 重點：資訊安全

1. 有些你想都沒想過會發生的事
2. Session 與 Cookie 要很清楚他們之間的差別

3. SQL Injection
4. XSS 
  - Cross-Site Scripting 跨站式腳本攻擊 CSS已經被用走了

  1. 儲存型 XSS (Stored XSS)
    payload
  2. 反射型 XSS（Reflected XSS）

5. CSRF
6. Hash function

週四我們來看前十大網站漏洞
