## JavaScript 基礎

### 陣列

#### 建立和初始化陣列

```JavaScript
// 用 new 就能簡單的宣告並初始化一個陣列
var dayOfWeek = new Array();

// 也可以建立的時候直接指定長度。
var dayOfWeek = new Array(7);

// 也可以直接將陣列元素作為參數傳遞給它的建構子
var dayOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

// 建立陣列最簡單的方式，用中括號就可以了
var dayOfWeek = [];

// 也可以使用元素初始化陣列
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// 查看陣列裡面有幾個元素，用陣列的 length 屬性查看
console.log(dayOfWeek.length)

// 要存取陣列特定位置的元素，可以用中括號傳遞數值的位置，想輸出陣列所有元素，可以用迴圈遍歷陣列列印元素。
for(var i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i])
}
```

```js
// 求婓波那契數列前 20 個數字

var fibonacci = [] // 宣告並建立陣列
fibonacci[1] = 1 // 把婓波那契數列中前兩個數字分別給了陣列的第二第三位(陣列 index 0 的位置略過)
fibonacci[2] = 1

// 獲得 3~20 位的數字，用迴圈處理，把前兩位相加給當下陣列的位置
for(var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

for(var i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}
```

---

#### 添加和刪除元素

```js
/** 假如我們現在有一個陣列 */
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// 陣列的尾部添加一個元素
numbers[numbers.length] = 10;
numbers.push(11)
numbers.push(12)

// 陣列的最前面添加一個元素
for(var i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i-1]
}
numbers[0] = -1 

numbers.unshift(-2)
numbers.unshift(-4, -3)

// 藉由改變陣列的 index(往前一格)來刪除第一個元素，但是最後空出來的位置會變成 undefined
// for(i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i+1]
// }

// 用 shift 方法確實刪除第一個元素。
numbers.shift()

// 用 splice 方法指定位置(索引)，刪除相對應的位置和數量的元素
// 從 index 5 的地方刪了三個元素(numbers[5], numbers[6], numbers[7])
numbers.splice(5, 3)

// 把剛剛刪除的放回去，一樣可以用 splice 方法。
numbers.splice(5, 0, 2, 3, 4)

/** splice()
 * 第一個參數： 表示刪除或插入的索引值
 * 第二個參數： 刪除的數量(目的不是刪除，是要傳入元素的話，參數 0)
 * 第三個參數之後就是元素的值
 */

console.log(numbers)
```
---

### JavaScript 的陣列方法參考

對陣列中的每一項運行給定函數，

- concat: 連接 2 個或更多陣列，並返回結果。
- every: 對陣列中的每一項運行給定函數，如果陣列中每一項都返回 true，則返回 true：另外一個存取特性型的方式。
- filter: 對陣列中的每一項運行給定函數，返回該函數會返回 true 的項目所組成的陣列。
- forEach: 對陣列中的每一項運行給定函數。這個方法沒有返回值。
- join: 將所有陣列元素連接成一個字串。
- indexOf: 返回第一個與給定參數相等的陣列元素的索引，沒有找到則返回 -1。
- lastIndexOf: 返回在陣列中搜尋到的與給定參數相等的元素的索引裡最大的值。
- map: 對陣列中的每一項運行給定函數，返回每次函數呼叫的結果所組成的陣列。
- reverse: 顛倒陣列中元素的順序。
- slice: 傳入索引值，將陣列裡對應索引範圍內的元素作為新陣列返回。
- some: 對陣列中的每一項運行給定函數，如果任一項返回 true，則返回 true。
- sort: 按照字母順序對陣列排序，支援傳入指定排序方法的函數作為參數。
- toString: 將陣列作為字串返回。
- valueOf: 和 toString 類似，將陣列作為字串返回。

##### 陣列合併

concat 方法可以像一個陣列傳遞陣列、物件、或是元素。陣列會按照該方法傳入參數的順序連接指定的陣列。

```js
var zero = 0
var positiveNumbers = [1, 2, 3]
var negativeNumbers = [-1, -2 , -3]
var numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers)
// => [ -1, -2, -3, 0, 1, 2, 3 ]
```

#### 迭代器函數
 

 ｐ．３９















---

```javascript
// 雙斜線(double slashes) 之後的是中文註解。
// 請仔細閱讀中文註解：它們解釋 JavaScript 的程式碼。
// 變數是值的符號名稱（symbolic name）。

var x ;    // 宣告名為 x 的變數。

// 值可用 = 號指定給變數。
x = 0;     // 現在變數 x 有值 0
x          // => 0：直接對一個變數求值（evaluates）會得到它的值。

// JavaScript 支援幾種不同型別的值
x = 1;                   // 數字（Number）。
x = 0.01;                // 整數（integers）與實數（reals）都用同一種數字型別。
x = "hello world";       // 引號中的文字字串。
x = 'JavaScript';        // 單引號（Single quote marks）也用來界定字串。
x = true;                // Boolean 值。
x = false;               // 另一個 Boolean 值。
x = null;                // Null 是一個特別的值，它代表「無值」。
x = undefined;           // Undefined 與 null 類似。




另外兩個 JavaScript 可以操作的重要的型別是物件（Object）與陣列（Array）。

// JavaScript 最重要的資料型別是物件。
// 物件是「名稱/值」對組（name/value pairs）的的群集，或是「字串」對應至「值」的 map（映射）

var book = {              // 物件由大括號（curly braces）所包圍。
  topic: "JavaScript",    // 特性 topic 有值 "JavaScript"。
  fat: true               // 特性 fat 有值 true。
}                         //這個右大括號代表物件的結尾。

// 物件的特性可用 . 或 [] 存取：
book.topic                // => "JavaScript"
book["fat"]               // => true：另外一個存取特性型的方式。
book.author = "Flanagan"; // 使用指定創建一個新特性。
book.contents = {};       // {} 是個沒有特性的空物件。


// JavaScript 也支援值的陣列（使用數值索引的列表）
var primes = [2, 3, ,5 ,7];     // 四個值組成的陣列，由 [ 與 ] 界定。
primes[0]                       // => 2：陣列的第一個元素（索引 0）。
primes.length                   // => 4：陣列中有多少元素。
primes[primes.length - 1]       // => 7：陣列中最後一個元素。
primes[4] = 9;                  // 藉由指定新增一個元素。
primes[4] = 11;                 // 或藉由指定更改現存元素。
var empty = [];                 // [] 是一個沒有元素的空陣列。
empty.length                    // => 0

// 陣列與物件中可容納其他的陣列或物件：
var points = [                  // 一個雙元素的陣列。
  {x:0, y:0},                   // 每一個元素都是個物件。
  {x:1, y:1}
];

var data = {                    // 一個雙特性的物件。
  trial1:[[1, 2], [3, 4]],      //每個特性值都是個陣列。
  trial2:[[2, 3], [4, 5]]       //陣列中的元素也是陣列。
}

上面演示的程式碼中，用中括號（square braces）列出陣列元素，以及在大括號內將特性名稱對應至特性值的語法稱為初值設定運算式（initializer expression）。運算式（expression）是JavaScript 中的片語，可被估算（evaluated）進而產生一個值。例如，透過 . 或 [] 指涉至物件特性值或是陣列元素的用法就是運算式。


在 JavaScript 中構成運算式最常見的方式是使用運算子（operator）
// 運算子作用在值（此時可稱之為 operands，運算元）上，並產生一個新的值。
// 最常見的是算術運算子（Arithmetic operators）:

3 + 2                       // => 5：加
3 - 2                       // => 1：減
3 * 2                       // => 6：乘
3 / 2                       // => 1.5：除
points[1].x - points[0].x   // => 1：複雜一點的運算元也行
"3" + "2"                   // => "32"： + 相加數字，串接字串

//JavaScript 定義一些簡寫（shorthand）算術運算子
var count = 0;              // 定義一個變數
count++;                    // 遞增此變數
count--;                    // 遞減此變數
count += 2;                 // 加 2：與 count = count + 2 等效;
count *= 3;                 // 乘以 3：與 count = count * 3 等效;
count                       // => 6：變數名稱也是運算式。

//相等性（equality）與關係（relational）運算子測試兩個值是否相等。
var x = 2, y = 3;           // => 這些 = 符號代表指定，而非相等性測試。
x == y                      // => false：相等性
x != y                      // => true：不等性
x < y                       // => true：小於
x <= y                      // => true：小於或等於
x > y                       // => false：大於
x >= y                      // => false：大於或等於
"two" == "three"            // => false：兩個字串不相同
"two" > "three"             // => true："tw"按字母順序（alphabetically）大於"th"
false == (x > y)            // => true：false 與 false 相等

//邏輯（logical）運算子結合或反轉（invert）boolean 值
(x == 2) && (y == 3)        // => true：兩個比較皆為 true。&& 代表 AND
(x > 3) || (y < 3)          // => false：兩個比較皆不為 true。|| 代表 OR
!(x == y)                   // => true：! 反轉 boolean 值

如果 JavaScript 的片語是運算式，那麼完整的句子就稱為述句（statements）。在上面的程式碼中，以分號結尾的行就是述句。
述句與運算式間多有重疊，粗略地說，運算式計算出值，但並未做任何事：它沒有以任何方式更動程式的狀態（state）。述句則不具有值（或是不具有我們關心的值），但是它們會更動狀態。
你已經在上面看過變數宣告與指定述句，另一大類述句是控制結構（control structures），例如條件句（conditionals）或迴圈（loops）。


函式（functions）是具有名稱與參數的 JavaScript 的程式碼區塊，只要定義一次，就可以重複被調用（invoke），這裡是簡單的範例。

function plus1(x) {         // 定義一個名為 plus1 的函式，具有參數 x
  return x+1;               // 回傳一個比傳入值大 1 的值
}                           // 用大括號圍住函式

plus1(y)                    // => 4; y 為 3，所以這個調用回傳 3+1

var square = function(x) {  // 函式也是值，可以指定給 vars
  return x*x;               // 計算函式的值
};                          // 分號標示這個指定的結尾

square(plus1(y))            // => 16：在一個運算式中調用兩個函式

當我們將函式與物件結合，我們就得到方法（methods）：
// 當函式被指定給某個物件的特性，我們稱它們為「方法」。所有 JavaScript 物件都有方法：

var a = [];                 // 創建一個空陣列
a.push(1, 2, 3);            // push() 方法新增一個元素至陣列
a.reverse();                // 另外一個方法：反轉（reverse）元素順序


```