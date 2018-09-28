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

### 完整的 `<script>` 標籤的寫法

```html
<script type="text/javascript">
    console.log(123)
</script>
```

### dom 如何使用

```html
<body>
    <div id="test">
        hello
    </div>
</body>
<script type="text/javascript">
var test = document.getElementById('test')
console.log(test)
</script>
```