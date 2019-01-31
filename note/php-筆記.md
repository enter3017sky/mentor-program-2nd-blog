## [echo](http://php.net/manual/zh/function.echo.php)

- 字串可以當成多個參數個別傳送，或串接再一起當成一個參數傳送

```php
// Strings can either be passed individually as multiple arguments or
// concatenated together and passed as a single argument
echo 'This ', 'string ', 'was ', 'made ', 'with multiple parameters.', chr(10);
echo 'This ' . 'string ' . 'was ' . 'made ' . 'with concatenation.' . "\n";
```

- tip
    - php 中 __`.`__、__`,`__ 的差別。
    - 相對 echo 中拼接字串而言，傳遞多個參數比較好，考慮到了PHP中連接運算符（“.”）的優先級。傳入多個參數，不需要圓括號保證優先級：
    - 如果是拼接的，相對於加號和三目元算符，連接運算符（“.”）具有更高優先級。為了正確性，必須使用圓括號：

```php
echo "Sum: ", 1 + 2;
echo "Hello ", isset($name) ? $name : "John Doe", "!";
echo 'Sum: ' . (1 + 2);
echo 'Hello ' . (isset($name) ? $name : 'John Doe') . '!';

```

### PHP 建立陣列

- 陣列的鍵值(key): 字串型態、數字型態、字串及數值型態
- `array()`

```php
$vegetables = array(
            'conn' => 'yellow',
            'beet' => 'red',
            'carrot' => 'orange');
$dinner = array(
            0 => 'Sweet Corn and Asparagus.',
            1 => 'Lemon Chicken',
            2 => 'Braised Bamboo Fungus');
```

- 另外一個寫法，使用中括號`[]`
    - 新增陣列 `[]`，PHP 會在 鍵值(key)自動遞增 index
    - 在陣列的最後加入一個新元素。

```php
$vegetables = ['conn' => 'yellow', 'beet' => 'red', 'carrot' => 'orange'];
$dinner = [0 => 'Sweet Corn and Asparagus.', 1 => 'Lemon Chicken', 2 => 'Braised Bamboo Fungus'];
$computers = ['trs-80' => 'Radio Shack', 2600 => 'Atrai']
```

- `array_push()`

```php
array_push($vegetables[,mixed $... ] ))
```

```php
// 新增兩個元素到 $lunch
// 這行會設定 $lunch[0] = 'Chicken';
$lunch[] = 'Chicken';

// 這行會設定 $lunch[1]
$lunch[] = 'Flank Skin with Spiced Flavor';

```

#### 陣列大小

- 透過 `count()` 函式可以取得陣列大小。

```php
$vegetables = array(
            'conn' => 'yellow',
            'beet' => 'red',
            'carrot' => 'orange');

$dishes = count($vegetables);
print $dishes;

```


### 存取表單參數（多值欄位）

- 一個表單的欄位如果可以有多個值的話，必須要在欄位名稱後面加上 []。加了 [] 是告訴 PHP，將此多值欄位變成陣列。

```php
<div class='form-check'>
    <input name='category_id[]' class='form-check-input' type='checkbox' value='$id' id='check_$id' $is_checked/>
    <label class='form-check-label' for='check_$id'>$name</label>
</div>";
```

- 可以想像成，表單送出的時，有一個叫 `category_id[]` 表單欄位做了以下的事情。

```php
$_POST['category_id'][] = '12'
$_POST['category_id'][] = '23'
```



```php
// Here are the submitted values
// 使用空連結運算子 ?? 來避免 PHP 在沒有 POST 變數值時產生錯誤訊息
product_id: <?php print $_POST['product_id'] ?? '' ?>
category: <?php print $_POST['category] ?? '' ?>

```

```php
// php7 以後才支援，更早的版本使用
if(isset($_POST['product_id'])) {
    print $_POST['product_id']
}
```




### PHP Notice: undefined index 完美解决方法



```php
// 解法一：加 @
$category_arr = @$_POST['category_id'];

解法二: if(isset())
if(isset($_POST['category_id'])) {
    $category_arr = $_POST['category_id'];
}
```

參考資料：[PHP Notice: undefined index 完美解决方法](http://www.ccps.tp.edu.tw/joomla/index.php/2-uncategorised/2-php-notice-undefined-index)


### PHP 中 htmlentities 和 htmlspecialchars 的區別

消毒，轉換 html 的字元。htmlentities 轉換所有的 html 標記(編碼沒設定好會出現亂碼), htmlspecialchars只格式化& ' " <和>這幾個特殊符號