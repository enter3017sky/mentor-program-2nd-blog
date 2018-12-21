
# Week8-1 後端基礎（下）

> 00:52 第七週檢討
> 19:40 第八週課程介紹
> 25:35 View
> 40:07 Stored procedure
> 50:42 triggers

- _待辦事項_:week7 的 todo-list 增加功能可參考[MTR02 week8](https://youtu.be/QiCm9JE43KM?t=431)。

參考資料：[MySQL 超新手入門（9）表格與索引](http://www.codedata.com.tw/database/mysql-tutorial-9-table-index/)

---

## week8 重點

> 非本科系的得加強一下，底層的運作原理、理論。
- 網路基礎知識
  - TCP/IP
  - OSI 七層 DNS
  - 三次握手

- 資料庫基礎知識
  - ACID
  - 1NF 正規化

- 系統架構基礎知識
  - load balance
  - replication

---

## View



#### 假設有三個關於商品的 table

> 在設計資料庫的時候，可能會遇到的問題，實務方面的經驗。

1. Question1: 為什麼 _products_ 有 price 了，為什麼 _orders_ 也有 price?
   - Answer: 因為產品可能會更新的價格，如果 _orders_ 沒有 price 的欄位的話，在購買或下訂單的時候就不能存取當下的 price。


- orders 訂單

| id | user_id | product_id | quantity | price |
|----|---------|------------|----------|-------|
|  1 |   1     |     1      |      5   |999    |
|  2 |   1     |     3      |      1   |499    |
|  3 |   2     |     3      |      1   |499    |
|  4 |   3     |     4      |      1   |599    |



- products 定價

id|   name   |price
--|----------|--
1 | HTML 入門       | 200
2 | 深入淺出 PHP     | 399
3 | 第一次就上手 SQL  | 299
4 | 完全理解 TCP/IP  |799



- users 購買的人

id | username | password | nickname
-|-|-|-
1|huang00|12345|Nick
2|lin1234|qwesd|JOYY
3|wei4567|ghjkn|MOb
4|chen789|yuoio|12e

2. Question2: 假如今天老闆或行銷人員想看報表，可能是誰購買了或買了蛇魔東西，當然他不想看到這些 user_id, username 的格式。
- 你就會有以下的 _query_

> o.quantity * o.price as total 總價

```sql
SELECT o.id, o.user_id, u.username, p.name, o.quantity, o.price, o.quantity * o.price as total
FROM order AS o
JOIN users as u ON o.user_id = u.id
JOIN products as p on o.product_id = p.id
ORDER BY o.id ASC
```

id | user_id | username | name | quantity | price | total
-|-|-|-|-|-|-
1 |   1 | huang00   | HTML 入門       | 5   | 999 | 4995
2 |   1 | huang00   | 第一次就上手 SQL | 1   |499   | 499
3 |   2 | lin1234   | 第一次就上手 SQL | 1   |499   | 499
4 |   3 | wei4567   | 完全理解 TCP/IP | 1   |599   | 599

- 我們可能會有兩個方法拿到以上的 query 來拿到資料

1. 寫成一個 __function__

```js
function getReport() {
    $query = "
        SELECT o.id, o.user_id, u.username, p.name, o.quantity, o.price, o.quantity * o.price as total
        FROM order AS o
        JOIN users as u ON o.user_id = u.id
        JOIN products as p on o.product_id = p.id
        ORDER BY o.id ASC";
}
```

2. 利用 __View__: 可以資料庫裡面建立一個只讓你檢視資料的 __table__ (虛擬表格)，輸入以下的語法，資料庫裡面就會多一個檢視表。

補充資料：
- [MySQL 超新手入門（11）Views by Michael | CodeData](http://www.codedata.com.tw/database/mysql-tutorial-11-views/)
- [View 檢視表、視圖 (SQL View)](https://www.fooish.com/sql/view.html)

```sql
CREATE VIEW order_detial AS 
    SELECT o.id, o.user_id, u.username, p.name, o.quantity, o.price, o.quantity * o.price as total
    FROM order AS o
    JOIN users as u ON o.user_id = u.id
    JOIN products as p on o.product_id = p.id
    ORDER BY o.id ASC

```

## Stored procedure

- 就像是 SQL 的 function

1. `DELIMITER //`: 把 delimiter(分隔符) 設定為 `//`
2. 在 `BEGIN` 與 `END` 之間的 `;` 才不會出錯
3. `DELIMITER ;`: 在把 delimiter(分隔符) 改回來 sql 預設的 `;`

```sql
DELIMITER //
CREATE PROCEDURE GetOrders(id INT)
    BEGIN
        SELECT * FROM orders WHERE user_id = id;
    END
DELIMITER ;


-- 使用時
CALL GetOrders(1)
```

參考資料：

- [MySQL 超新手入門（13）Stored Routines 入門](http://www.codedata.com.tw/database/mysql-tutorial-13-stored-routines/)

## triggers

- 發生事情前/後要做什麼事

```sql
DELIMITER //
CREATE TRIGGER before_product_update
    BEFORE UPDATE ON jobs
    FOR EACH ROW
BEGIN
    INSERT INTO products_audit(jobs_id, title, description, salary, link,  action)VALUES(OLD.id, OLD.title, OLD.description, OLD.salary, OLD.link, 'UPDATE');
END //
DELIMITER;
```

- Command-line Interface 實際操作

   - 注意個個欄位設定
   - 也可以新增 _操作人員_ 的欄位
   - 在觸發器查看新增的 `TRIGGER`

```sql
CREATE TABLE jobs_audit(
    id INT auto_increment,
    jobs_id int not null,
    title varchar(64) not null,
    description text not null,
    salary varchar(128) not null,
    link varchar(512) not null,
    action varchar(64) not null,
    update_at TIMESTAMP,
    primary key(id)
    );

DELIMITER //
CREATE TRIGGER before_jobs_update
    BEFORE UPDATE ON jobs
    FOR EACH ROW
BEGIN
    INSERT INTO jobs_audit(jobs_id, title, description, salary, link, action)VALUES(OLD.id, OLD.title, OLD.description, OLD.salary, OLD.link , 'UPDATE');
END //
DELIMITER ;
```