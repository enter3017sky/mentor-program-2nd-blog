/*
用國中數學來理解 function
y = f(x)
y = 回傳值
x = 參數
f(x) = 函數

f(a, b, c) = a + 2b + 3c
f(1, 2, 3) = 14
f(1, 1, 1) = 6

*/

// function f:函數名稱(參數)
function f (a, b, c) {
  return a + 2 * b + 3 * c
}
console.log(f(1, 2, 3))

// 產生 n 個陣列的函式
function generateArray (n) {
  var result = []
  for (var i = 1; i <= n; i++) {
    result.push(i)
  }
  return result
}
// generateArray(3) => [1, 2, 3]
// generateArray(10) => [1, 2, 3,... ,10]

console.log(generateArray(10))

// 生成 多少到多少區間的陣列
function generateArrayAB (form, to) {
  var result = []
  for (var i = form; i <= to; i++) {
    result.push(i)
  }
  return result
}
// generateArray(3) => [1, 2, 3]
// generateArray(3, 10) => [3,... ,10]

console.log(generateArrayAB(3, 10))

/*
要注意的事情就是 function 的結構
函式的名稱：generateArrayab
要回傳的東西(min, max)
{} :要做的事情
*/
// 生成 多少到多少區間的陣列
function generateArrayab (min, max) {
  var result = []
  for (var i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}
// generateArray(3) => [1, 2, 3]
// generateArray(3, 10) => [3,... ,10]
var a = 3
var b = 10
console.log(generateArrayab(a, b))

function star (n) {
  for (var i = 1; i <= n; i++) {
    console.log(i)
  }
}
star(10)

// print 1~100的奇數
// 可以把條件拆開來做，大綱一部分，細節一部分
function logEven (number) {
  if (number % 2) {
    console.log(number)
  }
}
function print1to100 () {
  for (var i = 1; i <= 100; i++) {
    logEven(i)
  }
}
print1to100()
