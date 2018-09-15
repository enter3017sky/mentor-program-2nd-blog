/*
js101_lv1練習四 lv2練習一：寫一個能回傳 n 個 * 的函式 201809070209
請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。
star(1) 會回傳 *
star(5) 會回傳 *****
所以 console.log(star(5)) 的預期輸出是：
*****
*/

// // Answer
// function star (n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//   }
//   return result
// }
// console.log(star(3))
// console.log(star(5))
// console.log(star(7))


// function stars (n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//   }
//   console.log(result)
// }
// stars(3)
// stars(5)
// stars(7)

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

// function test(){
//   for(var i=1; i<=10; i++) {
//     return i
//   }
//  }
 
//  console.log(test())


//  function test(){
//   return 123
//   for(var i=1; i<=10; i++) {
//     return i
//   }
//  }
 
//  console.log(test())


//  function test(){
//   for(var i=1; i<=10; i++) {
//     if (i % 3 === 0) {
//       return i
//     }
//   }
//  }
 
//  console.log(test())


//  function test(){
//   for(var i=1; i<=10; i++) {
//     if (i > 5 && i % 2 === 0) {
//       return i
//     }
//   }
//  }
 
//  console.log(test())



function star(n) {
	var answer = ''
	for (var i=1; i<=n; i++) {
	answer += '*'
  }
  return answer 
}
console.log(star(3))
// star(3)帶入function star(n)裡面，
// => var answer = ''

// => 跑for loop 
// => i=1; i<=3(true) => answer = '' + *
// => i++ => i=2; i<=3(true) => answer = *+*
// => i++ => i=3; i<=3(true) => answer = **+*

// => 回傳 answer, answer = *** 