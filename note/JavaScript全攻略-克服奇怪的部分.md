# 

## 2-10 執行環境：創造與提升

![image](https://ppt.cc/fBT71x@.png)

當語法解析器執行你的程式碼時，開始設定轉化你的程式碼時，它會知道你在哪裡創造變數和函數，所以這是在創造階段被設定，設定變數和函數在記憶體裡，這個步驟叫做「提升(Hoisting)」，他不是真的把你的程式碼移到最上面，這表示在逐行執行程式碼之前，JavaScript 已經為變數和函數在記憶體中建立一個空間了，所以變數和函數已經存在於記憶體中，所以當成是被逐行執行時，他可以找到它們，然而，變數的情況又有點不同，你可以看到函數已經全部都在記憶體裡了，代表函數裡面的程式碼已經被執行了，然而，下一個執行階段才會設定等號的賦值行為，就是範例中的 a = 'hello world'。所以 JavaScript 為 a 空出記憶體空間時，它不知道 a 會是什麼值，直到 a 被執行才知道，因此放上 undefined 的替代文字。

總而言之，hoisting 就是第一階段，設定記憶體空間，所以程式被執行時，這些東西已經在記憶體裡了，你的程式已經被設定好準備執行了。





```js
b();
console.log(a);

var a = 'hello world!';

function b() {
    console.log('Called b!');
}
```


## 2-11 JavaScript 與 undefined

創造執行環境(Execution Context)會有兩個階段，第一個階段是創造階段，此時會產生一個全域物件到全域執行環境裡、特殊變數 this，如果有外部環境的話，也會產生個連結連到外部環境。此時還有一個現象稱為 hoisting, 會設定變數以及函式，而變數會被設定一個初始值 undefined。

![image](https://ppt.cc/fJaAWx@.png)

```JavaScript
var a
console.log(a)

if(a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is defined!');
}

var a = 'hello world';
```

## 執行環境：程式執行

```js
function b() {
    console.log('Called b!');
}

b();
console.log(a); // a 在創造階段時被設為 undefined
var a = 'hello world!'; // 把記憶體中的 a 的值設定為 hello world 字串
console.log(a);
```

## 2-13 單執行緒、同步執行


JavaScript 是 單執行緒(single threaded)和同步執行(synchronous execution)的程式
單執行緒(single threaded): one command at a time,
同步執行(synchronous execution): on at a time, 對程式語言來說，一次一個


JavaScript 執行程式時，首先創造全域執行環境(Global Execution Context)，語法解析器會分析程式，然後編譯器會編譯你的程式，然後創造全域執行環境(全域物件、變數、this)，如果是在瀏覽器會創造 window 物件，然後將這些函數放進記憶體中。
在創造階段，第一個階段 b 和 a 都在記憶體裡，然後程式碼會逐行被執行
，但不會執行函數中的程式，因為函數還沒被呼叫，直到 a() 。



JavaScript 先創造全癒執行環境(EC)，遇到 a()然後呼叫 a 函數，創造 a 的 EC，然後呼叫 b()，創造 b 的 EC，然後執行 `console.log('func b')`，b 函數執行完了，從 call stack 中移除，換 a 函數繼續執行下去 `console.log('func a')`，a 函數執行完了從 call stcak 移除，繼續往下執行 `console.log('global')`

```js
function a() {
    b()
    console.log('func a')
}
function b() {
    console.log('func b')
}
a()
console.log('global')
```

![image](https://ppt.cc/fTTzYx@.png)

## scope chain


```js
function a() {
    function b() {
        console.log('1',myVar)// 1 2
    }
    console.log('2', myVar)// 2 undefined
    var myVar = 2;
    console.log('3', myVar)// 3 2
    b()
}
console.log('4', myVar)// 4 undefined
var myVar = 1
console.log('5', myVar)// 5 1
a()
```