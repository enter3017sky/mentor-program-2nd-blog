/*    練習一：好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

stars(1) 預期輸出：
*

stars(3) 預期輸出：
*
**
***
 */

// // 這樣寫不確定對不對，但結果是對的
// function stars (n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//     console.log(result)
//   }
// }
// stars(5)

// console.log(star(5))
// 以上結果的最後會出現 undefined ？？


//老師講解的版本，結合 lv1-4 的 funciotn 來解這題
function printStar (n) {
  var result = ''
  for (var i = 1; i <= n; i++) {
    result += '*'
  }
  console.log(result)
}

function stars (n) {
  for (var i = 1; i <= n; i++) {
    printStar(i) //印出 i 顆星
  }
}
stars(5)


//老師講解的版本，把 lv1-4 的 funciotn ，放入stars，變成雙重迴圈，雙重迴圈：內圈會先執行完，才會換外圈。

// function stars (n) {
//   for (var i = 1; i <= n; i++) {
//     var result = ''
//     for (var j = 1; j <= i; j++) {
//       result += '*'
//     }
//     console.log(result)
//   }
// }
// stars(5)
/*
i = 1, j = 1

i = 2, j = 1
i = 2, j = 2

i = 3, j = 1
i = 3, j = 2
i = 3, j = 3

i = 4, j = 1
i = 4, j = 2
i = 4, j = 3
i = 4, j = 4

i = 5, j = 1 ~ 5

i = 6 ，跳出

*/


