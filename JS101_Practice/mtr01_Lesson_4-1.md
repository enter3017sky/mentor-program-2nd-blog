# Lesson 4-1 之 JavaScript

> 前言
1. HTML 作為網頁結構與內容
2. CSS 幫網頁打扮得漂漂亮亮亮亮的
3. JavaScript 寫程式
4. 前端所欠缺的最後一塊拼圖：__JavaScript與網頁的互動。__

## JavaScript 的執行環境

1. 跑在Node.js
2. 跑在瀏覽器

跑在哪裡，就能夠操控跟哪邊有關的東西。
沒辦法突破執行環境的限制。

## DOM - Document Object Model

![image](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)
> 你可以用樹狀圖的方式表現出任何 HTML 文件，

1. 把每一個 HTML 的 Tag 看成一個節點（node）。
- 把不同的 HTML 的節點，對應到 JavaScript 的物件。
2. 可以用 JavaScript 來操縱 DOM。
3. 瀏覽器提供的，讓程式語言來操縱 HTML 的橋樑。

---

![image](http://ravisah.in/images/blog/difference-between-innerhtml-and-outerhtml.png)

- alert() :跳出視窗

## dom 如何使用

- 完整的 `<script>` 標籤的寫法

```html
<body>
    <div id="test">
        hello
    </div>
</body>
<script type="text/javascript">
var test = document.getElementById('test') //選到 id="test" 的元素
console.log(test) //把選到的東西 log 出來。
</script>
```

- 在 Chrome 上面 按 `⌥+⌘+J` 選 `console`，查看。
- 用 `document.getElementById` 拿到東西之後，就可以對這個 HTML 的元素作任何操縱。

```html
<script>
var test = document.getElementById('test') //選到 id="test" 的元素
...
test.style.background = 'red' //改變背景顏色為紅色
...
test.innerText = '12345' // 改變內容
...
test.innerHTML = '<ul><li>1</li><li>2</li></ul>' //把內容改變成清單
...
test.outerHTML = '12345' // 改成 outer 整個 div 都不見了
...
test.style.margin = '20px' // 改變 margin
...
</script>
```

## `<script>` 放在哪裡很重要

![image](https://lh6.googleusercontent.com/40kFXa9VoS83Q9TqBZ3yj3pUmT_A2Yx0ufTPmN2vgRkGFWACYioYtaZ9DW1-HglN7agb1KmTxhPfA-bJokcO36IGFzMTugw8OTDN-01ddBh5xq1bF9g2eYyNGKu8c40XRQiH79RY8cU)

- 這個範例中，把`<script>` 放在`<body>`之前，瀏覽器顯示`mtr01_Lesson_4-1.html:11 Uncaught TypeError: Cannot set property 'innerHTML' of null at mtr01_Lesson_4-1.html:11`，未捕獲類型錯誤：無法將屬性'innerHTML'設置為null
  - js 代碼從上往下執行時，沒有找到合適的標籤而出錯。
  - DOM Tree 建完之後才有東西可以拿
- 把 test log 出來 `console.log(test)` 顯示 `null`

```html
<head>
    <script type="text/javascript">
        var test = document.getElementById('test')
        console.log(test)
        test.innerHTML = '<ul><li>1</li><li>2</li></ul>'
        test.style.background = 'red'
        test.style.margin = '20px'
    </script>
</head>
<body>
    <div id="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

## 真的很想放前面？添加 Event Listener

> 延伸閱讀 [DOMContentLoaded 與 load 的區別](https://www.cnblogs.com/caizhenbo/p/6679478.html)
>[頁面生命週期：DOMContentLoaded, load, beforeunload, unload解析](https://github.com/fi3ework/blog/issues/3)

- 假設網頁上面有一張圖片，如果你用 `DOMContentLoaded` 可能還沒載入好，用 `window 的 load` 的話，它保證你所有東西都加載完成，才會觸發。

```javascript
document.addEventListener('DOMContentLoaded', function(){
    var test = document.getElementById('#test');
})

window.addEventListener('load', function(){
    var test = document.getElementById('#test');
})
```

- `document.addEventListener`: 幫 __document__ 加入一個 _事件_ 監聽器。
- _事件_ 名稱: __`DOMContentLoaded`__，後面接 `function`
- 就不會出錯，因為跑道 `function` 裡面的時候，`DOMContentLoaded` 就 __load__ 好了。

```html
<!-- 事件監聽器 EventListener -->
<head>
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function(){
        var test = document.getElementById('test')
        test.innerHTML = '<ul><li>1</li><li>2</li></ul>'
        test.style.background = 'red'
        test.style.margin = '20px'
    })
</script>
</head>
<body>
    <div id="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

## CallBack Function - Event Listener 背後的概念

- 為了不要讓其他事情被 __阻塞（block）__ 而延伸出來的方式
- 總而言之就是：「好了叫我」

```javascript
document.getElementById('#btn').addEventListener('click', function(){
    alert('click!')
    })

document.getElementById('#btn').addEventListener('click',
    function(){       //匿名函式
        alert('click!')
    }
)
```

- 這個範例跟`EventListener`的範例，效果是一樣的。

```javascript
document.addEventListener('DOMContentLoaded', loaded)
function loaded(){
    var test = document.getElementById('test')
    test.innerHTML = '<ul><li>1</li><li>2</li></ul>';
    test.style.background = 'red';
    test.style.margin = '20px';
}
```

### 匿名函式

- 把 __`function`__ 的名字去掉，直接貼到 `document.addEventListener` 的 __參數__ 裡面。
- 就變成 _匿名函式_ 好處是比較簡潔。

```javascript
// 把 function 的名字去掉，直接貼到 document.addEventListener 的參數裡面。
// 就變成匿名函式 好處是比較簡潔。
document.addEventListener('DOMContenLoaded', function (){
    var test = document.getElementById('test')
    test.innerHTML = '<ul><li>1</li><li>2</li></ul>';
    test.style.background = 'red';
    test.style.margin = '20px';
})
```

>其實前端的JS基礎就是這兩個東西，基本上我們想要的操縱，可以透過把這兩個東西組合而成，而達成。而前端的互動，按按鈕、發表單，這些東西都是事件，所以既然你有 EventListener 的話，你就可以新增一個事件，去聽這些東西，做出反應。第二個重點 DOM 可以操縱任何物件，它用 JS 改 HTML 的任何東西，我們可以用 callback function 改一些東西，這兩個東西組合而成，幾乎可以做我們想要做的任何事。

# 各式各樣的 DOM 操作

> __document.querySelector(‘.btn’)__
> __document.querySelectorAll(‘.btn’)__
> __document.getElementsByClassName(‘btn’)__
> __document.createElement(‘p’)__
> __document.body.appendChild()__
> __newDiv.classList.add('foo')__
> __newDiv.classList.toggle('foo')__

## document.getElementsByClassName(‘btn’)

> 就像操縱陣列差不多，

```javascript
// 在 DevTools 查看 console ，HTMLCollection 有三個東西。
HTMLCollection(3) [div.test, div.test, div.test]
0: div.test
1: div.test
2: div.test
length: 3

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var tests = document.getElementsByClassName('test')
        console.log(tests)
        tests[0].innerHTML = '<ul><li>1</li><li>2</li></ul>'
        tests[1].style.background = 'red'
        tests[2].style.margin = '20px'
        tests.style.margin = '20px'  // 這樣會沒有效果！
    })
</script>
<body>
    <div class="test">
        <p>123</p>
        hello
    </div>
    <div class="test">
            <div style="color:yellow">hello</div>
    </div>
    <div class="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

### 但如果要選取到 .test 底下的 \<p> 呢?

> __document.querySelector(‘.btn’)__
> __document.querySelectorAll(‘.btn’)__
> 之前的範例是用在 CSS ，不過是一樣的。

### __document.querySelector(‘.btn’)__ 的範例。

```javascript
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var testClass = document.getElementsByClassName('test')
        console.log(testClass)
        testClass[0].innerHTML = '<ul><li>我是測試用無序清單</li><li>用 innterHTML 產生</li></ul>'
        testClass[1].style.background = 'red'
        testClass[2].style.margin = '20px'
        testClass.style.margin = '20px'
    })
    document.addEventListener('DOMContentLoaded',function(){
        var testQuery = document.querySelector('.test > p')
        console.log(testQuery)
        testQuery.style.color = 'green'
        testQuery.style.background = 'black'
    })
</script>
<body>
    <div class="test">
        <div>hello</div>
    </div>
    <div class="test">
        <div style="color:yellow">hello</div>
        <p>querySelector 可以選到我</p>
        <p>querySelector 沒辦法選到我</p>
    </div>
    <div class="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

#### __document.querySelectorAll(‘.btn’)__ 的範例。

- 在 DevTools 查看 console ，就會多了跟 HTMLCollection 一樣的東西。NodeList(3) [p, p, p]。
- 跟陣列很像的東西。
- 用一樣的方法選取：`variable[index]`

> 寫作業用這個就可以了。

```javascript
// 修改過的範例
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var testClass = document.getElementsByClassName('test')
        console.log(testClass)
        testClass[0].innerHTML = '<ul><li>把 Hello 覆蓋掉的無序清單</li><li>用 innterHTML 產生的</li></ul>'
        testClass[1].style.background = 'gray'
        testClass[2].style.margin = '20px'
        testClass.style.margin = '20px'
    })
    document.addEventListener('DOMContentLoaded',function(){
        var testQueryAll = document.querySelectorAll('.test > p')
        console.log(testQueryAll)
        testQueryAll[1].style.color = 'blue'
        testQueryAll[0].style.background = 'blue'
        testQueryAll[1].style.background = 'green'
        testQueryAll[2].style.background = 'red'
    })
</script>
<body>
    <div class="test">
        <div>被覆蓋的 Hello</div>
    </div>
    <div class="test">
        <div style="color:yellow">hello</div>
        <p>123 querySelector 可以選到我</p>
        <p>456 querySelector 沒辦法選到我</p>
        <p>789 但 querySelectorAll 都可以選到</p>
    </div>
    <div class="test">
        <div style="color:yellow">hello</div>
    </div>
</body>
```

### __document.body.appendChild()__、__document.createElement(‘p’)__

- 下列的範例中如果是`querySelector.appendChild('span')`
- 會顯示錯誤`Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.`


1. 搭配使用：在`appendChild`方法的參數放`document.createElement()`方法


```javascript
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var querySelector = document.querySelector('.test > p')
        querySelector.appendChild(document.createElement('span'))
    })
</script>
<body>
    <div class="test">
        <p>123</p>
        <p>456</p>
    </div>
</body>
```

2. 直接宣告一個變數是 `document.createElement('span')`方法。

```javascript
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var querySelector = document.querySelector('.test > p')// 創建 span 的位置
        var s = document.createElement('span') // 宣告 s 是 createElement 方法
        s.innerText = 'helloSpan' // 在創建的 span 裡面放入文字
        querySelector.appendChild(s) // 最後「附加（appendChild()）」span 在 <p>123</p> 之後
    })
</script>
```

### __newDiv.classList.add('foo')__

- 用幫`classList.add` 幫 span 添加 `class="yellow"`

```javascript
<style>
    .addClass{
        background:yellow;
    }
</style>
<script type="text/javascript">
        document.addEventListener('DOMContentLoaded',function(){
            var querySelector = document.querySelector('.test > p')
            var s = document.createElement('span')
            s.innerText = 'helloSpan'
            s.classList.add('addClass') // 幫span 添加 class="yellow"
            querySelector.appendChild(s)
        })
    </script>
```

### __newDiv.classList.toggle('foo')__

- 如果有就變沒有，有沒就變成有
- 範例：新增移除 `.addClass`

```javascript
<style>
.addClass{
    background: yellow;
}
</style>
<script type="text/javascript">
    document.addEventListener('DOMContentLoaded',function(){
        var querySelector = document.querySelector('.test > p')
        var createSpan = document.createElement('span')
        createSpan.innerText = 'helloSpan'
        createSpan.classList.add('yellow') // 幫span 添加 class="yellow"
        querySelector.appendChild(createSpan)

        // 選到id='btn',加一個EventListener,選到.test底下的span
        document.querySelector('#btn').addEventListener('click', () => {
            document.querySelector('.test span').classList.toggle('addClass')
        })
    })
</script>
</head>
<body>
    <div class="test">
        <p>123</p>
    </div>
    <input type='button' id='btn' value="click me!"/>
</body>
```

---

# 使用範例

## 簡單計數器

- 範例中我們知道了
1. 要怎麼樣找這個元素
2. 幫它加了 addEventListener 去監聽它的 click 事件

```javascript
<script type="text/javascript">
document.addEventListener('DOMContentLoaded',function(){
    // 第一件事情，要減 1，所以要選到那個元素
    document.querySelector('#minus').addEventListener('click', () => {
        // 首先要知道裡面那個值是多少，「宣告變數 count 是文件選到的 .count 裡面的文字 (innerText)」
        var count = document.querySelector('.count').innerText;
        count = parseInt(count, 10) - 1 // 要把它轉成數字，number string 相加會發生奇怪的事情
        document.querySelector('.count').innerText = count // 然後把結果寫回去 count 裡面
    })
    document.querySelector('#plus').addEventListener('click', () => {
        var count = document.querySelector('.count').innerText;
        count = parseInt(count, 10) + 1
        document.querySelector('.count').innerText = count 
    })
})
</script>
<body>
    <div class="count">
        <h1>0</h1>
    </div>
    <input type='button' id='minus' value='-1 !' />
    <input type='button' id='plus' value="+1 !"/>
</body>
```

### 另外一種做法

- 本來把 count 的狀態(state)存在 HTML 的物件裡面，拿出來使用。
- 另外一種做法
  - 1. 宣告一個變數 count ，確定宣告的值與 HTML 預設的數字是一樣的
  - 2. 執行動作 count--
  - 3. 然後讓 innerText = count 

這樣就是我們改用變數，來儲存我們的現在的總合是多少，所以只要我改變這個變數 innerText 的內容就能改變

```javascript
<script type="text/javascript">
    var count = 0;
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('#minus').addEventListener('click', () => {
            count--
            document.querySelector('.count').innerText = count
        })
        document.querySelector('#plus').addEventListener('click', () => {
            count++
            document.querySelector('.count').innerText = count
        })

    })
</script>
```

### 又或者，把內容獨立出來變成一個 function

> 增加可讀性

```javascript
<script type="text/javascript">
    var count = 0;
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('#minus').addEventListener('click', () => { 
            count--
            // document.querySelector('.count').innerText = count
            changeCountText(count)
        })
        document.querySelector('#plus').addEventListener('click', () => { 
            count++
            // document.querySelector('.count').innerText = number
            changeCountText(count)
        })
    })
    function changeCountText(number) {
        document.querySelector('.count').innerText = number
    }
</script>
```

### 如果要縮減 code 的話

> 去掉`count--`變成`changeCountText(--count)`

```javascript
document.querySelector('#minus').addEventListener('click', () => { 
        changeCountText(--count)
    })
```

> 我們想要先做運算，然後再改數字，所以`++、--`要放在前面。

```javascript
changeCountText(--count)
效果是這樣 =>
count = count - 1
changeCountText(count)
----------------------
// 這樣就不會動作了
changeCountText(count--)
效果是這樣 =>
changeCountText(count)
count = count - 1
```

## 簡單的 to do list

- to do list 方法一

```javascript
var count = 1;
document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#add').addEventListener('click', () => {
        var text = document.querySelector('.text')
        // alert(text.value) 測試input的值
        document.querySelector('.list').innerHTML += '<li>' + text.value + '</li>' // 選到這個 class='list 
        text.value = '' // 優化：輸入待辦事項後清空 input 欄位
    })
})
<ul class='list'>
    <li>買早餐</li>
    <li>買咖啡</li>
</ul>
<input type='text' class='text'placeholder='請輸入to-do' /> // placeholder 輸入框提供的資訊
<input type='button' id='add' value='add' />
```

- to do list 方法二

```javascript
var count = 1;
document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#add').addEventListener('click', () => {
        var text = document.querySelector('.text')
        var item = document.createElement('li')
        item.innerText = text.value
        document.querySelector('.list').appendChild(item)
        text.value = '' // 優化：按完之後變空字串
    })
})
```

- __e = event__ 可以看到所有點擊相關的資訊
- __e.target__ 可以看到點擊到的東西是什麼

```javascript
document.querySelector('.list').addEventListener('click', e => {
    console.log(e.target)    // e = event 所有點擊相關的資訊 ,  e.target 可以看到點擊到的東西是什麼
```

### 刪除代辦事項的方法：

```javascript
var count = 1;
document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#add').addEventListener('click', () => {
        var text = document.querySelector('.text')
        var item = document.createElement('li')
        item.innerHTML = `
            <div>
                ${text.value}
                <span class="close" data-text='${text.value}'>X</span>
            </div>
            `
        document.querySelector('.list').appendChild(item)
        text.value = '' // 優化：按完之後變空字串
    })
    // 監聽整個 .list
    document.querySelector('.list').addEventListener('click', e => {
        for(var i = 0; i < e.target.classList.length; i++) {
            if(e.target.classList[i] === 'close') {
                    // 方法一
                e.target.parentNode.parentNode.outerHTML = '' // span 父結點<div> 的父節點<li> 為 '' 空字串
                    // 方法二
                 document.querySelector('.list').removeChild(e.target.parentNode.parentNode)
                    // 方法三
                e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
            }
        }
    })
})
```

### 超簡單表單示範

#### 用 onsubmit 的分法寫

```javascript
function test(){
    var value = document.querySelector('.name').value
    if (value === 'name'){
        return false
    }
    // alert('Submit!!')   彈出 提交的訊息
    return true;
}

    // onsubmit：可以指定 submit 的時候，執行什麼function
<form onsubmit='return test()'>  
    name: <input type='text' class='name' />
    <input type='submit' />
</form>
```

### DOM 方法

```javascript

document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('form').addEventListener('submit', e => {
        var value = document.querySelector('.name').value
        if (value === 'name'){
            e.preventDefault()  // form 預設的行為不會被執行
        }
        return true;
    })
})
```

- 用 `e.preventDefault()` 阻止預設的行為

```javascript
document.querySelector('a').addEventListener('click', e => {
    e.preventDefault()
})
```