# PHP 語法基礎

- 結尾記得加 `;`
- 字串拼接用 `.`
- [單雙引號的使用](https://www.ptt.cc/bbs/PHP/M.1141277549.A.A95.html)
    1. 使用單引號，內容全部當字串輸出
    2. 使用雙引號才會解析變數，雙引號裡面用雙引號需用 `\` 跳脫。
- 變數，名稱前面直接加上$，即是變數，就像一個火柴盒，存放你給它的東西(型態)。

```php
$box = 123;
$arr = array('qjdiqwdj', 2 ,3 ,4, '1e212e21e);
$a_bool = true;   // a boolean
$a_str = 'foo';    // a string
```

[PHP 手冊>語言參考>變數](http://docs.php.net/manual/tw/language.variables.basics.php)

- 陣列
    1.使用 [var_dump](http://docs.php.net/manual/zh/function.var-dump.php): 會印出陣列的長度、陣列裡每個 index 的類型與值。
    2.使用 [print_r](http://docs.php.net/manual/zh/function.print-r.php): 只會打印陣列裡每個 index 的類型與值。

```php
$arr = array('qjdiqwdj', 2 ,3 ,4, '1e212e21e);
echo $arr;  //=> 會顯示 Notice:Array to string conversion in ... on line ...
var_dump($arr)
print_r($arr)

```


