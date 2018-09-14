/*
 if else 判斷式
*/

if(true){
  console.log('hello')
}
if(10 > 5){
  console.log('true')
}

var score = 50
if (score >= 60) {
  console.log('pass')
} else {
  console.log('fail')
}
// result = fail

var score = 65
if (score >= 60) {
  console.log('pass')
} else {
  console.log('fail')
}
// result = pass


var score = 65
if (score <= 70 >= 60) {
  console.log('pass')
}
// 如果用以上多組條件，不會被執行

var score = 65
if (score <= 70 && score >= 60) {
  console.log('pass')
}
// result = pass
// 多組條件必須用&&(and) 或 ||(or)連接起來


var number = 10
if (number % 5 === 0) {
  console.log('是5的倍數')
} else {
  console.log('不是')
}
//
var number = 10
if (number % 5) {
  console.log('不是')
} else {
  console.log('是5的倍數')
}
//

var number = 10
if 	(!(number % 5)) {
  console.log('是5的倍數')
} else {
  console.log('不是')
}
/*
(number % 5) => 0
0 經過 not 變成 1
!(0) => 1 
所以會 result = 是5的倍數
比較少用，可讀性比較差
*/
