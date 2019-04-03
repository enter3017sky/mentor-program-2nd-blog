# Javascript Project Of Javascript Beginners
> [local-storage-version-one-start](https://gist.github.com/robgmerrill/3e67a7e0e09acb5b77648f32bff0568f)

## 實作一個 To do list

### `textContent`: 更改指定節點的文本內容，以及他的後代(變成你更改後的文本內容，所以 child 會被消除掉)

```js
var title = document.querySelector('#title')
    title.textContent = 'Todo Tracker'
/* 用 textContent 更改指定節點的文本內容，以及他的後代(變成你更改後的文本內容，所以 child 會被消除掉) */

// 預設的 title
var defaultTitle = 'My Todo Tracker'
```

### Element 元素的操作

 - `appendChild()`: 在子節點的後面添加一個節點
 - `removeChild()`: 移除一個子節點
 - `createElement()`: 透過標籤名稱建立一個 HTML 的元素
 - `firstChild()`: read-only property，返回一個第一個子節點

```js

'1. 建立一個 li 元素'
var todoItem = document.createElement('li');

'2. 用 textContent 添加文字到元素上'
todoItem.textContent = 'Go to sleep.';

'3. 將準備好的 li 元素，添加到 ul 之中'
var todoList = document.querySelector('ul');
todoList.appendChild(todoItem)
```

### 將以上的步驟做成一個 function todoMaker

    - 補充資料：
    - [JavaScript Function Definitions](https://www.w3schools.com/js/js_function_definition.asp)

    - [[筆記] 進一步談JavaScript中函式的建立─function statements and function expressions](https://pjchender.blogspot.com/2016/03/javascriptfunction-statements-and.html)

```js

'函式陳述式 function statements(declarations)'
function todoMaker(text) {
    var todoItem = document.createElement('li');
    todoItem.textContent = text;
    todoList = document.querySelector('ul');
    todoList.appendChild(todoItem)
}

'或者是函式表達式 function expressions'
var todoMaker = function() {
    var todoItem = document.createElement('li');
    todoItem.textContent = text;
    todoList = document.querySelector('ul');
    todoList.appendChild(todoItem)
}
```

### 清除全部 todo 的按鈕：利用 while 迴圈清除 todo list。

```js

'4. 移除第一個元素，但是空白的文字節點也是一個節點'
// 移除到空白的文字節點
todoList.removeChild(todoList.firstChild)
// 第二個才移除到第一個 li
todoList.removeChild(todoList.firstChild)

// 利用 while 迴圈
while(todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
}
```

```js
'選取 .clear 這個 button，然後用剛剛的迴圈來達到 clear all 的效果'

var button = document.querySelector('.clear');

/* clear all button: 添加一個點擊的事件給 clearAll button */
button.addEventListener('click', function() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
})

/* 或者是把 function 抽起來使用 */
button.addEventListener('click', clearAll)

function clearAll() {
    while(todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
}
```


### 表單 form 的相關處理

```js
'form 的相關處理'

'選取表單及輸入框，添加 submit 事件，阻止表單預設 submit 時會刷新頁面這個行為'
'用標籤名選取這個元素'
var formFiled = document.querySelector('form')
var input = document.querySelector('#user-todo')

"e 代表當用戶點擊提交並提交表單時發生的'事件(event)'"
'e.preventDefault(): 防止發生預設的行為'

formFiled.addEventListener('submit', function(e) {
    e.preventDefault()
    
    // 如果沒有輸入內容就 submit 的話，顯示提醒文字，並 return (程式將不會繼續執行下去)
    if(input.value === '') {
        title.textContent = '忘記輸入拉~~~';
        return
    } 

    // 提交成功的話，恢復預測的 title，然後將輸入的 todo 新增到 list 中，最後將 input 中的文字清空
    title.textContent = defaultTitle
    todoMaker(input.value)
    input.value = ''
})
```


### localStorage

> web storage that stores data with no expiration date

```js
/* 範例及使用的教學
    Methods -> setItem(), getItem(), removeItems(), clear()
    setItem(): add a key and value to local storage

    在 console 輸入以下
    localStorage -> 返回儲存在電腦的資訊
    localStorage.setItem('todos', 'Make Breakfast') -> 儲存一筆
    localStorage.setItem('doNotdo', 'sleep') -> 儲存第二筆

    透過 key 取得 value
    localStorage.getItem('todos')

    透過 key 移除一個 key/value pairs
    localStorage.removeItem('doNotdo')

    移除全部的 localStorage 的所有內容
    localStorage.clear()
*/

```