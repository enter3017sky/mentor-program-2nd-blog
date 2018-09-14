// function testI(n){
//   result = ''
//   for(let i = 1; i <= n; i++) {
//     console.log(i) //上半部印出 1~5
//   }
//   for(let i = n-1; i > 0; i--){
//     console.log(i) //下半部印出 4~1
//   }
// }
// testI(5)







// 老師的解法 把大問題拆成小問題去解決
function star(i){
  var result = ''
  for(var j = 1; j <=i; j++){
    result += '*'
  }
  return result
}

function star(i){
  var result = ''
  for(var j = 1; j <=i; j++){
    result += '*'
  }
  return result
}
function testI(n){
  for(let i = 1; i <= n; i++) {
    console.log(star(i))
  }
  for(let i = n-1; i > 0; i--){
    console.log(star(i))
  }
}
testI(5)



// function stars(n){
//   result = ''
//   for(let i = 1; i <= n; i++) {
//     // result += '*'
//     console.log(result)
//     // return result
//   } 
//   for(let i = n-1; i > 0; i--){
//     console.log(result)
//     // return result
//   } 
// }
// console.log(stars(5))
// // stars(5)




// function testI(n){
//   for(let i = 1; i <= n; i++) {
//     var result = ''
//     for(var j = 1; j <=i; j++){
//       result += '*'
//     }
//     console.log(result)
//   }
//   for(let i = n-1; i > 0; i--){
//     var result = ''
//     for(var j = 1; j <=i; j++){
//       result += '*'
//     }
//     console.log(result)
//   }
// }
// testI(10)