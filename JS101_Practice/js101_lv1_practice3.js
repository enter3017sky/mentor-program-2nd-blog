/*
js101_lv1_練習三：寫一個能夠印出 n 個 * 的函式 201809070117
寫一個函式 star，接收一個參數 n，並印出 n 個 *
（禁止使用內建函式 repeat）

star(1) 預期輸出：
*
star(5) 預期輸出：
*****
star(10) 預期輸出：
**********

*/

// forloop 正解
// function star (n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//   }
//   // return result
//   console.log(result)
// }
// console.log(star(3))
// star(5)

// while loop
function star (n) {
  var result = ''
  var i = 0
  while (i < n) {
    result += '*'
    i++
  }
  // console.log(result)
  return result
}
// star(10)
console.log(star(5))

// *號 單顆 一排
// function star1(n){
// 	result = '*'
// 	for (var i = 1; i <= n; i++){
// 		console.log(result)
// 	}
// }
// star1(3)
/*
result =>
*
*
*

*/

// function star(n){
// 	var result = ''
// 	for (var i = 1; i <= n; i++){
// 		result += '*'
// 		console.log(result)
// 	}
// }
// star(3)
// star(5)
// star(10)

/*

result =
*
**
***

*/

// output = ''
// 產生一個星星
// output 加上一個星星
// if (還沒五個星星)
// 	goto line 51
// }

// function star(n){
// 	var result = ''
// 	for (i = 1; i <= n; i++){
// 		result += '*'
// 	}
// }
// console.log(star(3))
