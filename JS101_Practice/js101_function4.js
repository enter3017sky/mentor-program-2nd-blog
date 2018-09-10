/*
	function 傳參數的運作機制

*/

/*
	var a = number1
	var b = number2 的意思
*/

// 交換兩個變數的範例
function swap (a, b) {
  var temp = a
  a = b
  b = temp
  console.log('a, b:', a,b)
}

var number1 = 10
var number2 = 20

console.log(number1, number2)

swap(number1, number2)

console.log(number1, number2)

function addValue (obj) {
  obj.number++
  obj.test = 1
  return 1
}

var b = {
  number: 10
}

addValue(b)

console.log(b)

// 不需要知道結果的

function sayHello () {
  console.log('Hello')
}
sayHello()
