// // console.log(a)

// function test(){
//   if(10>5){
//     let a =10
//   }
//   console.log(a)
// }

// var add = (a, b) => a + b


// function add(a, b) {
//   return a + b
// }


// var arr = [1, 2, 3].filter(function(n) {
//   return n >= 2
// }).map(function(n){
//   return n * 2
// })

// trmpplate string 

// var arr = [1, 2, 3].filter(n => n >= 2)
// .map(n => n * 2 )

// console.log(arr)


// const displayName = () => 'nick'

// function displayName() {
//   return 'nick'
// }

// var str = `hello ${displayName()},how are you`

// var str = `

// hello ${displayName()}

// ,how are you`

// 

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
//   d: {
//     hello:'yoyoyo'
//   }
// }

// var {a, b, c} = obj

// var {d: { hello } } = obj

// // obj.a  obj.b  obj.c 的意思
// // console.log(a, b)

// console.log(hello)

// //array也可以，把東西解構出來
// const arr = [0, 1, 2, 3]
// var [first ,second ,third] = arr 
// console.log(third)

// //展開運算值
// const arr = [1, 2, 3]
// const arr2 = [0, ...arr, 4, 5, 6]
// //4, 5, 6, 後面可以繼續接
// console.log(arr2)
// //result => [ 0, 1, 2, 3 ]


// //展開運算值
// const arr = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arrConcat = [...arr, ...arr2]
// console.log(arrConcat)

// spread operator
// //淺拷貝 shallowCopy
// const obj = {
//   a: 1,
//   b: 2,
//   student: {
//     name: 'hello'
//   }
// }
// const obj2 = {
//   ...obj //只有第一層的「值」
// }

// //可以想成上面那樣
// // const obj2 = { 
// //   a: obj.a,
// //   b: obj.b,
// //   student: obj.student
// // }

// obj2.student.name = 'obj2'
// console.log(obj.student.name)


// // rest parameters
// // 把剩下的東西放進去這個變數
// const arr = [1, 2, 3]
// const [first, ...numbers] = arr
// console.log(numbers)

// // object也可以
// const {a, ...rest} = obj



// Babel is a JavaScript compiler
//新語法轉成舊愈法，用法很多



// import, export

import {add, PI} from './utils'

// * 在程式裡面 通常是全部的意思
import * as utils from './utils'



export function add(a, b) {
  return a + b
}

export function (add(a, b), PI) {
  return a + b
}

//也可以這樣 export ，但這不是Objext
export {
  add, PI
  add as add2
  // as 改名 別名的意思
}

// default 只能有一個
export default function (add(a, b), PI) {
  return a + b
}

console.log(utils.default(1, 2))

