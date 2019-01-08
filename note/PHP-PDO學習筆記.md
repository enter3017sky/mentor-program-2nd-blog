# PHP PDO 學習筆記

- 參考資料: [用戶創建、權限、刪除操作](https://www.kancloud.cn/curder/mysql/355296)

- PDO::exec() 不返回 SELECT 語句的結果，返回 DELETE、UPDATE、INSERT INTO 受影響的行數。
> PDO::exec() does not return results from a SELECT statement.


```php
$result = $pdo->exec("UPDATE products SET amount = amount + 2 WHERE id >1")
var_dump($result=$pdo->exec("UPDATE products SET amount = amount + 2 WHERE id >1"));
echo $result ? 'work<br><br>':'fail<br><br>';

// 與三元運算子混搭使用
echo var_dump($pdo->exec("UPDATE products SET amount = amount + 2 WHERE id >1")) ? 'work<br><br>':'fail<br><br>';
// => int(4) work

$sql = "INSERT INTO orders(product_id, amount, price) values(1,2,3),(2,3,4),(3,4,5)";
echo var_dump($pdo->exec($sql)) ? 'success': 'fail1212';
// 以上這樣用會 fail
echo print_r($pdo->exec($sql)) ? 'success': 'fail1212';

```


- [Difference between PDO->query() and PDO->exec()](https://stackoverflow.com/questions/16381365/difference-between-pdo-query-and-pdo-exec)

- 對於在程序中只需要發出一次的SELECT語句，請考慮發出 PDO::query()。
> For a SELECT statement that you only need to issue once during your program, consider issuing PDO::query().

- 對於需要多次發出的語句，請使用 PDO::prepare()準備PDOStatement對象，並使用 PDOStatement::execute()發出語句。
> For a statement that you need to issue multiple times, prepare a PDOStatement object with PDO::prepare() and issue the statement with PDOStatement::execute().

```php
$result = $pdo->query('SELECT column_name FROM table_name')->execute();
var_dump($count_rows);//=> bool(true) 返回布林值
echo $count_rows;//=> 1 返回 1or0


$rows_1 = $pdo->query('SELECT amount FROM products')->fetchAll(PDO::FETCH_NUM);
var_dump($rows_1);
echo "<br/>";
echo $rows_1[2][0];
echo "<br/>";
// 以上返回二維陣列
// array(5) {
//   [0]=> array(1) {
//     [0]=> string(3) "123"
//   }
//   [1]=> array(1) {
//     [0]=> string(3) "234"
//   }
//   [2]=> array(1) {
//     [0]=> string(3) "345"
//   }
//   [3]=> array(1) {
//     [0]=> string(3) "456"
//   }
//   [4]=> array(1) {
//     [0]=> string(3) "567"
//   }
// }


[PDOStatement::fetchAll](http://php.net/manual/zh/pdostatement.fetchall.php)
$rows_2 = $pdo->query('SELECT amount FROM products')->fetchAll(PDO::FETCH_COLUMN);
var_dump($rows_2);
echo "<br/>";
echo $rows_2[3];

// 以上返回一維陣列
// array(5) {
//   [0]=> string(3) "123"
//   [1]=> string(3) "234"
//   [2]=> string(3) "345"
//   [3]=> string(3) "456"
//   [4]=> string(3) "567"
// }

// SELECT 某個欄位存不存在(這個實際上是查詢有沒有某個訂單)
$q = "SELECT product_id FROM orders where product_id = 1";
$result = $pdo->query($q)->fetchAll(PDO::FETCH_COLUMN);
var_dump($result);
if($result) {
    echo "good ";
} else {
    echo "fail";
}




fetchColumn() 的用法

// 用在 DELETE 會出錯？？
$stmt = $pdo->prepare("DELETE FROM orders");
$stmt->execute();
$name = $stmt->fetchColumn();

// 用在 DELETE 會出錯？？
$count = $pdo->query("select count(*) from products")->fetchColumn();
echo $count;

$stmt = $pdo->prepare("select price from orders where product_id = 1");
$stmt->execute();
$name = $stmt->fetchColumn();
echo "id=1的價格: $name <br>";

$count = $pdo->query("select count(*) from orders")->fetchColumn();
echo "訂單總數: $count <br>";

```

### 刪除資料並返回刪除的筆數

1. 使用 __`exec()`__ 執行 SQL，返回受影響的行數。
> 在使用PDO::exec() 執行INSERT, UPDATE, DELETE 語句時，該方法會返回受影響的行數。

```php
$delete_sql = "DELETE FROM orders";
$deleted = $pdo->exec($delete_sql);
$message = "刪除 $deleted 筆商品的訂單，重置庫存成功";

```

2. __`rowCount()`__;
> 使用 PDOStatement::rowCount()

```php
// 使用 PDOStatement 類別的 rowCount() 的話，$pdo->query($delete_sql)顯示不出影響的筆數;
$delete_sql = "DELETE FROM orders";
$stmt = $pdo->prepare($delete_sql);
$stmt->execute();
$deleted = $stmt->rowCount();
$message = "刪除 $deleted 筆商品的訂單，重置庫存成功";
```

## 連結資料庫

> 歐萊禮 PHP 學習手冊

- 使用 PDO 第一件事，是連線到資料庫，並將連線狀態存於變數
- PDO 建構子第一個參數被稱為 __資料來源名稱__(_Data Source Name,_ __DSN__)，開頭是資料庫的種類，然後接個冒號，冒號後面用分號分開一個個的健值(key=value)參數，帳號、密碼分別為第二、第三個參數。

> mysql: host; port; dbnme; charset; unix_socket(代表本地端連結，使用這個就不能指定 host port，反之亦然)

```php
> 範例1

$dsn = 'mysql:host=localhost; dbname=enter3017sky_db; charset=utf8';
$db_username = 'root';
$db_password = 'ji394su3';

$db = new PDO($dsn, $db_username, $db_password);
$db->query("SET NAMES 'utf8'");
```

```php
> 範例2：連接資料庫並設定錯誤模式

try {
    $db = new PDO($dsn, $db_username, $db_password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    print "<h1>Couldn't connect to the database: <br>" . $e->getMessage() . "</h1>";
}
```

## 儲存資料

- 假定與資料庫已經連接成功，呼叫 new PDO() 回傳的物件已經可用，接下來就是呼叫物件的方法來送出 query 存取資料庫。
- 如果要將資料夾進資料庫中，就要在物件的 exec() 方法使用 insert 述句。

```php
> 範例8-7

try {
    $db = new PDO($dsn, $db_username, $db_password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $affectedRows = $db->exec("INSERT INTO jobs (title, salary123, description, link) VALUES('worker', '40k', '走路的人', 'work.com')");
} catch (PDOException $e) {
    print "Couldn't insert a row: " . $e->getMessage() . "<br>";
}
```

### 檢查 exec() 錯誤

- 因為呼叫了 `$db->setAttribute()` 並設定了錯誤模式，PDO 只要有錯誤就丟出例外。範例8-7 印出 `Couldn't insert a row: SQLSTATE[42S22]: Column not found: 1054 Unknown column 'salary123' in 'field list'`
- PDO 有三種錯誤模式：例外、無聲跟警告，例外模式可以藉由呼叫 `setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)` 來設定，這種模式是最適合除錯，而且確保能抓到任何資料庫錯誤，如果不處理 PDO 的例外的話，程式就無法繼續執行。

- PDO 預設的錯誤模式是無聲模式，如果exec()內部出錯了，它會回傳 false，範例 8-8 會檢查 exec()的回傳值，然後在呼叫 PDO 的 `errorInfo()` 方法取得更多錯誤訊息。

```php
> 範例 8-8

try {
    $db = new PDO($dsn, $db_username, $db_password);
} catch (PDOException $e) {
    print "<h1>Couldn't connect to the database: <br>" . $e->getMessage() . "</h1>";
}

$result = $db->exec("INSERT INTO jobs (title, salary123, description, link) VALUES('worker', '40k', '走路的人', 'work.com')");

if(false === $result) {
    $error = $db->errorInfo();
    print "Couldn't insert!\n";
    print "SQL Error={$error[0]}, DB Error={$error[1]}, Message={$error[2]}\n";
    var_dump($error);
}

```

- 範例 8-9 藉由設定 `PDO::ATTR_ERRMODE` 為 `PDO::ERRMODE_WARNING` 啟動警告模式。
- 在這個模式中，大部分的行為跟無聲模式一樣，不會丟出例外，遇到錯誤會回傳 false，不同之處是，警告模式會輸出警告層級的錯誤訊息，訊息可以被設定為輸出到畫面或記錄檔中。

```php
> 範例 8-9

try {
    $db = new PDO($dsn, $db_username, $db_password);
} catch (PDOException $e) {
    print "<h1>Couldn't connect to the database: <br>" . $e->getMessage() . "</h1>";
}

$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
$result = $db->exec("INSERT INTO jobs (title, salary123, description, link) VALUES('worker', '40k', '走路的人', 'work.com')");
if(false === $result) {
    $error = $db->errorInfo();
    print "Couldn't insert!\n";
    print "SQL Error={$error[0]}, DB Error={$error[1]}, Message={$error[2]}\n";
}
```

```
> 錯誤訊息
Warning: PDO::exec(): SQLSTATE[42S22]: Column not found: 1054 Unknown column 'salary123' in 'field list' in /var/www/html/job_board/PDO-practice.php on line 103
Couldn't insert! SQL Error=42S22, DB Error=1054, Message=Unknown column 'salary123' in 'field list'
```

## 取得資料

- 以 _[BE101] 用 PHP 與 MySQL 學習後端基礎_ 實作來練習。

```php
> 範例 8-30 用 query() 與 fetch() 取得資料

$sql = "SELECT * FROM jobs";
$q = $db->query($sql);
while ($row = $q->fetch()) {
    print"
    <div class='job card card-body'>
        <h2 class='job__title card-title'>" . $row['title'] . "</h2>
        <p class='job__desc card-text'>" . $row['description'] . "</p>
        <p class='job__salary'>" . $row['salary'] . "</p>
        <a class='job__link badge badge-info' href='" . $row['link'] . "'>更多資訊</a>
    </div>
    ";
}
```

```php
while ($row = $q->fetch()) {
    echo    "<div class='job card card-body'>";
    echo        "<h2 class='job__title card-title'>" . $row['title'] . "</h2>";
    echo        "<p class='job__desc card-text'>" . $row['description'] . "</p>;
    echo        "<p class='job__salary'>" . $row['salary'] . "</p>";
    echo    "<a class='job__link badge badge-info' href='" . $row['link'] . "'>更多資訊</a></div>";
}
```


### 計算 row 數量

```PHP

<!-- 用 PDO 的函式 -->
$result = $db->query('SELECT * FROM jobs');
print_r($result->rowCount());

$num = $result->rowCount();
print_r($num);


<!-- 直接返回數字 -->
$count_rows = $db->query('SELECT * FROM jobs');
$result = $count_rows->fetchAll();
print_r(COUNT($result));
=> 7

<!-- 返回一個陣列 -->
$count = $db->query('SELECT COUNT(*) FROM jobs');
$rows = $count->fetch();
print_r($rows);

=> Array ( [COUNT(*)] => 7 [0] => 7 )

<!-- 返回一個陣列：取得 products 這個 table 有幾個包含 amount(column)的 row  -->
$count = $pdo->query('SELECT COUNT(amount) FROM products')->fetchAll(PDO::FETCH_COLUMN);

<!-- 返回一個陣列：取得每個 amount(column)的數量 -->
$count = $pdo->query('SELECT amount FROM products')->fetchAll(PDO::FETCH_COLUMN);

```

## 安全地取得資料

- 在 SELECT 述句中，也跟使用 INSERT、UPDATE 或 DELETE 一樣，可利用？替換符，而不作直接 `query()` 的動作，使用 `prepare()`、`execute()`，我們只要把內容改成 SELECT 述句就可以了。

```php
> 在 SELECT 中使用替換符
$id = 30

$stmt = $db->prepare('SELECT * FROM jobs WHERE id > ?');
$stmt->execute(array($id));
while ($row = $stmt->fetch()) {
    print"
    <div class='job card card-body'>
        <h2 class='job__title card-title'>" . $row['title'] . "</h2>
        <p class='job__desc card-text'>" . $row['description'] . "</p>
        <p class='job__salary'>" . $row['salary'] . "</p>
        <a class='job__link badge badge-info' href='" . $row['link'] . "'>更多資訊</a>
    </div>
    ";
}

```





## PHP Exceptions 種類與使用情境說明
### 主要 Exception
在 PHP 5，Exception 是最終端的主要類別，所有 PHP exception 類別都由此繼承出來。

### Throwable
- PHP7 以後，Throwable 是最上層所有可以被 throw 關鍵字丟出的 interface，它不能直接 new，也不能直接用 class implement，一定要另外從 Error 或 Exception 繼承出來才能使用。使用 Throwable 的好處是可以連同一般語法錯誤也當作 Exception 進行錯誤處理與顯示除錯訊息。

![image](https://windspeaker.s3.amazonaws.com/post/asika/2018/03/19/c66c98c187d8823cc3b5cd1e601c87de.jpg)

在 PHP5 中，可以用兩層 catch 來確保同時運作在 5 與 7 中所有錯誤都被捕獲:
```php

try {
    // ...
} catch (Exception $e) {
    // ...
} catch (Throwable $t) {
    // ...
}
Throwable 與 Exception 的
```

![image](https://windspeaker.s3.amazonaws.com/post/asika/2018/03/20/8281e3673909c6794b21718b795d287a.jpg)

參考資料: [PHP Exceptions 種類與使用情境說明](http://asika.windspeaker.co/post/3503-php-exceptions)