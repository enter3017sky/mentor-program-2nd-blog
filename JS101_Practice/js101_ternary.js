
/*
	三元運算子(Ternary)

			condition ? A : B

	條件 ？ 如果是true回傳 A : 如果是false就回傳 B
*/

console.log(10 > 5 ? 'bigger' : 'smaller')

var score = 60
var message = ''
if (score >= 60) {
  message = 'pass'
} else {
  message = 'fail'
}

// 以上的範例中，用三元運算子可以簡化成以下的範例
var score = 60
var message = score >= 60 ? 'pass' : 'fail'
console.log(message)

/*
var score = 60
var isPass = score >= 60
	isPass = true

if (score >= 60) {
	isPass = true
} else {
	isPass = false
}
*/
