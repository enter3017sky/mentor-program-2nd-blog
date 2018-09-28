# FE101

## HTML => 瀏覽器(渲染) => 畫面

```html
<!DOCUMENT html>
<html>
    <head>
        <meta charset="utf-8" />
        <!--  
        <meta> 裡面沒有內容 所以是一個自閉合標籤(self-closing)
        屬性: charset  
        值(value): utf-8 
        -->
        <title>網頁的標題</title>
    </head>
    <body>
    </body>
</html>
```

## 別忘了 HTML 最早存在的意義：h1~h6、p

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
<p></p>
```

- [Lorem ipsum](https://zh.wikipedia.org/wiki/Lorem_ipsum): 是指一篇常用於排版設計領域的拉丁文文章，主要的目的為測試文章或文字在不同字型、版型下看起來的效果。中文的類似用法則稱為亂數假文、隨機假文。

## 很常見的標籤：div 與 span

- div: 區塊元素。佔滿整行。
- span: 行內元素。

## 顯示圖片就靠它：img

- `<img alt="I am an image." title="圖片的標題" src="url" />`
- `alt=""`: (alternative) 圖片不能顯示時的替代文字。
- `src="url"`: 圖片來源：網址或目錄。
- `title=""`: 圖片的標題：滑鼠移過去會顯示標題

## 顯示清單：ul、ol 與 li

- `<ul>`: 無序清單(unordered list)
- `<ol>`: 有序清單(ordered list)
- `<li>`: 清單項目(list item)

## 保留完整格式：pre

- `<pre>`: 預格式化文字、定型文字(preformatted text)：包夾在 pre 標籤內的文字可以依照原先編輯的原貌呈現
- `<br>`: (line break)：換行

## 表格必備標籤：table、th、tr 與 td

`<table>`: 表格
`<tr>`: table row
`<td>`: table cell
`<th>`: table header 看起來會是粗體


```html
<table>
    <tr>
        <th>姓名</th>
        <th>國文分數</th>
        <th>英文分數</th>
    </tr>
    <tr>
        <td>小明</td>
        <td>70</td>
        <td>80</td>
    </tr>
    <tr>
        <td>小花</td>
        <td>89</td>
        <td>65</td>
    </tr>
</table>
```

## 帶我走，到遙遠的以後：a

- `<a>`: anchor 錨點
- href: __h__ ypertext - __ref__ erence
- `target=""`:
  - `_self` 在現在的分頁打開連結
  - `_blank` 開新分頁打開連結

```html

點擊<a>跳到 p3 地方
<a href="#p3">Take me to p3</a>
<h1 id="p1">test</h1>
...
...
...
<h1 id="p3">test</h1>
```

## 語意化的 UI 標籤：main、nav、footer 等等

> __Semantic__ elements: 語義化元素

- 非語義元素的範例：`<div>` 和 `<span>` - 對其內容一無所知。
- 語義元素的示例：`<form>`，`<table>`和`<article>` - 清楚地定義其內容。


- `<main>`: 網頁主要的部分。
- `<nav>`: navigation 導覽列。
- `<footer>`: 網頁的結尾，包含一些資訊。

[W3c HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
[語義 - MDN Web Docs術語表：Web相關術語的定義| MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

## 直接用別人的網頁：iframe

- `<iframe src="url" width="100%" height="500px">`

## 表單相關標籤：form、input、textarea

- `<form>`: 表單
- `<input>`: 輸入框
  - `type=" "`:
    - text: 輸入文字。
    - password: 變成********
    - email: 有些瀏覽器會幫你做驗證。
    - date: 可以讓你選取日期。
    - radio: 單選框
    - checkbox: 複選框
    - submit: 提交


```html
<form>
    <div>
    姓名：<input type="text" />
    </div>
    <div>
    密碼：<input type="password" />
    </div>
    <div>
        <input type="submit" value="送出表單" />
    </div>
</form>
```

- 要幫 input 加一個 `id="xxx"` ，`label for="xxx"` 是給這個 input 用的，點字就可以選取了。

```html
<div>
    生理性別：<input type="radio" name="gender" id="male" /><label for="male">男性</label> 
    <input type="radio" name="gender" id="female" /><label for="female">女性</label>
    <input type="radio" name="gender" id="other" /><label for="other">其他</label>
</div>
<div>
    興趣：<input type="checkbox" id="sports" /><label for="sports">運動</label>
    <input type="checkbox" id="readind" /><label for="readind">閱讀</label>
    <input type="checkbox" id="print" /><label for="print">畫畫</label>
</div>
```
[\<input>: The Input (Form Input) element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)


## SEO 與相關標籤：meta tag

> Search Engine Optimization: 搜尋引擎優化
> 告訴搜尋引擎你的網也是是什麼
> 幫助搜尋引擎理解你的網頁

- 三個優化搜尋引擎的方法
1. 用 `<meta>`: keyword、description
2. __`og:`__: Facebook 用的。
3. __JSON-ld__: Google用的。


```html
<meta property="og:title">
<meta property="og:image" content="https://image....jpg" />
<meta property="og:description" content="客觀公正美食評論，在....">
<meta name="keyword" content="食物, 用餐, 評論" />
<meta name="description" content="客觀公正美食評論，在...">
```

- __JSON-ld__: JSON for Linking Date
- 用它提供的格式描述網頁，可以幫助機器理解你的結構、內容、網頁。

```javascript
<script type="application/ld+json">
{
"@context" : "http://schema.org",
"@type" : "FoodEstablishment"
    ...
    ...
}
```

- __robots.txt__: 給網頁爬蟲看的檔案，跟他說哪個檔案要爬，哪個不爬。
- __sitemap.xml__: 網址的地圖


## Escape：該怎麼顯示標籤？

Escape: 跳脫字元

- `&` => `&amp;`
- `<` => `&lt;`
- `>` => `&gt;`

```html
& => &amp;
< => &lt;
> => &gt;

```