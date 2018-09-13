/*
js101_lv1練習四 lv2練習一：寫一個能回傳 n 個 * 的函式 201809070209
請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。
star(1) 會回傳 *
star(5) 會回傳 *****
所以 console.log(star(5)) 的預期輸出是：
*****
*/

// Answer
function star (n) {
  var result = ''
  for (var i = 1; i <= n; i++) {
    result += '*'
  }
  return result
}
console.log(star(3))
console.log(star(5))
console.log(star(7))


function stars (n) {
  var result = ''
  for (var i = 1; i <= n; i++) {
    result += '*'
  }
  console.log(result)
}
stars(3)
stars(5)
stars(7)

// // 錯誤
// function star (n) {
//   for (i = 1; i <= 1; i++) {
//     var result = ''
//     for (j = 1; j <= n; j++) {
//       result += '*'
//       // console.log(result)
//     }
//     return result
//   }
// }
// // star(3)
// // star(1)
// console.log(star(5))
