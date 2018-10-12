留言板切版

- 創資料庫和資料表之後，我們可以開始在其中添加數據。

- 以下是一些要遵循的語法規則：

    - 必須在PHP中引用SQL查詢
    - 必須引用SQL查詢中的字符串值
    - 不得引用數字值
    - 不得引用單詞NULL

- INSERT INTO語句用於向MySQL表添加新記錄：

`INSERT INTO table_name (column1, column2, column3,...)VALUES (value1, value2, value3,...)`
 
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

- 通過include 或require 語句，可以將PHP 文件的內容插入另一個PHP 文件（在服務器執行它之前）。

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