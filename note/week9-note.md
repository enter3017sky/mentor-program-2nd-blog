
# week9 前端中階（上）

### PostCSS - 轉成 CSS 再加上其他東西

> 著重在用跨瀏覽器支援的部分

### CSS 預處理器 (proprocessor)

> 著重在用程式化的方法寫 CSS

- 用程式化的方式寫 CSS，最後 compile 成真的 CSS

#### 常見的 CSS 預處理器

1. Scss/Sass
2. Less
3. Stylus

##### Scss/Sass

> Sass 不能加分號

1. $variables: 用變數取代

```css
$brand-color: red;
$font-stack: Helvetica, sans-serif;

.box {
    font: 100% $font-stack;
    background: $brand-color;
}
.list {
    background: $brand-color;
}
```

2. Nesting 巢狀

```css
.card {
    width: 100px;
    .box {
        width:30px;
    }
}

// compile to
.card { width: 100px; }
.card .box {
    width 30px;
}
```

3. Parent

- `&` 代表父元素名稱

```css
.card {
    width: 100px;
    &__box {
        width: 30px;
        &--disable{
            display: none;
        }
    }
}

// compile to
.card { width: 100px; }
.card__box {
    width 30px;
}
.card__box--disable {
    display: none;
}

```

4. Mixin (就像 function)





CACHE 機制 
[循序漸進理解 HTTP Cache 機制 | TechBridge 技術共筆部落格](https://blog.techbridge.cc/2017/06/17/cache-introduction/)

- `Expires` 方法1: 要達成上述的功能，可以在 HTTP Response Header 裡面加上一個 Expires 的字段，裡面就是這個 Cache 到期的時間，例如說：
    - `Expires: Wed, 21 Oct 2017 07:28:00 GMT`
    - 打開 Chrome dev tool，就會看到它寫著：`Status code 200 (from disk cache)`，代表這個 Request 其實沒有發出去，Response 是直接從 disk cache 裡面拿的。
    - 如果使用者活在未來(時間設定在未來的時間)，瀏覽器會認為所有的 cache 是過期的，就會重新發送 Requst。
    - Expires 是 HTTP 1.0 就存在的 Header。

- `max-age` 方法2: 為了解決上述 Expires 會碰到的問題，換個方式思考，以相對時間來看的話，就不會發生了。
    - HTTP 1.1 有一個新的 header 出現了，叫做：`Cache-Control`

```php

- Server 端的 _HTTP Response Header_  加上 `cache-control`
<?php
// 利用 header 加上 Cache-Control
header('cache-control: max-age=60');
echo "現在時間： " . date("y/m/d , h:i:sa") . "<br/>";
?>

<br/>
<a href="./cache_練習.php">Click me</a>


```


- `Last-Modified`、`Last-Modified-Since`
- 在 Server 傳送 Response 的時候，可以多加一個Last-Modified的 Header，表示這個檔案上一次更改是什麼時候。而當快取過期，瀏覽器下次再發送 Request 的時候，就可以利用這個資訊，改用If-Modified-Since來跟 Server 指定拿取：某個時間點以後有更改的資料。







### 事件迴圈 Event loop

- process 程序｀
- thread 執行緒

JavaScript 是單執行緒(single thread)的程式，一次只能做一件事情，那該如何達到非同步的事件呢


call stack :呼叫堆疊;｀
call back queue