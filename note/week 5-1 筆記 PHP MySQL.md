
## 後端「實際上」到底是什麼？

1. 需要有一個 __伺服器__ 來處理 Request 跟 Response。
  - 伺服器 Apache
2. 需要 __寫程式__ 來處理。
  - 寫程式 PHP
3. 需要有 __資料庫__ 可以儲存資料。
  - 資料庫 MySQL  _CS101-5-3_
  - Structural Query Language 結構化的查詢語言
  select * form users

- 資料庫

  - 檔案 -> Database
  - Tab -> Table 表格
  - 欄位 -> column

## 正規化 Normalization


關聯式資料庫

## 索引 index

Index
Primary Index
Unique Index


## 內建函式

- COUNT 數量
    - 範例: `SELECT COUNT(id) FROM 'comments'`
- SUM 總和
    - 範例: `SELECT SUM(id) FROM 'comments'`
- AVG 平均
    - 範例: `SELECT AVG(id) FROM 'comments'`
- CONCAT 連接
    - 範例: `SELECT CONCAT(id, content) FROM 'comments'`

其他非函式查詢：between、in、like

## MySQL 語法

- `SELECT value, count(value) FROM TABLE GROUP BY value`
[https://www.ptt.cc/bbs/Database/M.1273847657.A.C5B.html](分組 總數)



![image](https://i.imgur.com/KJPWbUi.png)

- 查詢
  - __`SELECT`__ phone __`FROM`__ users __`WHERE`__ name=peter
  - 從 user 裡面找到 name 是 peter 的那列，並且把 phone 這個欄位的值取出來。

  - __`*`__ : 所有。
    - __`SELECT`__ * __`FROM`__ users
    - 從 users 裡面找到所有列，並且把所有欄位的值取出來。

- 刪除
  - __`DELETE FROM`__ users __`WHERE`__ name=peter
  - 刪除 users 裡面 name=peter 的那列

- 更新
  - __`UPDATE`__ users __`SET`__ phone=123 __`WHERE`__ name=peter
  - 更新 users 裡面 name 是 peter 的那列，把 phone 設為 123

- 新增
  - __`INSERT INTO`__ users(name, phone) __`VALUE`__(peter, 1234)
  - 新增一筆紀錄 name 是 peter ,phone 是 1234

  - INSERT INTO table_name (column1, column2, column3,...)VALUES (value1, value2, value3,...)

## 排序

- SELECT * FROM users ORDER BY time ASC
- SELECT * FROM users ORDER BY time DESC
- descending and ascending


## 回傳前 30 筆資料

- SELECT * FROM users LIMIT 30


## 回傳 61~90 筆資料

- SELECT * FROM users LIMIT 30 OFFSET 60
- SELECT * FROM users LIMIT 60, 30





---

以下是 SQL 中不同類型的 JOIN：

- （INNER）JOIN：返回兩個表中具有匹配值的記錄。取交集。
- __`LEFT JOIN`__ 關鍵字返回左表（table1）中的所有記錄，以及右表（table2）中的匹配記錄。如果沒有匹配，右側結果顯示為NULL。
- RIGHT（OUTER）JOIN：返回右表中的所有記錄，以及左表中匹配的記錄
- FULL（OUTER）JOIN：當左表或右表中有匹配時返回所有記錄

![image](https://www.w3schools.com/sql/img_leftjoin.gif)

![image](https://www.w3schools.com/sql/img_innerjoin.gif)
![image](https://www.w3schools.com/sql/img_rightjoin.gif)
![image](https://www.w3schools.com/sql/img_fulljoin.gif)


```php
// mtr01_6-1 範例
// 選擇 comments資料表中的 id content created_id 以及 users 資料表的 nickname
// 讓 comments.user_id = users.id
// LEFT JOIN 左表 comments 的所有結果 以及右表 users 匹配的紀錄
    $sql = "SELECT comments.id, comments.content, comments.created_at, users.nickname 
    FROM comments
    LEFT JOIN users
    ON comments.user_id = users.id
    WHERE parent_id = 0
    ORDER BY created_at DESC LIMIT 10";
```

```javascript
Apache

function handle(request){
    const response = executePhp(request)
    return response
}

function executePhp(){
    return call(php, request)
}

var db = open_database('...')
db.read()....
return de.first.id

```

## PHP

- 後端程式語言，Apache 呼叫 php 處理 Request 並且回傳 Response
- 變數要以 $ 開頭，不用宣告
- 字串連接用 . 而不是用 +

```php
<h1>
    <?php
        echo 'hello world'
    ?>
</h1>

<div>
    <div>PHP 語法</div>
    <ul>
        <li>變數要用 $ 開頭</li>
        <li>字串連接用 . </li>
        <li>結尾要 ;</li>
    </ul>
</div>

<?php
// php for loop 0~9
    for($i = 0; $i < 10; $i++) {
        echo $i . '<br>';
    }
?>

<?php
// php for loop 0~9
    echo '<ul>';
    for($i = 0; $i < 10; $i++) {
        echo '<li>'.$i.'</li>';
    }
    echo '</ul>';
?>
<!-- 沒有包在 php 程式碼裡面的東西它都會直接回傳，所以可以改成這樣 -->
<ul>
<?php
    for($i = 0; $i < 10; $i++) {
        echo '<li>'.$i.'</li>';
    }
?>
</ul>
```



## PHP 錯誤處理

- 基本上，PHP 的錯誤可以分為兩種：
    - 環境錯誤（environmental errors）: 環境錯誤也稱外部錯誤，這是指程式執行環境導致的錯誤。例如沒有權限，或檔案不存在。
    - 程式錯誤（programming errors）: 程式錯誤是程式中有臭蟲，可能是語法錯誤、語意錯誤
、或程式邏輯錯誤(logical errors)。

### PHP有四個錯誤等級：

1. Parse Errors: 剖析錯誤是指 PHP 程式碼的語法或語意錯誤，這是在執行前，直譯過程中找出的錯誤。
2. Fatal Errors: 致命錯誤是很嚴重的執行時錯誤，它會導致 PHP 程式碼執行終止執行。
3. Warning: 警告錯誤是一種尚能補救和非致命的執行錯誤，PHP 引擎會試圖繼續執行程式碼。
4. Notices: 注意錯誤是一種很小和非致命的錯誤，只是用來提醒程式碼可能有錯誤。例如沒有初始變數值。


- $_GET PHP 幫你準備好變數，可以直接用


