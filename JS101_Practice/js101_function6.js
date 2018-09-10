/* return 不 return，有差嗎？

function：
第一種是不需要知道結果的
第二種是呼叫它，

*/

// //不需要知道結果的
// function sayHello(){
// 	console.log('Hello')
// }
// sayHello()

// //不需要知道結果的
// function sayHello(name){
// 	console.log('Hello',name)
// }
// sayHello('nick')

function sayHello1 (name) {
  // 你什麼都不做的話，它會預設幫你加 undefined
  // function 不加 return 的話，預設就是 undefined

}
var a1 = sayHello1('nick') // 宣告一個變數 a ，接受 sayHello 這個 function 的回傳值

console.log(a1)

function sayHello (name) {
  console.log('Hello', name)
  return 'I am a'
}
var a = sayHello('nick') // 宣告一個變數 a ，接受 sayHello 這個 function 的回傳值
console.log(a)

// 第二種你需要回傳值的話，裡面要寫return，沒寫一樣會回傳 undefined
function double (x) {
  return x * 2
}
var result = double(3)
console.log(result)

// 在 function 裡面一用到 return 會立刻返回，代表下面的程式碼不執行
function testReturn (x) {
  return 1 // 一碰到 return 就會返回到(var result = testReturn(3))，所以result = 1
  console.log(123) // eslint-disable-line
  return x * 2  // eslint-disable-line
}
var result = testReturn(999)
console.log(result)

function testReturn2 (x) {
  // return 1 //一碰到 return 就會返回到(var result = testReturn(3))，所以result = 1
  console.log(123)
  return x * 3
  console.log(456)// 前面有 return，不會被執行
}
var result = testReturn2(3)
console.log(result)
// 輸出結果
// 123
// 9

// 這個用法比較少
function triple (x) {
  return x * 3
}
function main () { // 把上面範例的程式碼用一個 function 包起來，
  var result = triple(1000)
  console.log(result)
}
main()
