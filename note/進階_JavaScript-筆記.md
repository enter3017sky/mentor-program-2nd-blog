
# 變數的資料型態

## primitive type 原始型態

> Immutable: 不可變的,不變的,不能變的

1. null
2. undefined
3. string
4. number
5. boolean
6. symbol(ES6)

- 其他都是 Object 物件
7. object(array, function, date ...)

---

以下的範例示範原始型態(primitive type)與物件(object)的差別。

- str 不會被改變，對 str 使用方法，會返回新的值


```js
var str = 'hello'
str.toUpperCase()
// toUpperCase() 不會改變原本的字串，而是傳回一個新的字串。
console.log(str)
// => hello

var newStr = str.toUpperCase()
console.log(str, newStr)
// => hello HELLO

```

- arr 會被改變

```js
var arr = [1]
arr.push(2)
console.log(arr)
// => arr = [1, 2]
```

## 檢測型別：

### [typeof](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof)

 - null 回傳 Object
 - function 回傳 function
 - array 回傳 Object

> typeof 運算元會傳回一個字串值

```js
var a
if(typeof a !== 'undefined') {
    console.log(a)
}
=> undefined
```

- 如果沒有用 typeof 檢測的話，當被檢測的變數沒有賦值的時候會出現錯誤

```js
var a
if(a !== undefined) {
    console.log(a)
}
=> ReferenceError: a is not defined
```

### `Array.isArray()`

### `Object.prototype.toString.call()`

  - 能夠正確的回傳型別