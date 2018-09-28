## HTML
__Hypertext Markup Language__，中文翻譯是「超文字標示語言」，是構成網頁最重要也是必要的部份。構成網頁有三大部分：HTML、CSS、JavaScript，HTML 就如同人的骨骼、CSS 就像穿在身上的衣服而 JavaScript 就是賦予它動作的肌肉。

---

HTML 使用元素來描述頁面的結構，每一個元素都有開始標記和結束標記，而標記的功用就像容器，描述了介於開始標記和結束標記之間的資訊。
![image](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

---

### HTML的架構：一個完整的 HTML 頁面，它所包含的要素：
- `<!DOCTYPE html>` : 文件類型（doctype），指定用 html 標準模式渲染(render)這個網頁。
- `<html></html>` : 包含了所有顯示在這個頁面上的內容。
- `<head></head>` : 裡面放的是你想涵括的重要資訊，但不會顯示於網頁瀏覽者眼前的。
- `<meta charset="utf-8">` : 編碼設定。這個元素指定了你的文件使用 utf-8 這種字元編碼，能避免出現亂碼的可能。
- `<title></title>` : 呈現在瀏覽器上的網頁標題。
- `<body></body>` : 包含了所有會顯示於網頁瀏覽者眼前的內容。 
```html
<!--基本的網頁結構-->

<!DOCTYPE html>             <!--指定用標準模式渲染這個網頁-->
<html lang="zh-TW">         
  <head>                    
    <meta charset="UTF-8" />
    <title>網頁的標題</title>
  </head>
  <body>                    
    <div>                   <!--division 標準的區塊元素。-->
        <h1>H1的標題</h1>    <!--<h1>和</h1>之間為主標題-->
        <p>文字的段落</p>          <!--文字段落出現<p>和</p>之間-->
        <a href="http://www.google.com">google.com</a>    <!--超連結-->
        <img src="images/firefox-icon.png" alt="My test image">  <!--圖片-->
    </div>
    <span>span</span>       <!--span 標準的行內元素。佔了內容大小的區塊。-->
  </body>
</html>
```
參考資料：[HTML 基礎 - 學習該如何開發 Web | MDN](https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics)

---

## Open Graph Protocol
>是 Facebook 在 2010 年提出，規格化定義的 HTML Meta 屬性提供網頁的標題、縮圖、描述等等資訊，Facebook 本身也藉由讀取 Open Graph Protocol 中的資訊將網址以內容摘要的型態顯示出來。
1. \<meta name="og:title" content="網頁標題">
2. \<meta neme="og:description" content="網頁描述">
3. og:type, og:image...

如果需要確認網頁 Open Graph 的內容，你可以使用 [Facebook Debugger](https://developers.facebook.com/tools/debug/)；將網址貼入 Debugger 後它便會把抓到的 Open Graph Metadata 與縮圖顯示出來，這裡就完全跟動態牆上會看到的一樣了喔！

---
§ Cascading Style Sheets (Css) 格式定義介紹

Css疊層樣式，是Html 4.0以後有的功能。乃將 Style Sheet 的定義效果於瀏覽器中作“疊層" 顯示。(“Cascading" 乃重疊之意)
Style Sheet 定義一個屬性群組，告知瀏覽器如何顯示HTML的原件，主要乃用來設定文件段落間隙、字形選用、文字顏色、與文件外觀上的訊息。

如何將CSS應用於HTML
將CSS應用於您通常會遇到的HTML文檔有三種不同的方法，其中一些方法比其他方法更有用。在這裡，我們將簡要回顧每一個。
## CSS三種使用的方式
#### 1.行內 CSS(Inline styles)：
- 使用 `style="..."` 附加在任一個需要的 __tag__ 中, 
```html
<body>
  <h1 style="background-color:yellow; border:1px solid black;">Hello World!</h1>
  <p style="color:red;">This is my first CSS example</p>
</body>
```
![image](https://ppt.cc/f1deOx@.png)
#### 第二種外部 CSS(External stylesheet):
- `<link>`元素用在 HTML 文件中，告訴瀏覽器在哪可以找到用來將網頁樣式化的 CSS 檔。這是一個空白元素，不需要結束標籤。通常位在`<head>`元素裡，它應該使用三個屬性：
  - href：此屬性指定了 CSS 檔的路徑。
  - type：此屬性設定了要連結的檔案類型，其值應該設為 `text/css` 。
  - rel：此屬性表明了 HTML 頁面與它連結之檔案的關係。連結 CSS 時，其值應該設為`stylesheet`。
```html
<link href="main.css" type="text/css" rel="stylesheet" />
```
#### 第三種內部 CSS(Internal stylesheet)：
```html
<!DOCTYPE html> 
<html>
<head>
  <meta charset="UTF-8" />
  <title>Web Page Title</title>
  <style>
    div{
      background:gray;
      color: green;
    }
    p{
      background:orange;
      color:blue;
      font-size:18pt;
    }
    #first{
      background:pink;
      color: red;
    }
    #second{
      background-color:yellow;
    }
    .row {
      background:green;
      color:black;
    }
  </style>
</head>
<body>
  <div>
    <h1>h1的標題</h1>
      <p id="first" class="row">第一個段落，第一個段落，第一個段落</p>
    <h2>h2的標題</h2>
      <p id="second">第二個段落，第二個段落，第二個段落</p>
  </div>
</body>
</html>
```
![image](https://ppt.cc/fb8Q9x@.png)


## CSS 階層式樣式表
Selector + 規則：先選到你要改變的元素，再來套用規則。
優先順序：ID > Class > Tag

#### ID Selector `#`:整個網頁上的ID只能有一個。
```css
#div {
  color:red;
}
#first {
  color:yellow;
}

```
#### Class Selector `.`: 一次套用多個地方。
```css
.row {
  color:yellow;
}
```
#### Tag Selector:
```css
p {
  background:black;
}
```
### 多層 Selector 示範
```css
1<div>                          1. div: 底下所有的東西都會被選到
2  <p id='hello'>Hello</p>      2. div p: 底下所有的 p 都會被選到
3  <p class='p'>                3. div span: 底下所有的 span 都會被選到 => 4,9
4    <span>world</span>         4. div > span: 用箭頭的話，只有下一層的 span 會被選到 => 9
5  </p>                         5. .p: class 是 p 的會被選到 => 3~9
6  <p class='p'>                6. p.p: 元素是p,class是 p 才會被選到 => 3~8
7    yoyoyoyoyo                 7. span.p: 元素是span,class='p' 才會被選到 => 9
8  </p>                         8. p span: p底下的span => 4
9  <span class='p'>!!!</span>   9. .p span: class='p' 底下的 span => 4
 </div>                         10. #hello: 選到 id 是 hello 的元素 => 2
```
#### 相同屬性有定義上的衝突時，越接近HTML越有優先權。
#### 最高優先權到最低優先權的排名如下：
1. 直接定義在標籤
2. 定義在<head></head>
3. 以import匯入
4. 以Link連接
5. 外部檔案若多個，以匯入、連接的次序決定
6. 瀏覽器本身的樣式表
---

## CSS - Box Modal: 把每一個元素想成是盒子。

首先我們要知道，每個 HTML 元素都有一個預設的 display 值。
大部分元素的 display 值，預設值通常是 block 或 inline 其中一個。
- 若該元素的 __display 值__ 被標示為 __block__ 就被稱為「__區塊元素__」
- 若被標示為 __inline__ 就稱為「__行內元素__」。


`<div>`這個標籤目的是將內容分為不同的區域，而每一個區域可以根據 CSS 中的宣告而有自己的樣式。`<div>`是一個區塊元素或被稱為區塊級容器(block-level container)。這代表會盡可能的撐滿容器，在 `</div>` 標籤後會換行。

`<span>`Span 跟 Div 類似的地方是，這兩個標籤的目的都是將內容分為不同的區域。不同的是，Span 可以涵蓋更細層的元素。所以我們能用 <span> 來調整單一文字的樣式。



很多瀏覽器會幫你預設 margin ，Chrome 預設的 margin 是 8px，可以用`body { margin:0; }`把margin 調回 0，就會貼齊瀏覽器的整個視窗。


透過改變 CSS 的 display 屬性可以改變 html 元素預設的 display 值。
四種 CSS Dislay 的形式：
- block 佔滿整行(寬度)的區塊，無法與其他元素併排在同一行，可以設定寬度(width)與高度(height)。
- inline 佔據內容(文本)本身的大小，可以與其他元素並排。無法設定寬度(width)與高度(height)，也無法設定上下的 margin。可以設定左右 margin、全部的 padding。
> 假如有設定 padding，然後改變內容大小，整體會跟著內容大小改變而改變。問題：有沒有不會改變的方法？
- inline-block 
- none 不會顯示。

### margin: 外框的邊距
 - margin-top
 - margin-right
 - margin-bottom
 - margin-left

### margin: 10px 20px 30px 40px ;
        上  右  下  左

### margin: 20px 40px; 上下、左右

### padding: 內邊距

### border: 邊框





以下是 HTML 常見的區塊元素與行內元素。
- [區塊元素(Block-level elements) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
```html
<address>         <fieldset>         <li>                  <table>
<article>         <figcaption>       <main>                <tfoot>
<aside>           <figure>           <nav>                 <ul>
<blockquote>      <figcaption>       <noscript>            <video> 
<canvas>          <footer>           <ol>
<dd>              <form>             <output> 
<div>             <header>           <p>
<dl>              <hgroup>           <pre>
<dt>              <hr>               <section> 
<h1>, <h2>, <h3>, <h4>, <h5>,<h6>

```
- [行內元素(Inline elements) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
```html
<a>               <dfn>              <samp>         <tt>
<abbr>            <em>               <script>       <var>
<acronym>         <i>                <select>
<b>               <img>              <small>
<bdo>             <input>            <span>
<big>             <kbd>              <strong>
<br>              <label>            <sub>
<button>          <map>              <sup>
<cite>            <object>           <textarea>
<code>            <q>                <time>
```



display:
- block
- inline(行內元素)
    - 
    - 不能設定 width, height 
- inline-block
    - 
- none

### margin: 外框的邊距
 - margin-top
 - margin-right
 - margin-bottom
 - margin-left

### margin: 10px 20px 30px 40px ;
        上  右  下  左

### margin: 20px 40px; 上下、左右

### padding: 內邊距

### border: 邊框
```css
.box{
  background:red;
  margin:40px;
  padding:20px;
  border: 5px solid #0088dd;
  width:300px;
  height:300px;
  box-sizing: border-box;
}
```
![image](https://ppt.cc/fPDOdx@.png)

![image](https://ppt.cc/fU0TOx@.png)

---


行內元素沒辦法設定 mrgin, width height

```css
    #box {
      background:red;  //這個背景色不會顯示，除非套用在<p>裡面
      margin:50px;
    }
  <span id='box'>
    <p>
      comtent
    </p>
  </span>
```

其他參考資料：
- [關於 "display" 屬性](http://zh-tw.learnlayout.com/display.html)















<!DOCTYPE html>  <!--指定用標準模式渲染這個網頁-->
<html>
  <head>
    <meta charset="UTF-8" />
    <title>網頁的標題</title>
  </head>
  <h1>H1的標題</h1>
  <h2>H2的標題</h2>
  <p>段落</p>
  <a href="http://www.google.com" target="_blank">google.com</a> <!--超連結-->
  <div>division</div>          <!--div 是一個標準的區塊元素。一個區塊元素會讓其內容從新的一行開始顯示，並盡可能的撐滿容器。-->
  <span>span</span>            <!--span 是一個標準的行內元素。佔了內容大小的區塊-->
  <ul>            <!--無序清單-->
    <li>last item/<li>  
    <li>last item</li>
    <li>last item</li>
  </ul>
  <ol>            <!--有序清單-->
    <li>last item/<li>
    <li>last item</li>
    <li>last item</li>
  </ol>
  <body>
  </body>
</html>























## CSS - Box Modal: 把每一個元素想成是盒子。

首先我們要知道，每個 HTML 元素都有一個預設的 display 值。
大部分元素的 display 值，預設值通常是 block 或 inline 其中一個。

- 若該元素的 __display 值__ 被標示為 __block__ 就被稱為「__區塊元素__」
  - 佔滿整行(遊覽器寬度)的區塊，無法與其他元素併排在同一行。
- 若被標示為 __inline__ 就稱為「__行內元素__」。
  - 佔據內容(文本)本身的大小，可以與其他元素並排。

---

### \<div>(block) 與 \<span>(inline)的差別

- `<div>`這個標籤目的是將網頁內容分為不同的區塊，而每一個區塊可以根據 CSS 中的宣告而有自己的樣式。`<div>`是一個區塊元素或被稱為區塊級容器(block-level container)。這代表會盡可能的撐滿容器，在 `</div>` 標籤後會換行。

- `<span>`Span 跟 Div 類似的地方是，這兩個標籤的目的都是將內容分為不同的區域。不同的是，Span 可以涵蓋更細層的元素。所以我們能用 `<span>` 來調整單一文字的樣式。

---

## 更改行內/區塊的狀態：Display

> display 屬性可以讓你將一個行內元素轉變成區塊元素，或區塊變成行內元素，也可以隱藏元素。

- block: 變成區塊元素的模式。
  - 佔滿整行(寬度)的區塊，無法與其他元素併排在同一行，可以設定寬度(width)與高度(height)。
- inline: 變成行內元素的模式。
  - 佔據內容(文本)本身的大小，可以與其他元素並排。無法設定寬度(width)與高度(height)，也無法設定上下的 margin。可以設定左右 margin、全部的 padding（元素會被左右 padding 影響，上下不會，但如果有 border，會被撐開）。
- inline-block: 這可以像行內元素一樣與其他元素並排，但保有區塊元素的模式。
- none: 將元素隱藏起來，不會顯示。
> 假如有設定 padding，然後改變內容大小，整體會跟著內容大小改變而改變。 _問題：有沒有不會令它改變的方法？_


- 更多參考資料：
  - [關於 "display" 屬性](http://zh-tw.learnlayout.com/display.html)
  - [Understanding the CSS box model for inline elements](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)

---

## 盒模型（Box Model）

Box Model 是製作網頁的基礎，每個元素都像是一個個的盒子。
盒子由內而外，content, padding, border, margin, 像是洋蔥一樣以層層疊疊的關係建立起來。

- Content: 內容。

- Padding: 內邊界距離；內邊距；內距；留白。

- Border: 邊框。

- Margin: 外邊界距離；外邊距；邊界。

> 這篇有更多的 [CSS padding margin border 屬性詳解](http://www.cnblogs.com/linjiqin/p/3556497.html)，以及其他的應用。

![image](https://mdn.mozillademos.org/files/13647/box-model-standard-small.png)

### box-sizing: 這是你要的盒子大小嗎？

- `content-box` 這是根據 CSS 標準的起始值和預設值。 width 與 height 只包括內容本身的寬和高。
- 實際的寬度(width) __/__ 高度(height) ＝ content 的(你設定的)Width/Height＋內距(padding)＋邊框(border)
- 假設你設定 `width: 300px;`，但你也設定了 `padding: 25px;` 和 `border: 5px;`，實際的結果就會變成content 是 width300px __+__ padding 25px\*2 __+__ border 5px\*2 = __360px__，不是你預想而設定的width:300px。

```css
#box {
  background: red; 
  margin: 0 auto;/* 0:上下的距離 ; auto:如果有設定寬度(width)的話(區塊元素沒設寬度就是佔滿整行)，
  元素會置中，左右的距離會自動幫你分配 */
  padding: 30px;  /* 留白 */
  border: 5px solid orange; /* 邊框 */
  width: 300px;  /* 寬度 */
  height: 100px;  /* 高度 */
  display: block;  
  text-align: center; /*內容的文字會置中*/
  box-sizing: border-box;
}
```

![image](https://ppt.cc/ffNCWx@.png)
![image](https://ppt.cc/fI1EJx@.png)

## `box-sizing: border-box;`

- 當你設定一個元素樣式為 `box-sizing: border-box;`，這個元素的內距和邊框將不會增加元素本身的寬度。
- width 和 height 屬性包括內容(content)，內邊距(padding)和邊框(border)，但不包括外邊距(margin)

---

# margin

## `margin: 0;`

- 很多瀏覽器會幫你預設 margin ，Chrome 預設的 margin 是 8px，可以用`body { margin:0; }`把margin 調回 0，就會貼齊瀏覽器的整個視窗。

```css
    body{
      margin: 0;
    }
```

---

## `margin: auto;`

- 設定區塊元素的 width 屬性，可以避免該元素從左到右撐滿容器。
- 0: 上下的距離為 0 。
- auto: 然後你可以設定左右外邊距（margin-left 與 margin-right）為 auto 來使其水平居中。元素只顯示到你所指定的寬度，然後剩餘的寬度平均分配。

```css
#box {
  width: 600px;
  margin: 0 auto; 
}
```

> 當瀏覽器視窗寬度比元素的寬度還要窄時，瀏覽器就會出現水平捲軸。



## 限制寬度`max-width、min-width`

> 有些頁面設計會隨著使用者螢幕大小縮放。
> `min-width`屬性指定是當瀏覽器視窗很窄的時，盒子最小只能縮小到哪個尺寸。
> `max-width`屬性指定是當瀏覽器視窗很寬時，最大只能放大到哪個尺寸。

- 使用 max-width 替代 width 可以更完美的處理當瀏覽器視窗小於元素寬度的情況。

```css
#box {
  max-width: 600px;
  margin: 0 auto; 
}
```

---

## 設定 border 邊框

- `border: 寬度  樣式  顏色`；順序不能改變
- border-style
  - solid 單實線
  - dotted 方格點
  - dashed 虛線
  - double 兩條實線
  - groove 刻入頁面的感覺
  - ridge 凸出頁面的感覺
  - inset 嵌入頁面的感覺
  - outset 看起來像浮雕

---

## 設定 margin: 外框的邊距

- margin-top
- margin-right
- margin-bottom
- margin-left
- margin: 10px 20px 30px 40px ;分別是上、右、下、左
- margin: 20px 40px; 分別是上下、左右

---

## 將內容置中對齊

- `text-align:center;`

---

## position

正常流向：`position: static;`: 預設值，如果是這個值，那所有的定位都無效。
相對定位：`position: relative;`: 相對於原本的 __參考點__ 做定位。
絕對定位：`position: absolute;`:   ···
固定定位：`position: fixed;`: 固定定位，從瀏覽器窗口做定位，滾輪的滾動還是會固定到相同位置。
> position 其實是蠻常用的一個屬性，關鍵就是基準點的不同，有以下的值；( 以下所稱 位置屬性 為 top left right bottom )

- 更多參考資料

  - [Advanced Positioning Tutorial | HTML & CSS Is Hard](https://internetingishard.com/html-and-css/advanced-positioning/)

---

### Media Query：不同時候，套用不同的CSS

- `min-width:700px`螢幕 700px 以上會做套用這個規則。
- `max-width:700px`螢幕 0-700px 的範圍會做套用這個規則。
- 同一個層級，放在下面比較優先。

```css
@media screen and (min-width:700px){
body {
  background:orange;
  }
}
@media screen and (max-width:700px){
  body {
    background:rgb(74, 74, 74);
  }
  #box1 {
    display:none;
  }  
}
```

---

#### 以下是 HTML 常見的區塊元素與行內元素。

- [區塊元素(Block-level elements) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

```html
<address>         <fieldset>         <li>                  <table>
<article>         <figcaption>       <main>                <tfoot>
<aside>           <figure>           <nav>                 <ul>
<blockquote>      <figcaption>       <noscript>            <video> 
<canvas>          <footer>           <ol>
<dd>              <form>             <output> 
<div>             <header>           <p>
<dl>              <hgroup>           <pre>
<dt>              <hr>               <section> 
<h1>, <h2>, <h3>, <h4>, <h5>,<h6>

```

- [行內元素(Inline elements) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

```html
<a>               <dfn>              <samp>         <tt>
<abbr>            <em>               <script>       <var>
<acronym>         <i>                <select>
<b>               <img>              <small>
<bdo>             <input>            <span>
<big>             <kbd>              <strong>
<br>              <label>            <sub>
<button>          <map>              <sup>
<cite>            <object>           <textarea>
<code>            <q>                <time>
```

---











>[筆記][MTR01]Lesson 2-2 CSS

### 虛擬碼 Pseudo class(:hover, :first-child, :nth-child() )

### 對使用者的回應

- `:hover`: 當使用者將滑鼠等指標移到一個元素上面時，這個擬元素會被套用。這個事件無法在觸控螢幕上面運作，因為螢幕無法辨認使用者的手指是否移到元素上面。
- `active`: 當按鈕或連結這點按時，這個擬元素就會被套用。改變元素的樣式或稍微移動元素的位置，就可以讓按鈕或連結感覺像是被按下了。
- `focus`: 聚焦。
  - > 實際用法有待實驗。
- `:first-child`: 假如有三個 __box__，能選取第一個。
- `:nth-child()`
  - 用處：假如有 3 個 __box__，設定`margin-left:20px`，但第一個 __box__ 的左側又不想有 __margin__，此時就可以用 `nth-child(n)` 選取第一個 __box__ 並把 __margin__ 消除掉。 __總之，常用於排版。__
  - _“我不要左側 margin 之 消除版”_

```css
.box {
  width:200px;
  height:200px;
  display:inline-block;
  background:red;
  margin-left: 20px; /* 每個盒子之間有 20px 間距 */
}
.box:first-child{  /* 假定有三個 box，:first-child 能選取第一個盒子。 */
  background: green;
}
.box:nth-child(1){ /* 選取第一個 box 並設 marfib-left: 0px; */
  margin-left: 0px;
}
          /* 更多 :nth-child(n) 用法 */
      .box:nth-child(2n){ /* 選 2 的倍數 */
        background: green;
      }
      .box:nth-child(2n+1){ /* 選 2n+1 */
        background: orange;
      }
<body>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
</body>
```

> [Lesson 2-2 之 CSS __07:21秒__ box 之間的 margin 之 debug 時間](https://www.lidemy.com/courses/378582/lectures/5786329)（這段很有趣）

---

## Pseudo Element

> 可以選到「不存在的元素」
> 要選的話，一定要有 `content: ''`
> CSS Selector 不只是 Selector，還可以創造 content 出來。
1. ::before
    - 沒設定 __position__ 的話會出現在 __content__ 的最前面

2. ::after
    - 沒設定 __position__ 的話會出現在 __content__ 的最後面

---

## 相關用法範例：假如 box 右下角要輸入一段序號

### 第一個方法：透過增加 span

1. div 底下增加 `<span>123</span>`。
2. 寫一個 `.box span` 選擇器。
3. 設定 position : 在 `.box` 設定 `position: relative;`。
4. 設定 position : 在 `.box span` 設定 `position:absolute;`。
> 在這步驟底下，不加 `position: relative;` 的話，定位點會跑去遊覽器視窗的右下角。 _有Step4.沒Step3.的意思。_

```css
.box {
  width:200px;
  height:200px;
  background:red;
  display:inline-block;
  margin-left: 20px;
  position: relative; /* Step.3 設定定位點 */
}
 .box span {          /* Step.2 增加 .box span Selector */
  position:absolute;  /* Step.4 設定定位點 */
  bottom:0px;         /* content 的位置 */
  right:0px;          /* content 的位置 */
}
```

```html
<html>
  <body>
    <div class='box'>box</div>
                  <!-- Step.1 div 裡面增加 span  -->
    <div class='box'>box<span>123</span></div>
    <div class='box'>box<span>456</span></div>
  </body>
</html>

```

---

## 第二個方法：html的結構完全不用動，純CSS的解法。

> `::before` 、 `:nth-child(n)` 的搭配使用。

1. 使用`::before` -> 設定 `.box::before` -> 設定 `position: absolute;`。
2. 這個時候想要調整第二個 box 的 before 的話，設定 `.box:nth-child(n)::before`。

```css
...
.box::before {
  content: '123 '; /* 內容的文字 */
  position: absolute;
  right: 0px; /* content 的位置 */
  bottom: 0px; /* content 的位置 */
}
.box:nth-child(2)::before {
  content: '456';
}
```

```html
<html>
  <body>
    <div class='box'>box</div>
    <div class='box'>box</div>
    <div class='box'>box</div>
  </body>
</html>

```

## 第三個方法：attr() 更神奇的方法

> `::before` 、 `attr()` 的搭配使用。
- attr() 設定你取名的屬性，它會自己去抓這個屬性的內容，放到 content 裡面。
- 自己設定的屬性，在前面加 data，與原生的屬性做區別。

```css
...
.box::before {
  content: attr(data-index); /* 自己設定的屬性，在前面加 data，與原生的屬性做區別 */
  position: absolute;
  right: 0px;
  bottom: 0px;
}
...
<div class='box' data-index='123'>box</div>
<div class='box' data-index='456'>box</div>
...
```

---

## CSS Selector 進階用法

> 排版很好用
1. div + ul
2. div ~ ul

#### 同一個階層的情況下

> 如以下 html 範例

```html
<body>
  <div class='first'>first</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
  <div class='box'>box</div>
</body>
```

1. `.first + .box`：選取 `.first` 後面第一個 `.box` 的元素

```css
.first + .box{
  background: green;
  margin-left: 10px;
}
```

2. `.first ~ .box`：選取 `.first` 後面所有的 `.box`。

```css
.first ~ .box{
  background: green;
  margin-left: 10px;
}
```

3. `.box + .box`：選取第一個 __box__ 以外的所有 __box__。
    - 排版用。設定 box 之間的 margin，這個方法是第一個以外的 box 加上 margin。
    - _“我不要左側 margin 之 pass 版”_
    - [codepen 範例](https://codepen.io/pqehwvjl/pen/GXzRMx)

```css
.box + .box{
  background: green;
  margin-left: 10px;
}
```

---

### [Transition 調整漸變動畫(範例)](https://codepen.io/pqehwvjl/pen/BObWXy)

- __`transition: 對象 時間(s) 模式;`__ : all：對所有屬性有變化、時間、變化
- [常見的錯誤](https://codepen.io/pqehwvjl/pen/EeMZqy)： `transition: all 0.3s ease-in;` 放在 `:hover` 裡面。會變成滑鼠移上去(:hover)有效果，滑鼠離開沒有效果。
- 更多的資料：[transition - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- `opacity 透明度 0~1`

```css
.box {
  width:100px;
  height:100px;
  display:inline-block;
  background:red;
  position: relative;
  transition: all 0.5s ease-in;
}
.box:hover {
  background: orange;
  opacity: 0.7;      /* 透明度 0~1 */
}
```
---

## [Float(範例)](https://codepen.io/pqehwvjl/pen/ZMPLPE)

> 起初用在文字與圖片的排版，後來逐漸被 flexbox 取代。
- float: left; 靠左排。
- float: right;
- clean: both; 清除浮動的意思，這個 `div` 左右不要有東西是浮動的，獨立出來一行。

---

## Flexbox

> 新一代的排版方法

- __`display: flex`__

- __`flex-direction`__

  - row：預設值，由左到右，從上到下
  - row-reverse：與 row 相反
  - column：從上到下，再由左到右
  - column-reverse：與 column 相反
> __row__：一列；一排、__column__：｜行；｜欄；圓柱。[相關參考](http://lifehaskilledme.blogspot.com/2007/08/blog-post.html)。

---

- __`align-items`__

> align-items 剛好和 justify-content 相反，align-items 決定了內容元素與整個 Flexbox 的「垂直對齊」位置，再回想一下最上面講的 Flexbox 盒子模型，具有 cross start 與 cross end 左右兩個端點，align-items 與 align-self 就是按照這個方式做設定，設定值總共有下列五個。( [範例：W3C 說明](https://www.w3.org/TR/css-flexbox-1/#align-items-property) )

  - flex-start：對齊最上面的 cross start
  - flex-end：對齊最下面的 cross end
  - center：垂直置中 [的示範](https://codepen.io/pqehwvjl/pen/JazJoP)
  - stretch：預設值，將內容元素全部撐開至 Flexbox 的高度
  - baseline：以所有內容元素的基線作為對齊標準

---

- __`justify-content`__
> justify-content 決定了內容元素與整個 Flexbox 的「水平對齊」位置，回想一下最上面講的 Flexbox 盒子模型，具有 main start 與 main end 左右兩個端點，justify-content 就是按照這個方式做設定，而其中的設定值總共有下列五個。( [範例：W3C 說明](https://www.w3.org/TR/css-flexbox-1/#justify-content-property))
  - flex-start：預設值，對齊最左邊的 main start
  - flex-end：對齊最左邊的 main end
  - center：水平置中
  - space-between：平均分配內容元素，左右元素將會與 main start 和 main end 貼齊
  - space-around：平均分配內容元素，間距也是平均分配 [的示範](https://codepen.io/pqehwvjl/pen/JazJoP)


---

- Transform

> 對元素做一些改變
- transform: scale(1.2)
- transform: translateX(10)
- transform: rotate(10deg)
