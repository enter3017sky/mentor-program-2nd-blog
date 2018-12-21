# MySQL

## 在 CLI 操作 MySQL

- 登入資料庫 `mysql -u root -p`
- 如果已經用 `sudo -i`或`sudo -u`登入 root 的話，不需要指定使用者，直接`mysql -p`後輸入密碼登入。

- 不登入查詢資料庫
  - 顯示 MySQL 伺服器中資料庫資訊：`mysqlshow -h localhost -u root -p`
  - 顯示每個資料表中的資料的行數: `mysqlshow -h localhost -u root -p --count`
  - root 顯示 MySQL 伺服器中資料庫資訊：`mysqlshow -p`
  - root 顯示每個資料表中的資料的行數: `mysqlshow -p --count`

- 說明
  - `-h`: 指定資料庫伺服器的主機名稱或 IP
  - `-u`: 連接資料庫伺服器的使用者名稱
  - `-p`: 連接資料庫伺服器的使用者密碼

---

## 在 MySQL 的 CLI 上使用

1. 資料庫基本操作
    - 建立資料庫：`create database your_database_name;`
    - 顯示所有資料庫：`show databases;`
    - 刪除資料庫：`drop database your_database_name;`
    - 使用/選擇資料庫：`use your_database_name;`
![image](https://ppt.cc/far6yx@.png)

2. 選擇資料庫 `USE your_database` 之後。

    - 顯示資料表：`show tables`
    - 列出資料表欄位資訊： `describe your_table_name`
    - 建立資料表：
        - 說明：
        - 不分大小寫
        - 型態:
            - `INT` 整數,
            - `TEXT`,
            - `VARCHAR(Length)`變動長度的字串，最長 Length 個字。
        - 自動排序: `auto_increment`
        - `not null`: 不要有預設值是 `NULL`
        - `PRIMARY KEY()`：主鍵(Primary Key)中的每一筆資料都是表格中的唯一值，不可重複。

```PHP
CREATE TABLE jobs(
    id INT auto_increment,
    title VARCHAR(64) not null,
    description text not null,
    salary varchar(128) not null,
    link varchar(512) not null,
    PRIMARY KEY(id)
    );

```

![image](https://ppt.cc/fT8hwx@.png)

---

3. 就可以操作 CRUD 相關指令

- 新增單筆資料到 jobs 表格
  - 省略 _column_name_ 的話，所有欄位依序給值，自動生成的主鍵給 `null`
  - `INSERT INTO jobs VALUES(null, '工程師', '碼農', '40k~???k', 'http://google.com');`
  - `INSERT INTO jobs (title, description, salary, link) VALUES ('工程師', '碼農', '40k~???k', 'http://google.com');`
  - 部分欄位給值： `INSERT INTO jobs (title, description, salary) VALUES ('工程師', '碼農', '40k~???k');`

![image](https://ppt.cc/f9FJYx@.png)

### 其他範例

>參考 _歐萊禮 PHP 程式設計_

- 刪除 1979 年出版的書籍：
  - `DELETE FROM books WHERE pub_year = 1979;`

- 把 _roots_ 的出版年改為 1983：
  - `UPDATE books SET pub_year=1983 WHERE title='roots';`

- 查詢 80 年代出版的書籍：
  - `SELECT * FROM books WHERE pub_year>1979 AND pub_year<1990;`

- 指定回傳需要的欄位：
  - `SELECT title, pub_year FROM books WHERE pub_year>1979 AND pub_year<1990;`

- 查詢多張表格的匯集資訊。例如把 book 和 author 兩張表合併，可以看到每本書是誰寫的：
  - `SELECT authors.name, books.title, FROM books, authors WHERE authors.authorid = books.authorid;`

- 把表格名稱縮短(as 可省略)：
  `SELECT a.name, b,title FROM books b, authors a WHERE a.authorid = b.authorid;`
  `SELECT a.name, b,title FROM books AS b, authors AS a WHERE a.authorid = b.authorid;`

4. 離開: `exit`、`quit`

- 除了離開指令，其他要注意結尾分號。

---

參考資料：

- [MySQL 語法匯整](http://note.drx.tw/2012/12/mysql-syntax.html)
- [實機練習系統 Up: PHP+MySQL Previous: PHP+MySQL ](https://dywang.csie.cyut.edu.tw/dywang/php+mysql/node1.html)