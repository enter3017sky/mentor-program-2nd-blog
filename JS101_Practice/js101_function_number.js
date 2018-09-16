/* 數字相關常見函式
 Number 類型的內建函式
*/

// 數字變字串，兩種方式

var c = 3
console.log((c + '')) // 數字加空字串，會變成字串

console.log(c.toString())

// 字串變數字

var a = 10
var b = '20.123'

// 兩個方法 Number() 或 parseInt(參數,幾進位)
console.log(a + Number(b))
console.log(a + parseInt(b, 10))

// 小數的話用 parseFloat()
console.log(parseFloat(b))

// 顯示到小數點第幾位，也會一並四捨五入 .toFixed(n)
console.log(parseFloat(b).toFixed(3))

// 你在 JavaScript 可以存的最大的數字的範圍
console.log(Number.MAX_VALUE = 10)

/*
result =
30
30
20
20.000
1.7976931348623157e+308
*/

// 往上取整數 result=10
console.log(Math.ceil(9.2))

// 往下取整數 result=9
console.log(Math.floor(9.2))

// 四捨五入 result= 5 , 6
console.log(Math.round(5.4))
console.log(Math.round(5.5))

// 開根號
console.log(Math.sqrt(9))

// 次方 2的10次方
console.log(Math.pow(2, 10))

// 隨機數 0~0.99999999999
console.log(Math.random())

// 隨機數 1~10
console.log(Math.floor(Math.random() * 10 + 1))

// pi 3.14159
console.log(Math.PI)
