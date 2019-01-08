

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