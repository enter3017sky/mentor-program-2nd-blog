# [JS201] 進階 JavaScript：那些你一直搞不懂的地方

# 1-1 變數的資料型態

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

- 檢查傳入的物件是否為陣列（Array），如果是便回傳 true，否則回傳 false。

### `Object.prototype.toString.call()`

 - 能夠正確的回傳型別

---

 # 1-2 讓你摸不透的 = 變量賦值

- string

```js
var a = 10;
var b = a;
console.log(a, b)
// =>10 10
b = 200;
consol.log(a, b)
// =>10 200
```

- object: 參照同一個記憶體位置，所以更改的時候，a 被更改到。

```js
/**
 * 0x10: {number: 10} 將物件指向一個記憶體位址
 * obj: 0x10  將記憶體位址分配給 obj */
var obj = {
    number: 10
}

/** 將 obj 參照物件的記憶體位址給 obj2，所以值一樣，判斷也會一樣 */
var obj2 = obj
console.log(obj, obj2)
console.log(obj === obj2)
// => { number: 10 } { number: 10 }
// => true

/** obj2 改變了共同指向的記憶體位址上的物件的屬性值，所以 obj 跟著改變。 */
obj2.number = 20
console.log(obj, obj2)
console.log(obj === obj2)
// => { number: 20 } { number: 20 }
// => true

/** 但是以下的情況，{ number: 30 } 會指向新的記憶體位址。
 * 然後再將 obj2 指向 { number: 30 } 的記憶體位址 */
obj2 = {
    number: 30
}
console.log(obj, obj2)
console.log(obj === obj2)
// => { number: 20 } { number: 30 }
// => false
```

```js
var obj = {
    number: 10
};
var obj2 = obj;
console.log(obj, obj2)
// => { number: 10 } { number: 10 }

// obj2.number 直接改變指定的記憶體位址的值，所以 obj obj2 都改變了。
obj2.number = 200;
consol.log(obj, obj2)
// => { number: 200 } { number: 200 }

// 底層可以想像成這樣
// 1. 先把物件指定到一個記憶體位址
0x01: { number: 10}

// 2. 然後再把記憶體位址給變數。
obj: 0x10
obj2: 0x10



obj2 = {
    number: 20
}

```

- Array 也是。

```js
var arr = []
var arr2 = arr;
console.log(arr, arr2)
// => { number: 10 } { number: 10 }
arr2.push('arr2')
console.log(arr, arr2)
// => { number: 200 } { number: 200 }

// 底層可以想像成這樣
0x10: [] => ['arr2']
arr: 0x10
arr2: 0x10
```

### 相等的情況

```js
var a = []
var b = a
console.log(a === b) // true
b = []
console.log(a === b) // false
```

## 但如果是用等號賦值的話，情況就不一樣了！


```js
// 0x10: []

var arr = []  // arr: 0x10
var arr2 = arr  // arr2: 0x20
console.log(arr, arr2)

arr2 = ['arr2'] // 0x20: ['arr2']
// 先把 'arr2' 指到一個記憶體位址，然後再把記憶體位址給變數
console.log(arr, arr2)
```

```js
var obj = { number: 10 };
var obj2 = obj;
console.log(obj, obj2)
// => { number: 10 } { number: 10 }
b.number = 200;
consol.log(obj, obj2)
```

# 1-3

- Special CASE: NaN 不等於 NaN。
> 只有 a 是 NaN 的時候，a 不等於 a。

```js

var a = Number('Hello')
console.log(a)
console.log(a === a)
```

# 1-4






# 6-1

- 在沒有意義的地方(非物件導向的環境、非 DOM 的操作)呼叫 this，預設值會是什麼？
- 以下的範例會印出，執行環境的東西
    - node.js: global
    - Browser: windows

```js
function test() {
    console.log(this)
    console.log(this === global) // true
}
test()
```

- 如果使用 `'use strict';` 嚴格模式的話，在沒有意義的地方 this 就是 undefined


