/* js101_lv1_練習二：寫一個能夠印出 1~n 的函式 201809070002

print(1) 預期輸出：

1

print(3) 預期輸出：
1
2
3

*/

// // answer
// function oneToN (n) {
//   for (var i = 1; i <= n; i++) {
//     console.log(i)
//   }
// }
// oneToN(9)
// oneToN(3)
// oneToN(1)


function oneToN2(n){
  var i = 1
  while(i <= n){
    console.log(i)
    i++
  }
}
oneToN2(9)
oneToN2(3)