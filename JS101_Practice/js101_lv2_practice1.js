/*    練習一：好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

stars(1) 預期輸出：
*

stars(3) 預期輸出：
*
**
***
 */

function star (n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result += '*'
    console.log(result)
  }
}
star(5)

// console.log(star(5))
// 以上結果的最後會出現 undefined ？？
