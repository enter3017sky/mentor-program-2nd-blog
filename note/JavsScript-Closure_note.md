# Closure 閉包

- example 1

```js
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i)
            }
        )
    }
    return arr
}
var fs = buildFunctions()
fs[0]() // 3
fs[1]() // 3
fs[2]() // 3
```

1. 在執行堆疊中(call stack)，會先建立全域執行環境(global execution context)，全域執行環境包含了變數 fs 、函式 buildFunctions()。

2. 因為這行 `var fs = buildFunctions()`，`buildFunctions()`被呼叫了，然後迴圈執行，把匿名函式 push 到 arr 裡，最後迴圈因為 `i++` 後 `i = 3` 離開迴圈，`return arr`，執行完之後，它的執行環境中包含了 `arr[f0, f1, f2]`、`i = 3`。

    - 被 push 到 arr 裡面的匿名函式不會立即的執行裡面的 `console.log(i)`。

3. arr 裡面的函式 `fs[0]()` 被呼叫執行的時候，它找不到變數 i，透過範圍鍊(scope chain)往外部參考(outer environment)，在 `buildFunctions()` 本來的執行環境中的記憶體位置找到 i = 3，當我們執行 arr 裡面的函式時，它只能告訴我們現在記憶體中外部參考環境的值是多少，而不是創造函式時後的值


![image](https://github.com/enter3017sky/mentor-program-2nd-blog/blob/master/picture/closure.png?raw=true)

---

### ES5 的做法

- 迴圈執行每一圈的時候，會把 i 傳入 IIFE 函式裡面，接著執行，離開堆疊，以閉包的方式將 j 儲存在記憶體之中，當呼叫 arr 中的函式時，`console.log(j)`時候找不到，透過 scope chain 的方式，往上一層找到存在記憶體空間中的 j。

- 為了保存 i 的值，我需要不同的執行環境放進陣列，當我回圈進行時，需要更大的飯為包住現在的值，而獲得執行環境唯一的辦法就是執行函式。

- console.log(j) 的時候，會往上一層的 IIFE 找，而 j 的值被記憶體保存下來了。j 的值會被迴圈進行時儲存。

```js
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j)
                }
            }(i))
        )
    }
    return arr
}
var fs = buildFunctions()
fs[0]() // 1
fs[1]() // 2
fs[2]() // 3
```

---

### ES6 let

- 使用 ES6 的 let，將變數的作用域侷限在 {} 之中

```js
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i)
            }
        )
    }
    return arr
}
var fs = buildFunctions()
fs[0]()
fs[1]()
fs[2]()
```

```js
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
        let j = i
        arr.push(
            function() {
                console.log(j)
            }
        )
    }
    return arr
}
var fs = buildFunctions()
fs[0]()
fs[1]()
fs[2]()
```