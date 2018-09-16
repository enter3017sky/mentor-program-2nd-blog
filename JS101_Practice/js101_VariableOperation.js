
/* Variable operation 變數的運算
要注意的點 - 型態:如果同時有字串與數字的話。
//  a 是字串，b 也會從數字變成字串
// */

// var a = '10'

// var b = 20

// console.log(a + b)
// // result => 1020

// /* 以下有兩種方式可以把字串變成數字 */
// console.log(Number(a), b)
// // result => 10 20

// // 10 代表十進位，不傳也可以，但建議打上，打2就是二進位
// console.log(parseInt(a, 10) + b)
// // result => 30
// console.log(parseInt(a, 2) + b)
// // result => 22

// /* 要注意的點 - 浮點數誤差 */
// var a = 0.1 + 0.2

// console.log(a)
// // result => 0.30000000000000004

// // console.log(parseFloat(a))

// console.log(a == 3)
// // result => false




// ++放前面或放後面的差別
// var a = 0
// console.log(a++ && 30)
// console.log('a: ', a)
// // result 0
// // result a:  1
// console.log(a++ && 30) 
// =>//這句執行起來像這樣
// console.log(a && 30) // 先跑這樣
// a+=1 //在執行 a++ 

// console.log(++a && 30)
// console.log('a: ', a)
// // result 30
// // result a:  1
// console.log(a++ && 30) 
// // =>//這句執行起來像這樣
// a+=1 //先執行 a++ 
// console.log(a && 30) // 再跑這樣