/*
請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串。
makeStars(1) 正確回傳值：*
makeStars(2) 正確回傳值：*\n**
makeStars(5) 正確回傳值：*\n**\n***\n****\n*****
*/

// function stars(i){
//   result = ''
//   for(var j = 1; j <= i; j++){
//     result += '*'
//   }
//   return result
// }

// function makeStars (n) {
//   var result = '' //首先要有一個暫存的變數存回傳的東西
//   for (var i = 1; i <= n; i++) {
//     result += stars(i) //回傳 i 個星星
//     if(i !== n){ // 如果 i 不等於 n, 加空行 \n
//       result += '\n'
//     }
//   }
//   return result
// }
// console.log(makeStars(5))


//Array的解法
// function star(i){
//   var result = ''
//   for(var j = 1; j <= i; j++){
//     result += '*'
//   }
//   return result
// }

// function makeStars(n){
//   var arr = []
//   for (var i = 1; i <= n; i++){
//     arr.push(star(i))
//   }
//   return arr.join('\n')
// }
// console.log(makeStars(5))


function star(i){
  var result = ''
  for(var j = 1; j <= i; j++){
    result += '*'
  }
  return result
}
function makeStarsArr(n){
  return Array(n).fill(0).map(function(value, index) {
    return star(index + 1)
  }).join('\n')
}
console.log(makeStarsArr(5))

/*
Array(n):可以產生n個元素，因為語法的關係，map不能直接套用，先用.fill()填一個值，隨便一個值都可以。
value: .fill(0) = 0
index: 

*/