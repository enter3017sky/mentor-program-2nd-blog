


## HTML 
#### Hypertext Markup Language（超文字標示語言）


一個 HTML 裡面，包含了兩個結構，head、body。
 1.head: 放一些跟這個網頁相關的資訊。
 2.body: 實際的網頁內容。
```html
<!DOCTYPE html> 指定用標準模式渲染這個網頁
<html>
  <head>
    <meta charset="UTF-8" />
    <title>網頁的標題</title>
  </head>
  <h1>H1的標題</h1>
  <h2>H2的標題</h2>
  <p>段落</p>
  <a href="http://www.google.com" target="_blank">google.com</a>
  <div>division</div>
  <span>span</span>
  <ul>
    <li>last item/<li>
    <li>last item</li>
    <li>last item</li>
  </ul>
  <ol>
    <li>last item/<li>
    <li>last item</li>
    <li>last item</li>
  </ol>
  <body>
  </body>
</html>
```

## Open Graph Protocol
 是 Facebook 在 2010 年提出，規格化定義的 HTML Meta 屬性提供網頁的標題、縮圖、描述等等資訊，Facebook 本身也藉由讀取 Open Graph Protocol 中的資訊將網址以內容摘要的型態顯示出來。
1. <meta name="og:title" content="網頁標題">
2. <meta neme="og:description" content="網頁描述">
3. og:type, og:image...
如果需要確認網頁 Open Graph 的內容，你可以使用 Facebook Debugger ；將網址貼入 Debugger 後他便會把抓到的 Open Graph Metadata 與縮圖顯示出來，這裡就完全跟動態牆上會看到的一樣了喔！
https://developers.facebook.com/tools/debug/


  ## CSS 階層式樣式表
1. Selector + 規則：先選到你要改變的元素，再來套用規則

Tag Selector:
ID Selector `#`:整個網頁上的ID只能有一個。
Class Selector `.`:

div {
  color:red;
}

ID Selector:

\#first {
  color:red;
}

.row {
  color:yellow;
}




三種方法

第一種放在 tag 裡面：
<h1 style="color:red ; font-size:50px;">這是一個標題h1</h1>





<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8" />
    <title>網頁的標題</title>
      <style>
        h1{
          color: red;
        }
        p{
          coler:yello;
        }
        #first{
          color: red;
        }

        #second{
          background-color:yellow;
        }
      </style>
  </head>
  <h1>H1的標題</h1>
  <h2>H2的標題</h2>
  <p id="first">第一個段落</p>
    <p id="second">第二個段落</p>
  <a href="http://www.google.com" target="_blank">google.com</a>
  <div>division</div>
  <span>span</span>
  <ul class="row">
    <li>last item/<li>
    <li>last item</li>
    <li>last item</li>
  </ul>
  <ol class="row">
    <li>last item/<li>
    <li>last item</li>
    <li>last item</li>
  </ol>
  <body>
  </body>
</html>