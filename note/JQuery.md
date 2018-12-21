# JQuery

## JQuery 物件

- 你可以進行鏈串(changing)，changing 式程式設計的技巧，可以在一次陳述句中呼叫數個方法。

- 相對於撰寫：

```js
var obj = new obj();
obj.method();
obj.anotherMethod();
obj.yetAnotherMethod();
```

- 你可以撰寫：

```js
var obj = new obj();
obj.method().anotherMethod().yetAnotherMethod();
```


- 用 JQuery 選擇頁面中的 `<p>`。 程式庫會徂從文件根結點開始，在 DOM 中搜尋符合的元素，因此若元素數量龐大的話，速度會變慢。
- 可以加上 context 參數來加速搜尋。

```js
var paragraphs = jQuery('p');

// 找出在 <div> 之中的 <p>，<p> 的 parent 節點不一定要是 <div>，也可以是一般的父裔節點(ancestor)
// 可以這樣寫
var paragraphsInDiv = jQuery('div p');
// 或
var paragraphsInDiv = jQuery('p', 'div');
// 也可以寫成
var paragraphsInDiv = $('p', 'div');
// 當使用第二個引數的時候，jQuery 會根據被稱為 context 的選擇器先進行搜尋，接著再取得符合第一個 selector 參數的子裔節點(descendant)
```

## 文件備妥處理器

- 基本的語法： `window.onload = function() { ...do something }`
- jQuery 正式語法：`$(document).ready(function() { ...do something })`
- jQuery 省略語法：`$(function() { ...do something })`

## 2 選擇器

>[範例程式碼](https://github.com/AurelioDeRosa/jquery-in-action)
>
>路徑：jquery-in-action/chapter-2/lab.selectors.html

### 2.2 基本選擇器

> 通用選擇器、ID 選擇器、類別選擇器、元素選擇器
- `$('*')` : 符合頁面中所有元素。
- `$('#special-id')` : 符合 id 為 __special-id__ 的元素。
- `$('.special-class')` : 符合 class 為 __special-class__ 的元素。
- `$('a')` : 符合所有的連結 (a) 元素。
- `$('a.special-class')` : 符合具有類別 special-class 的所有 a 元素。
  - ex.`<a href="#" class="special-class"></a>`
- `$('.class.special-class')` : 符合具有類別 class 與類別 special-class 的所有元素。
  - ex.`<div class="class special-class">div<div>`

### 2.3 根據階層取得元素

- `E F`: 符合標籤 F 且是 E 子裔的所有元素。
- `E>F`: 符合標籤 F 且是 E 直接子元素的所有元素。
- `E+F`: 符合所有元素為 F ，而且立即的前鄰接節點就是 E 。
- `E~F`: 符合所有元素為 F ，且前鄰接節點中有 E。

### 2.4 根據屬性選取元素。

- 在 CSS 中可以使用以下的選擇器，選取 href:// 開頭的連結：`a[href^='http://']`
- 使用 jQuery 可以如下套用選擇器： `var $externalLink = $("a[href^='http://']")`
- `a[href!^='http://']`：不建議這樣寫。

- `E[A]` : 符合標籤名 E，屬性為 Ａ 但值不限的元素。
- `E[A = 'V']` : 符合標籤 E，屬性為 A 且值為 V 的元素。
- `E[A ^= 'V']` : 符合標籤 E，屬性為 A 且值開頭為 V 的元素。
- `E[A $= 'V']` : 符合標籤 E，屬性為 A 且值結尾為 V 的元素。
- `E[A != 'V']` : 符合標籤 E，屬性為 A 且值不為 V ，或完全沒有屬性 A 的元素。(不符合 CSS 規範)
- `E[A *= 'V']` : 符合標籤 E，屬性為 A 而值包括 V 的元素。
- `E[A |= 'V']` : 符合標籤 E，屬性為 A 且值等於 V 或 V- （V之後有連字號）的元素。
- `E[C1][C2]` : 符合標籤 E，屬性滿足條件 C1 與 C2 的元素。

---

### 2.5 過濾器

#### 2.5.1 位置過濾器

- `:first` : 符合頁面中第一個元素。ex.`li a:first` 傳回清單下第一個錨點。
- `:last` : 符合頁面中最後一個元素。ex.`li a:last` 傳回清單下最後一個錨點。
- `:even` : 符合頁面中偶數元素。ex.`li a:even` 傳回清單中偶數索引的錨點。
- `:odd` : 符合頁面中奇數元素。ex.`li a:odd` 傳回清單中奇數索引的錨點。
- `:eq(n)` : 符合第 n 個元素。
- `:gt(n)` : 符合第 n 個元素之後（不包括 n）的元素。
- `:lt(n)` : 符合第 n 個元素之前（不包括 n）的元素。

#### 2.5.2 子過濾器

- `:first-child` : 符合環境中第一個子元素。
- `:last-child` : 符合環境中最後一個子元素。
- `:first-of-type` : 符合指定類型的第一個子元素。
- `:last-of-type` : 符合指定類型的最後一個子元素。

- 根據指定的參數，符合環境中第 n 個子元素，偶數或奇數子元素，或者是公式計算所得 Xn+Y 子元素。
  - `:nth-child(n)`
  - `:nth-child(even | odd)`
  - `:nth-child(Xn+Y)`

- 符合父元素中，同一層具相同名稱的第 n 個子元素，偶數或奇數子元素，或者是公式計算所得 Xn+Y 子元素。
  - `:nth-of-type(n)`
  - `:nth-of-type(even | odd)`
  - `:nth-og-type(Xn+Y)`

- 從尾至首元素開始計數，符合父元素中，同一層具相同名稱的第 n 個子元素，偶數或奇數子元素，或者是公式計算所得 Xn+Y 子元素。
- `:nth-last-of-type(n)`
- `::nth-last-of-type(even | odd)`
- `::nth-last-of-type(Xn+Y)`

- `:only-child` : 符合沒有同層元素的元素。
- `:only-of-type` : 符合沒有相同型態同層元素的元素。

#### 2.5.3 表單過濾器

- `:button`: 只選取按鈕元素。
  - `input[type=submit]、input[type=reset]、input[type=button] 或 button`
- `:checkbox`: 只選取核取方塊或單選鈕，或是 select 元素選取中的 option。
- `:checked`: 選取已核選的核取方塊或單選鈕。或者是 select 元素選取中的 option。
- `:disabled`: 只選取被停用的元素。
- `:enabled`: 只選取被啟用的元素。
- `:file`: 只選取 file 的 input 的元素（input[type=file]）。
- `:focus`: 選取選擇器運行時取得焦點的元素。
- `:image`: 只選取 image 的 input 元素（input[type=image]）
- `:input`: 只選取表單元素（input, select, textarea, button）
- `:password`: 只選取密碼元素(input[type=password])
- `:radio`: 只選取單選鈕元素。(input[type=radio])
- `:reset`: 只選取重置按鈕。(input[type=reset] 或 button[type=reset])
- `:selected`: 只選取被選中 option 元素。
- `:submit`: 選取發送鈕（button[type=submit] 或 input[type=submit]）
- `:text`: 只選取文字元素（input[type=text]）或未指定 type 的 input（因為 text=text 是預設值）

- 範例：
  - 選取符合核選狀態中的核取方塊:
  - `$('input[type="checkbox"][checked]');`
  - `$('input[type="checkbox"]:checked');`
  - `$('input:checkbox:checked');`

#### 2.5.4 內容過濾器

- `:contains(text)`: 只選取包括指定文字之元素。（也會評估子元素及子裔的文字）
- `:empty`: 只選取沒有子元素（含文字節點）的元素。
- `:has(selector)`: 只選取元素中至少包括一個元素可符合指定的選擇器
- `:parent`: 只選取至少有一子節點（可以是元素或文字）的元素。

#### 2.5.5 其他選擇器

- `:animated`: 只選取目前在動畫控制下的元素。
- `:header`: 只選取標題元素。 `<h1>` 到 `<h6>` 元素
- `:hidden`: 只選取隱藏元素。
- `:lang(language)`: 選取指定語言的元素。
- `:not(selector)`: 反轉指定的選擇器。
- `:root`: 選取元件根節點元素。
- `:target`: 選取文件 URI 的段落辨識碼（fragment identifier）指定的目標元素。
- `:visible`: 選取可見的元素。

#### 2.5.6 自訂過濾器的方式

#### 2.6 使用環境物件來改善效能

- __`$('引數1', '引數2: context')`__
  - ex.`$('p', 'div')` 選擇 div 底下的 p。
- __`$('參數')`__：如果只傳一個參數，第二個參數預設值會是 _document_。
  - ex.`$('p')` 選擇所有的 p。
  - 當然也可以這樣選：`$('div p')` 選擇 div 底下的 p。

```html
<div>
    <p>Hello World</p>
</div>
<p>only p</p>
```

---

## 3 操作 jQuery 群集

- 在 DOM 中建立與注入新的 HTML 元素
- 處理 jQuery 群集
- 迭代 jQuery 群集

### 3.1 建立新的 HTML

- 建立動態元素 `$('<div>Hello World</div>');`
- 如果要建立空的 div 元素，可以簡寫 `$('<div>');`
  - 等同於 `$('<div></div>')` 與  `$('<div />')`
  - 不過還是建議用形式完善的標記(well-formed)

- __`$()`__ 的 context 參數可使用 JavaScript 物件的形式，來指定所建立的元素的屬性與值。

- 這類物件的特性會作為元素上的屬性名稱，而特性值會作為屬性值

```js
// 建立 img 元素時完成多個屬性的設定，用點選的方式驅動。
// 書中的範例，動態建立完整特性的 img 元素
$('<img>',     // step1 建立基本的 img 元素。
    {       // line 170-172: step2 指定各個屬性
        src: 'image/little.bear.png',
        alt: 'Little Bear',
        title: 'I woof in your general direction',
        click: function() {    // 3.建立 click 處理器
            alert($(this).attr('title));
        }
    })
    .appendTO('body');  // 將之附加到 body 元素，使元素加入到 DOM 之中


// 自己實際練習
var $divBox = $('<div>',     // step1 建立基本的 img 元素。
    {       // step2 指定各個屬性
        class: 'test',
        title: 'I woof in your general direction',
        style: 'background: gray; height:200px',
        click: function() {    // 3.建立 click 處理器
            alert($(this).attr('title'));
            console.log('goodJob')
        }
    })
    .text('123') // 沒有內容文字 div 出不來
    .appendTo('body');  // 將之附加到 body 元素，使元素加入到 DOM 之中

// console.log($divBox)
// 存到變數 log出來，就可以查看有沒有成功建立
```

#### 3.2.1 判定集合大小

練習教材：[路徑 chapter-3/lab.operations.html](https://github.com/AurelioDeRosa/jquery-in-action/tree/master/chapter-3)

- 打開瀏覽器控制台
- 輸入 `$('p').length` 即可查看長度。

#### 3.2.2 取得集合中的元素。

- `.get()`: 使用索引取得元素。
  - 參數: index
  - 回傳值： 一個 DOM 元素或所有 DOM 元素的陣列。或當索引超出範圍或等於會回傳 undefined

- `index()` 做相反的操作，能找出集合中的特定元素的索引。
  - `index([element])`
  - element: 含有選擇器的字串、指向某元素的參考。
  - 回傳值: 傳入元素在集合或鄰接節點的順序值，如果回傳 -1 表示沒找到元素。

```js
// 取得具 alt 屬性的第一個元素。
var imgElement = $('img[alt]')[0]

// 也可以用 jQuery 的語法  get([]index)
var imgElement = $('img[alt]').get(0)

// -1 取最後一個
var imgElement = $('img[alt]').get(-1)

// -2 取倒數第二個
var imgElement = $('img[alt]').get(-2)
```

- `.eq()`: 根據索引取得集合中的元素，傳回只包含該元素的集合。
  - 參數: index
  - 回傳值: 包括一個或零個元素的 jQuery 的群集。
- `.first()`:
- `.last()`:
- `.toArray()`: 以陣列回傳集合中的 DOM 元素。
  - 回傳值: JavaScript 陣列，其中包括了集合中的 DOM 元素。

```js
var allLabelButtons = $('label + button').toArray();
// 這行程式會將所有緊接 <label> 元素後的 <button> 元素，收集到 jQuery 的物件之中，然後建立 JavaScript 陣列，並指定給 allLabelButtons 變數。
```

#### 3.2.3 運用關係取得集合

- `children([selector])`: 傳回的集合由原籍和中元素的各自子元素所組成，可選擇性使用選擇器過濾。
- `closest(selector [, context])`: 符合選擇器集合中個元素最近的一個父裔元素（從元素本身開始），會包括在傳回的集合之中。
- `contents()`: 回傳的集合由原集合元素之內容組成（可能包括文字節點）
- `find(selector)`: 傳回的集合由原集合元素之子裔元素組成，使用指定的選擇器、jQuery 物件或元素進行過濾。
- `next([selector])`: 
- `nextAll([selector])`: 
- `nextUntil([selector[, filter]])`: 
- `offsetParent()`: 
- `parent([selector])`: 
- `parents([selector])`: 
- `parentsUntil([selector[, filter]])`: 
- `prev([selector])`: 
- `prevAll([selector])`: 
- `prevUntil([selector])`: 
- `siblings([selector])`: 

---

## 處理特性、屬性與資料

- 本章涵蓋：
  - 取得與設定元素屬性
  - 處理元素特性
  - 在元素上儲存自訂資料

- 特性(properties)：是 JavaScript 物件本身的東西，每個特性都有名稱與值。JavaScript 的動態性，可以讓你已指令稿的方式在 JavaScript 物件上建立特性。

- 屬性(attributes)：是指 DOM 元素標記上的特定值


page 82


![image](https://ppt.cc/fKuakx@.png)
/*
4.2.2 設定屬性值：attr
attr(name, value)：已指定的名稱及傳入的值，設定 jQuery 物件中所有元素對應的屬性
    name: (字串)要設定的屬性名稱。
    value: (字串|數字|布林|函式)指定屬性值。若是函式，集合的各元素都會呼叫該函式，且傳入的元素索引以及被指定屬性的目前值。函式回傳值會成為屬性的值。

下面範例。走訪頁面中具有 title 屬性的所有元素，在既有的 title 附加字串，字串由元素在 DOM 中的索引以及個元素的 id 屬性組成(若有的話)，否者使用 'unset'。
*/
$('[title]').attr('title', function(index, previousValue) {
    return previousValue + ' I am element ' + index + ' and my name is ' + (this.id || 'unset');
})

// $('[title]').attr('title', function(index, previousValue) {
//     return previousValue + ' I am element ' + index + ' and my name is ' + (this.className || 'unset');
// })



## 用 jQuery 為網頁注入活力

### 設定元素內容

#### 5.2.1 取代 HTML 或文字內容

- __`html()`__: 取得符合集合中第一個元素的 HTML 的內容。
  - 參數: 無
  - 回傳值: 首個符合元素的 HTML 的內容。

- __`html(content)`__: 以傳入的 HTML 片段設定所有符合元素的內容。
  - 參數: content - (字串|函式) 要被設定的元素內容的 HTML 片段。如果傳入函式，集合中個元素會呼叫函式，元素會作為函式的環境物件(this)，並傳入兩個參數：元素索引與目前內容。函式回傳值將作為新的內容。
  - 回傳值: jQuery 群集。

  117 page



Child => appendTo => Parent
Parent => append => Child

```html
<!-- Here goes the Before -->
<div>
    <!-- Here goes the Prepend -->
    This is div
    <!-- Here goes the Append -->
</div>
<!-- Here goes the After -->
```