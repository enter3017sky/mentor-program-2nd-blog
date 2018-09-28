/**
宣告函式 function 的不同種方式

引數（Argument）與參數（Parameter）
 */

// function hello() {
//   console.log('hello')
// }


// var hello = function() {
//   console.log('hello')
// }
// hello()



// // print裡面打什麼就傳什麼出來
// function print(anything) {
//   console.log(anything)
// }
// print('testtttttt12333333')


// // 假設現在另外有一個function hello()
// function print(anything) {
//   console.log(anything)
// }
// function hello() {
//   console.log('hello') // 不會執行
// }
// // 把 function 當作一個參數傳進去
// print(hello)



// // 把 hello 這個 function 傳進去
// // anything 其實就是 hello
// function print(anything) {
//   anything() 
// }
// function hello() {
//   console.log('hello')
// }
// print(hello)




// function print(anything) {
//   console.log(anything)
// }
// function hello() {
//   console.log('hello')
// }
// print(hello)





// function print(anything) {
//   anything()
// }
// function hello() {
//   console.log('hello')
// }
// print(hello)






//脫褲子放屁的範例
function transform(x, transformFunction) {
  return transformFunction(x)
}
function test(x) {
  return x * 2
}
console.log(
  transform(10, test)
)

/*

transformFunction = function(x) {
  return x * 4
  }

*/
function transform(arr, transformFunction) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    result.push(transformFunction(arr[i]))
  }
  return result
}

function double(x) {
 return x * 2
}

// 也可以多加一個 function
// function triple(x) {
//  return x * 3
// }

// console.log(
//  transform([1, 2, 3], double)
// )
// transform([1, 2, 3], double) => [ 2, 4, 6 ]

// console.log(
//  transform([1, 2, 3], triple)
// )
// transform([1, 2, 3], triple) => [ 3, 6, 9 ]

/* 匿名函式 Anonymous function
也可以直接放沒有名字的 function
*/
console.log(
  transform([1, 2, 3], function (x) {
    return x * 4 // 好處是可以直接在這邊改值
  })
)
// result => [ 4, 8, 12 ]

/* javascript 很重要的部分
你可以傳 function 進去，

js101
https://www.lidemy.com/courses/387030/lectures/5903131
*/

/*
  引數（Argument）與參數（Parameter）

引數 argument，在用的時候，call function的時候叫引數，JavaScript特有的，知道就好了
參數 parameter，他在function裡面長什麼樣子

引數 (Argument) 是用於呼叫函式，是一個物件
參數 (Parameter) 是方法簽章 (方法的宣告)。

*/

// add(a, b)裡面的a, b是 參數
function add (a, b) {
  console.log(arguments)// 在function裡面log這個，可以把function的引數log出來
  // result = { '0': 3, '1': 5 }
  console.log(arguments[0])// 表示打印 index[0]的引數為多少
  console.log(Array.isArray(arguments))// 判斷是否為陣列:不是陣列
  return a + b
}
add(3, 5) // 引數

// 以下範例是求引數和
function add2 () {
  return arguments[0] + arguments[1]
}
console.log(add2(2, 6))
result = 8

var a = {
  b: 123,
  0: 456
}

a.b // or
a['b']

a[0] // Object
a['0']

console.log(a[0])

console.log(a['0'])
