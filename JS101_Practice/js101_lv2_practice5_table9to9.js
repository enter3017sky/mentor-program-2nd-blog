/*
練習五：九九乘法表
請寫出一個 function table9to9，並列出 1*1 ~ 9*9。

table9to9() 預期輸出：

1*1 = 1
1*2 = 2
1*3 = 3
...
*/

// //我的解法
function table9to9 () {
  for (var i = 1; i <= 9; i++) { // i=1的時候印出 j=1~9，以此類推
    for (var j = 1; j <= 9; j++) {
      console.log(i + '*' + j + '=' + i * j)
    }
    console.log(' ')
  }
}
table9to9()

// 老師的解法，延續上一題的table

// function table (n) {
//   for (var i = 1; i <= 9; i++) {
//     console.log(n + '*' + i + ' = ' + n * i)
//   }
//   console.log(' ')
// }
// // for (var i = 1; i < 9; i++) {
// //   table(i) // 呼叫 table() 這個 function，
// // } 目的印出i*1~i*9

// function table9to9 () {
//   for (var i = 1; i < 9; i++) {
//     table(i)
//   }
// }
// table9to9()

// 也可以 n to n 的乘法表
// function tablenton (n) {
//   for (var i = 1; i <= n; i++) { // i=1的時候印出 j=1~9，以此類推
//     for (var j = 1; j <= n; j++) {
//       console.log(i + '*' + j + '=' + i * j)
//     }
//     console.log(' ')
//   }
// }
// tablenton(9)
