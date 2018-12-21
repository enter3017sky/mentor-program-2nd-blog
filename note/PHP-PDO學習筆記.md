# PHP PDO 學習筆記

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









// 一旦與資料庫連線後，便可以使用該連線發送 SQL 指令到伺服器，以 UPDATE 為例
// $db->query("INSERT INTO jobs VALUE(null, 'test', 'description', '400k', '123')");
// $result = $db->query("UPDATE jobs SET title='超級工程師', link='google.com' WHERE id=17");



/** 
PDO 與預先處理的指令：
預先處理的指令會搭配 PDO 呼叫的個階段。

程式碼先「準備」SQL 指令，然後「執行」，接下來使用 while 輸出所有結果。
且最終把 $statement 指定為 null ，藉以釋放該物件。
*/
// $statement = $db->prepare("SELECT * FROM jobs");
// $statement->execute();
// while($row = $statement->fetch()) {
//     print_r($row);
// }
// $statement = null;


/**
用更少的程式碼完成同樣的事情，這是因為 SQL 指令的 VALUES 並沒有命名元素，因此在 execute 指令中的陣列只需要按順序發送資料，不需要名稱。你只要確保送入育處先處理的指令的資料位置即可。
 */

// $link = 'http://google.com';
// $title = '工程師';
// ReflectionClass::export('PDO');


// $statement = $db->prepare("INSERT INTO jobs (title, description, salary, link)" . "VALUES (?,?,?,?)");
// $statement->execute(array('ＣＥＯ','管理階層', '100kｕｐ', 'google.com'));

// $sql = $db->prepare("SELECT * FROM jobs WHERE link=:link AND title=:title");

// $sql->bindValue(":link", $link, PDO::PARAM_STRING);
// $sql->bindValue(":title", $title, PDO::PARAM_STRING);











try {
    $db = new PDO($dsn, $db_username, $db_password);
    // $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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


?>