# DOM 事件

- 事件對 DOM 而言，是與 DOM 的元素、document 物件、或 window 物件有關的預定／自訂時刻（moment in time）。

- 這些時間事件通常都是預先定義的。而且透過相關的功能（即處理器／回呼）來計時，在這時間事件發生的時候（或發生過後）觸發。

- 我們可以透過 UI 的狀態（例如當輸入欄位被聚焦，或某些事物被拖曳時）、JavaScript 程式的運行狀態（例如當網頁載入時，或 XHR 請求完成時），或程式本身的狀態（例如在網頁載入後，監視所有滑鼠按鍵 30 秒）來初始化這些時間事件。

- 你可以使用 __行內屬性事件處理器__、__屬性事件處理器__、或 __addEventListener()__ 方法來設定事件。

- 在下列程式中，我將展示這些事件設定模式。這些模式都會添加一個 click 事件，當滑鼠點選 HTML 文件的 `<div>` 被滑鼠點擊時會呼叫它們。

```html

<html>
<!-- 行內屬性事件處理器模式 -->
<body onclick="console.log('fire/trigger attribute event handler')">
<div>click me</div>

<script>
// 屬性事件處理器模式
var elementDiv = document.querySelector('div');
elementDiv.onclick = function(){
    console.log('fire/trigger property event handler')
}

// addEventListener 方法模式
elementDiv.addEventListener('click', function(){
    console.log('fire/trigger addEventListener')
}, false);


</script>
</body>

```

#### 屬性事件處理器模式
- 缺點在於一次只能對事件屬應指派一個值。也就是說，當你將事件指派為屬性值時，不能對一個 DOM 節點附加超過一個屬性事件處理器。
- 下次程式對 onclick 屬性賦值兩次，之後事件被呼叫時，會使用最後一次的賦值。

```javascript

// 屬性事件處理器
elementDiv.onclick = function(){
    console.log("I'm first, but I get overridden/replaced");
}

// 覆寫／替換之前的值
elementDiv.onclick = function(){
    console.log('I win')
}

```

### 使用 preventDefault() 來取消預設的瀏覽器事件

```javascript


document.querySelector('a').addEventListener('click', function(event){
    event.preventDefault(); // 停止<a>載入一個 URL 的預設事件
}, false);

document.querySelector('input').addEventListener('click', function(event){
    event.preventDefault(); // 停止核選方塊的預設事件，它會切換方塊狀態
}, false);

document.querySelector('textarea').addEventListener('keypress', function(event){
    event.preventDefault(); // 停止文字區域的預設事件，它會添加輸入的文字
}, false);


```

### 事件流

- 當一個事件被呼叫時，事件會在 DOM 流動或傳播，並觸發同樣的事件，或其他的節點及 JavaScript 物件。

- 你可以編寫事件流，讓它成為：
    - 捕捉階段（capture phase，即 DOM 樹的樹幹到分枝）
    - 泡泡階段（bubbling phase，即 DOM 樹的分枝到樹幹）
    - 或兩者



```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>event flow 事件流</title>
</head>
<body>
    <div>click me to start event flow</div>
</body>
<script>
    // 在 addEventListener() 傳入一個布林參數 true 來觸發捕捉事件，而不是只有泡泡事件。

    // 1. 捕捉階段
    window.addEventListener('click', function(){
        console.log(1);
    }, true);

    // 2. 捕捉階段
    document.addEventListener('click', function(){
        console.log(2);
    }, true);

    // 3. 捕捉階段
    document.documentElement.addEventListener('click', function(){
        console.log(3);
    }, true);

    // 4. 捕捉階段
    document.body.addEventListener('click', function(){
        console.log(4);
    }, true);

    // 5. 在捕捉階段期間出現目標階段
    document.querySelector('div').addEventListener('click', function(){
        console.log(5);
    }, true);

    // 6. 在泡泡階段期間出現目標階段
    document.querySelector('div').addEventListener('click', function(){
        console.log(6);
    }, false);

    // 7. 泡泡階段
    document.body.addEventListener('click', function(){
        console.log(7);
    }, false);

    // 8. 泡泡階段
    document.documentElement.addEventListener('click', function(){
        console.log(8);
    }, false);
    
    // 9. 泡泡階段
    document.addEventListener('click', function(){
        console.log(9);
    }, false);

    // 10. 泡泡階段
    window.addEventListener('click', function(){
        console.log(10);
    }, false);

</script>
</html>

```