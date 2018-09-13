/*
請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串

makeStars(1) 正確回傳值：*

makeStars(2) 正確回傳值：*\n**

makeStars(5) 正確回傳值：*\n**\n***\n****\n*****

*/

// function makeStars (n) {
//   var stars = '*'
//   var result = ''
//   for (var i = 0; i < n; i++) {
//     stars += '*'
//     // return stars
//     if(i >= 1){
//       stars += result
//       // console.log(stars += result)
//     }
//   }
// }
// console.log(makeStars(5))
// // makeStars(5)



// function forloop () {
//   for (var i = 1; i <= 9; i++) {
//     console.log(i)
//     return (i)
//   }
// }
// console.log(forloop())
// // forloop()


/*    練習一：好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。

stars(1) 預期輸出：
*

stars(3) 預期輸出：
*
**
***
 */

// 這樣寫不確定對不對，但結果是對的
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
// function Star (n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//   }
//   console.log(result)
// }

// function stars (n) {
//   for (var i = 1; i <= n; i++) {
//     printStar(i) //印出 i 顆星
//   }
// }
// stars(5)


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



//Array的解法
function star(i){
  var result = ''
  for(var j = 1; j <= i; i++){
    result += '*'
  }
  return result
}
function makeStars(n){
  var arr = []
  for (var i = 1; i <= n; i++){
    arr.push(star(i))
  }
  return arr.join('\n')
}
console.log(makeStars(5))


// function star(i){
//   var result = ''
//   for(var j = 1; j <= i; i++){
//     result += '*'
//   }
//   return result
// }
// function makeStarsArr(n){
//   return Array(n).fill(0).map(function(value, index) {
//     return star(index + 1)
//   }).join('\n')
// }
// console.log(makeStarsArr(5))

/*
Array(n):可以產生n個元素，因為語法的關係，map不能直接套用，先用.fill()填一個值，隨便一個值都可以。
value: .fill(0) = 0
index: 

*/