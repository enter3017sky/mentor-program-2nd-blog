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
function star (n) {
  var result = ''
  for (var i = 1; i <= n; i++) {
    result += '*'
  }
  console.log(result)
  // return result
}
star(3)
star(5)
star(7)

// // while loop
// function star (n) {
//   var result = ''
//   var i = 0
//   while (i < n) {
//     result += '*'
//     i++
//   }
//   // console.log(result)
//   return result
// }
// console.log(star(5))
// star(5)
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
// if (還沒到五個星星)
// 	goto line 3
// }
// return output


// //改變一下內容，就變成repeat函式了
// function repeat(str, n){
// 	var result = ''
// 	for (i = 1; i <= n; i++){
// 		result += str //執行n次
//   }
//   console.log(result)
// }
// repeat('!', 7)


