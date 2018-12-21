
# 留言板切版

- 創資料庫和資料表之後，我們可以開始在其中添加數據。

- 以下是一些要遵循的語法規則：

    - 必須在PHP中引用SQL查詢
    - 必須引用SQL查詢中的字符串值
    - 不得引用數字值
    - 不得引用單詞NULL

- __`INSERT INTO`__ 語句用於向 MySQL __資料表(table)__ 添加新記錄：

```js
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)
 ```

1. `<form method="POST" action="add_comment.php">`
    - 負責插入留言
2. `<input type='hidden' name='parent_id' value="0" />` 
    - 小技巧 插入一個看不見的東西來拿到留言的資料

[PHP My Admin](http://mentor-program.co/huli/phpmyadmin/db_structure.php?db=mentor_program_db)
1. 新增資料表 編碼：`utf8_general_ci`
2. 新增 
    - `id 索引 PRIMARY`
    - `parent_id`
    - `nickname 型態 TEXT`
    - `content 型態TEXT `
    - `created_id 型態:DATETIME`
    - `預設值CURRENT-TIMESTAMP`、

- 在留言板上面測試輸入暱稱、留言
  - 成功的話網頁會顯示`Array ( [nickname] => nickname [content] => text [parent_id] => 0 )`

# PHP include 和 require 語句

- 通過 include 或 require 語句，可以將PHP 文件的內容插入另一個PHP 文件（在服務器執行它之前）。

- include 和 require 語句是相同的，除了錯誤處理方面：
   - require 會生成致命錯誤（E_COMPILE_ERROR）並停止執行檔案
   - include 只生成警告（E_WARNING），並且檔案會繼續執行

- PHP 可以使用 `print_r` 函數顯示陣列元素

```php
 // 測試連接是否成功
<?
    require_once('conn.php');
    print_r($_POST);
?>

// 成功會顯示
Array ( [nickname] => nickname [content] => text [parent_id] => 0 )
```

---
## 密碼的安全性。

 1. 在註冊的頁面使用 password_hash
    - 註冊時，使用者輸入的密碼 hash 後存入資料庫。
    - `$password = password_hash($_POST['password'],
PASSWORD_DEFAULT);`

2. 在登入的頁面使用 password_verify
```php
// 用 password_verify 的話 SELECT username 就好
$sql = "SELECT * FROM enter3017sky_users
        WHERE username = '$username'";
        // AND password = '$password'";

if (password_verify($password, $hash_password)) {
    setcookie("username", $username, time()+3600*24);
    printMessage('登入成功', './index.php');
} else {
    printMessage('帳號或密碼錯誤!!', './login.php');
    exit();
}
```

## SESSION  機制

1. 首先第一行輸入 session_start();
2. 在登入之後 $_SESSION['username'] = $username


---

## 登入的範例

```php


<?
    // 使用這個檔案
    require_once('conn.php');

    $username = '';
    if(isset($_POST['username']) && isset($_POST['password']) ){
        $username = $_POST['username'];
        $password = $_POST['password'];
    $sql = "SELECT * FROM users where username='" . $username . "' and password='" . $password . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // echo '登入成功';
        header('Location: week5_index.php');
    } else {
        echo '登入失敗';
        header('Location: loginfail.php');
        // 轉址：登入失敗的頁面
    }
}

    // $username = '';
    // $username = $_POST['username'];
    // $password = $_POST['password'];

    // $sql = "SECLET * from users where username='" . $username . "' and password='" . $password . "'";

    // $result = $conn->query($sql);

    // if($result->num_rows > 0) {
    //     echo '登入成功';
    // } else {
    //     header('localhost: week5_index.php');
    // }
?>

<?php
//     $username = '';
//     if(isset($_POST['username']) && isset($_POST['password']) ){
//         $username = $_POST['username'];
//         $password = $_POST['password'];
//     if ($username === 'admin' && $password === 'admin') {
//         echo '登入成功';
//     } else {
//         header('Location: http://google.com');
//     }
// }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="week5_index.css" />
</head>
<body class='body__set'>
    <header class='head__main'>
        <div class='head__title'>留言版</div>
    </header>
    <div class='login__mian'>
        <form class='login__form' action='/enter3017sky/week5_login.php' method='POST'>
        <!-- required="required" 提交之前填寫輸入字段的提示 -->
            <label class='input__user input' name='username'>
                username: <input name='username' type="username" required="required" />
            </label>
            <label class='input__pass input' name='password'>
                password: <input name='password' type='password' required="required" />
            </label>
            <label class='input__nickname input' name='nickname'>
                nickname: <input name='username' required="required" />
            </label>
            <div id='btn'>
                <button class='btn' name='submit' type='submit' action='/enter3017sky/week5_signup.php'>註冊</button>
                <button class='btn' name='submit' type='submit'>登入</button>
            </div>
        </form>
    </div>
    <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>


```

---

### PHP7 與 MySQL 網頁資料庫程式設計：

#### HTML 表單

- id/name: 表單識別和名稱
- method: 設定資料傳送到伺服器端的方法。
  - 值是 GET 是使用 URL 網址的 URL 參數來傳遞。
  - POST 是使用 HTTP 通訊協定的標頭資料傳遞。
  - action: 設定伺服器執行表單處理程式。例如:CGI、ASP、PHP、ASP.NET 等程式的 URL 網址。
- HTTP 請求的 GET、POST 方法
  - GET 當使用者第一次請求網頁時，就是使用 GET 傳遞 URL 參數至 Web 伺服器。
    - PHP 使用 `$_GET` 預定變數來取得欄位值。
  - HTTP 的 POST 方法是送出表單，通常是使用者輸入表單欄位值且按下「送出」鈕後，瀏覽器建立 POST 請求送至伺服器端，傳遞的資料包含使用者輸入的表單欄位值。
    - PHP 使用 `$_POST` 預定變數來取得欄位值。

---
> 以下參考 PHP MySQL JavaScript 與 CSS 學習手冊 Page.270

# 表單處理

> 處單的處理由許多步驟組成，首先要建立一個表單，讓使用者可在此輸入我們要求的資料。接著這筆資料會被送到網頁的伺服器，在那裡進行編輯，通常也會檢查錯誤。如果 PHP 程式認為有些欄位需要重新輸入，表單會被重新顯示出來，同時顯示出錯誤訊息。當程式確認輸入正確，他會進行某些與資料庫有關的動作，例如存入購物的資訊。

- 如果要建立表單，至少應有以下元素：
  - 一個開頭的 `<form>` 與結束的 `</form>` 的標籤。
  - 一個提交類型，可指定 GET 與 POST 方法。
  - 一個以上的 `input` 欄位。
  - 表單數據的傳送目標 URL。

-  __定界符：echo <<<\_END ... \_END;__

> 範例 11-1 建立表單

```php
<?php
echo <<<_END
<html>
    <head>
        <title>Form Test</title>
    </head>
    <body>
        <form method="POST" action="formtest.php">
        What is your name?
        <input type='text' name='name' />
        <input type="submit" />
        </form>
    </body>
</html>
_END;
?>
```

### 取出被提出的資料

> 範例 11-1 只是表單建立的一部分。如果你輸入名字按下提交按鈕，除了重新顯示表單之外，絕對不會發生其他事情。
> 範例11-2 在之前的程式中加入了資料處理的部份。
- 在這裡改變的是開頭的幾行，它們在提交欄位 `name` 檢查 `$_POST` 關聯式陣列。
- 之前已經介紹過 `$_POST` 關聯式陣列，HTML 表單的每一個欄位在它裡面都有一個對應的元素。
- 範例 11-2 使用的輸入名稱是 name，而表單方法是 POST，因此 `$_POST` 陣列的 name 元素儲存了 `$name` 的值。

PHP `isset` 函式的目的是測試 `$_POST['name']` 是否已被賦值，如果沒有程式會顯示`'(Not entered)'`，如果有的話該值會被儲存起來，接著在 `<body>` 陳述式之外會有一行程式會顯示 `$name` 的值。

> 範例 11-2

```php
<?php
if(isset($_POST['name'])) $name = $_POST['name'];
else $name = '(Not entered)';
// echo <<<_END ... _END; 定界符。
echo <<<_END
<html>
    <head>
        <title>Form Test</title>
    </head>
    <body>
        your name is: $name<br>
        <form method="POST" action="formtest.php">
        What is your name?
        <input type='text' name='name' />
        <input type="submit" />
        </form>
    </body>
</html>

_END;
?>
```

# 輸入型別

> HTML 表單有非常多的功能，讓你可以送出各式各樣的輸入，從文字方塊、文字區域、核取方塊、單選紐等等

## 文字方塊

- size: 參數用來指定文字方塊的寬度，代表目前字型顯示在螢幕的字數。
- maxlength: 指定了在這個欄位能夠輸入最多的字元數目。
- type: 是不可或缺的參數，它告訴網頁瀏覽器輸入的型別。
- name: 也是必要的，它提供名稱給這些輸入的資料，在收到表單之後，可用名稱來處理這個欄位。

```html
<input type="text" name="name" size="size" maxlength="length" value="輸入提示的文字" />
```

## 文字區域

```html
<textarea name="name" cols="width" rows="height" wrap="type">This is some default text.</textarea>
```

## 核取方塊 checkbox

- `checked="checked"`: 瀏覽器顯示時，就會被打勾。

```html
<input type="checkbox" name="name" value="value" checked="checked" />
```

## 單選鈕 radio button

```html
8am-Noon: <input type="radio" name="time" value="1" />
Noon-4pm: <input type="radio" name="time" value="2" checked="checked" />
4pm-8pm: <input type="radio" name="time" value="3" />
```

## 隱藏欄位

```html
<input type="hidden" name="submitted" value="yes" />
```

## 下拉選單 Select

- size: 顯示的列數
- multiple: 如果使用 multiple 參數使用者可以透過按著 Ctrl 加上單擊的方式，選擇多重選項。

`<select name="name" size="size" multiple="multiple">`

```html
<select name="veg" size="1">
    <option value="Peas">Peas</option>
    <option value="Beans">Beans</option>
    <option value="Carrots">Carrots</option>
    <option value="Cabbage">Cabbage</option>
    <option value="Broccoli">Broccoli</option>
</select>
```

## Label

- `<label>` 標籤可以提供更好的使用者體驗，透過它，你可以圍繞著一個表單元素，單擊 `<label>` 開始與結束之間都可以選取選項。

```html
<label>8am-Noon: <input type="radio" name="time" value="1" /></label>

<label for="name">What is your name?<input type="text" id="name" /></label>
```

## 提交按鈕

- 我們可以使用 value 參數將提交按鈕的文字改為我們所喜歡的

```html
<input type="submit" value="search" />
```

- 也可以用圖片來取代標準的文字按鈕

```html
<input type="image" name="submit" src="image.gif" />
```



```php
    // 消毒
     
<?
function sanitizeString($var) {
    if (get_magic_quotes_gpc()) $var = stripslashes($var);
    $var = htmlentities($var);
    $var = strip_tags();
    return $var;
}

function sanitizeMySQL() {
    $var = mysql_real_escape_string($var);
    $var = sanitizeString($var);
    return $var;
}
?>
```


- `htmlspecialchars( $string , $quote_flags , $encoding , $double_encode )`
> PHP htmlspecialchars 函數有四個可以使用的參數，第一個參數 $string 是原始字串，必填，第二個參數 $quote_flags 是選用項目，功能是用來設定對引號的轉換，以下是可用的設定方式。
- ENT_COMPAT：預設，只轉換雙引號，不轉換單引號。
- ENT_QUOTES：雙引號與單引號都要轉換。
- ENT_NOQUOTES：單引號與雙引號都不轉換。

```php

<!-- 使用 htmlspecialchars() 函式轉換字元 -->
<? echo htmlspecialchars($row['content'], ENT_QUOTES, 'UTF-8') ?>

```




if (!empty($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $nickname = $_POST['nickname'];



###   Lesson 6-2 之 Web Security

本來是寫好一個 query
    $sql = "INSERT INTO users (username, password, nickname)
    VALUES ('$username', '$password', '$nickname')";
然後 連接 query

$result = $conn->query($sql);

然後就可以 result 這個東西


```js
// 1.首先宣告 stmt，準備好 query
$stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");

// 2. 用 bind_param，去將我們的變數，與「?」做結合，而s: string、i:整數、b:blob、d:浮點數
$stmt->bind_param("ss", $username, $password);

// 3. 執行
$stmt->execute();

// 4.用 get_result 取得資料
$result = $stmt->get_result();

if ($result->num_rows > 0)


```