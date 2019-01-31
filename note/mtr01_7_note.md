



## Library 函式庫

- 為什麼要有 Library？
    - 「不要自己動手造輪子。」
    - 增進開發效率
    - Library 裡面有很多 JavaScript 或 CSS 的函式

## JQuery

- 就只是一個 JavsScript 的 Library(函式庫)
- 幫你把跨瀏覽器的支援都做好了，這是最大的優點，比原生 vanilla js 方便許多

```js
$('.item').fadeOut();
$('.item').hide();
$('.itme').css('background', 'red')
$('a').attr('href', 'https://google.com')

```

## Bootstrap

- 一個 UI Library，包含 CSS 跟 JS 兩個部分
- 幫你寫好很多個 class，只要套上 class 就能讓網頁煥然一新。
- 可搭配 Bootswatch 更換版型。


## PHP 與 JSON

 - 可以用 json_encode 輸出 json 格式的資料，這樣比較方便讓前端拿資料。



## Ajax 

<script href="https://code.jquery.com/jquery-3.3.1.js"></script>
1. 首先要阻止表單的發送，然後取得應該會送出的資訊(留言內容、parent_id)

```js
    e.preventDefault()
    $(e.target).find('textarea[name=content]').val()
    $(e.target).find('input[name=parent_id]').val()
```

2. 送 Requet 給 Server

```js
// add_comments.php

$arr = array('result' => 'success');
echo json_encode($arr);

```