
// // let myName = "PJCHENder";
// // let myCountry = "Taiwan";

// // tag `<p> My name is ${myName} and my coutry is ${myCountry}</p>`;
// // // tag(["<p> My name is ", " and my coutry is ", "</p>"], "PJCHENder", "Taiwan")  // 等同於上面這一段

// // function tag(template){
// //   console.log(template);
// //   console.log(arguments);
// // }


// var obj = {
//     a:1,
//     b:2,
//     c:3
// }

// var obj2 = {
//     // ...obj 展開
//     ...obj,
//     d:4,
//     e:5
// }



// var {a, b, ...rest} = obj2
// // a, b 已經配對走了 解構
// console.log(rest)
// //反向展開 rest => { c: 3, d: 4, e: 5 }


// // 解構 Desttructuring
// // ... 展開運算子 Spread Operator  
// // ...rest 反向展開 Rest Parameters


// Default Parameters 預設值
// 幫 str 設定 'hi', times 設定 3 為預設值
// 直接呼叫function 就不會報錯
function repeat(str = 'hi' , times = 3) {
    return str.repeat(times)
}
console.log(repeat())


const obj = {
    a: 'one two three'
}
// 搭配解構使用 由於沒有 b , b 就會是預設的 hello
const {a = 123, b = 'hello'} = obj
console.log(a, b)
// result => one two three hello



// // Arrow Function 

// function test(n) {
//     return n
// }

// const test = function(n) {
//     return n
// }

// const test = (n) => {
//     return n
// }
// // 只有一個參數的話，括號就可以省略
// const test = n => {
//     return n
// }



var arr = [1, 2, 3, 4, 5]
console.log(
    arr.filter(function(value) {
        return value > 1
    })
    .map(function(value) {
        return value * 2
    })
)

// function 去掉，右邊加上 =>
console.log(
    arr.filter((value) => {
        return value > 1
    })
    .map((value) => {
        return value * 2
    })
)

// 參數只有一個 括號也去掉
console.log(
    arr.filter(value => {
        return value > 1
    })
    .map(value => {
        return value * 2
    })
)

// 做一件事而已,{ return } 也去掉
console.log(
    arr
    .filter(value => value > 1)
    .map(value => value * 2)
)



// ES5 exprsts import
// utils.js exports 給 index.js
function add(a, b) {
    return a + b
}
module.exports = add

// index.js
var add = require('./utils')
console.log(add(3 ,5))


// ES6 exprsts import
export function add(a, b) {
    return a + b
}
export const PI = 3.14


import { add, PI } from "./utils";
console.log(add(3, 5), PI)


// ES6 exprsts import
// default 某個 function
export default function add(a, b) {
    return a + b
}
export const PI = 3.14

// {]可以省略
import add from "./utils";
console.log(add(3, 5), PI)

// PI 也要執行的話
import add, {PI} from "./utils";
console.log(add(3, 5), PI)

// 也可以這樣表示
import {default as add, PI} from "./utils";
console.log(add(3, 5), PI)

// 以下兩句相同
import {default as add} from "./utils";
import add from "./utils";




// export 別種方式
function add(a, b) {
    return a + b
}
const PI = 3.14

export {
    // 改名
    add as addFunction,
    PI
}
            // 改名
import { addFunction as a, PI } from "./utils";
console.log(a(3, 5), PI)

import * as utils from "./utils";
console.log(utils.a(3, 5), utils.PI)

