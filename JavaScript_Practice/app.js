// Udemy JS 奇怪的地方 筆記

// console.log(this)

// function a() {
//     console.log(this)
//     this.newVarible = 'Hello World'
// }

// var b = function() {
//     console.log(this)
// }

// a()
// console.log(newVarible)
// b()


/** 以上三種範例的 this 都是指向全域物件(一般函式裡面的 this 都是指向全域物件) */


// var c = {
//     name: 'This c Object',
//     log: function() {
//         console.log(this)

//         let setname = function(newname) {
//             // 這裡的 this 指向 global 全域物件
//             this.name = newname
//             console.log(this)
//         }
//         setname('Update agian!')
//     }
// }
// c.log()

// var c = {
//     name: 'This c Object',
//     log: function() {
//         var self = this // 宣告一個變數 self (by reference 的方式) 跟 this 指向一樣的記憶體位址，就不用思考 this 指向的位址了，子函式裡面的 this 也會指向這個所在的物件本身
//         console.log(self)

//         let setname = function(newname) {
//             console.log(self)
//             self.name = newname
//         }
//         // 這裡的 this 指向 global 全域物件
//         setname('Update agian!')
//         console.log(self)
//     }
// }
// c.log()



/** 重載函式 */
// function greet(firstname, lastname, language) {
//     language = language || 'tw';
//     if(language === 'en') {
//         console.log('Hello ' + firstname + ' ' + lastname)
//     }
//     if(language === 'tw') {
//         console.log('你好！ ' + lastname + ' ' + firstname)
//     }
// }
// greet('John', 'Doe', 'en')
// greet('阿越', '黄', 'tw')

// // 少打一些參數
// function greetEnglish(firstname, lastname) {
//     greet(firstname, lastname, 'en')
// }
// function greetTaiwan(firstname, lastname) {
//     greet(firstname, lastname, 'tw')
// }
// greetEnglish('John', 'Doe',)
// greetTaiwan('阿越', '黄')



// /** 函式陳述式 Function Statement */
// function greet(name) {
//     console.log('Hi ' + name)
// }
// greet('John')

// /** 函式表達式 using a function expression */
// var greetFunc = function(name) {
//     console.log('Hello ' + name)
// }
// greetFunc('John')

/** 立即呼叫的函數表達式 using an Immediately Invoked Function Expression(IIFE) */
// var greeting = function(name) {
//     return ('Hello ' + name)
// }('John')
// console.log(greeting)


// var greeting = function(name) {
//     return ('Hello ' + name)
// }
// console.log(greeting)
// [Function: greeting]


/** 這樣會出錯，因為 greeting 就立即呼叫了這個函式，然後 return 了字串回來，所以 greeting`()` 又加了括號(調用)一次，就會出錯 */
// var greeting = function(name) {
//     return 'Hello ' + name;
// }('John')
// console.log(greeting())
// Uncaught TypeError: greeting is not a function


/** 標準的 IIFE
 * 
 * 一個匿名函式不能像函式陳述式一樣存在，語法解析器會認為這是函式陳述式，然後出錯，用括號包覆起來就可以了
 */

// 3;
// 'this is a string';
// (function(name) {
//     console.log('greeting' + ' ' + name)
// })

// console.log(greeting)

// /** 括號內、括號外呼叫他都沒差別，選一個保持一致就行 */
// var firstname = 'John';
// (function(name) {
//     var greeting = 'Inside IIFE: Hello '
//     console.log(greeting + ' ' + name)
// }(firstname)) // IIFE

// console.log(greeting)


// (function(name) {
//     var greeting = 'Inside IIFE: Hello '
//     console.log(greeting + ' ' + name)
// })(firstname)


// var greeting = 'Hello'
// console.log(greeting)
// /** 把這個 IIFE 加在全域環境上 */
// var firstname = 'John';
// (function(globel, name) {
//     var greeting = 'Inside IIFE: Hello '
//     globel.greeting = 'Hola'
//     console.log(greeting + ' ' + name)
// }(window , firstname)) // IIFE
// console.log(greeting)

// function greet(whattosay) {
//     return function(name) {
//         console.log(whattosay + ' ' + name)
//     }
// }
// // greet('Hi')('Tony')

// var sayhi = greet('Hi')
// sayhi('Tony')

/** 閉包範例
 * 如果 forloop 裡面是用 var 的話，輸出的結果都是 3
 * 用 let 才會有 012 
 */
// function buildFunctions() {
//     var arr = []
//     for(var i = 0; i < 3 ; i++) {
//         // let j = i
//         arr.push(function() {
//             console.log(i)
//         })
//     }
//     return arr
// }
// var fs = buildFunctions();
// console.log(fs)
// console.log(fs[0]) // 呼叫 func 的時候，裡面的 consol.log(i) 才會執行
// fs[0]()
// fs[1]()
// fs[2]()

// console.log(fs[0])


// function buildFunctions2() {
//     i = 3
//     function number() {
//         i++
//         console.log(i)
//     }
//     return number
// }
// var num = buildFunctions2()
// console.log(num)
// num()
// num()

// function buildFunctions() {
//     var arr =[]
//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             (function(j) {
//                 return function() {
//                     console.log(j)
//                 }
//             }(i))
//         )
//     }
//     return arr
// }

// var fs = buildFunctions()
// fs[0]()
// fs[1]()
// fs[2]()



/** 
 * 
 *  閉包的實際應用：假如我們希望這三個按鈕被點擊的時候可以回傳按鈕上面的文字到 console 上
    <button id="first">First</button>
    <button id="second">Second</button>
    <button id="third">Third</button>
 */

// 這時候會期望因點選的不同而得到不同的結果，但是實際執行後，發現結果都是回傳 Third


// document.addEventListener('DOMContentLoaded', function() {

//     var button = document.getElementsByTagName('button')
//     for(let i = 0; i < button.length; i++) {
//         var buttonName = button[i].innerHTML
//         button[i].addEventListener('click', function() {
//             console.log(buttonName) 
//         })
//     }
//     // console.log(buttonName) buttonName 暴露在 global environment 的環境
// })

// 這時候可以用閉包，將變數的名稱保存在閉包裡

// 建立一個閉包把資料存在這個 function 當中
// function saveSuttonName(buttonName) {
//     var buttonName = buttonName
//     return function() {
//         console.log(buttonName)
//     }
// }
// document.addEventListener('DOMContentLoaded', function() {
//     var button = document.getElementsByTagName('button')
//     for(let i = 0; i < button.length; i++) {
//         var buttonName = button[i].innerHTML
//         button[i].addEventListener('click', saveSuttonName(buttonName))
//     }
// })


// 或者用 let 將變數的作用域侷限在 {} 之中
// document.addEventListener('DOMContentLoaded', function() {
//     var button = document.getElementsByTagName('button')
//     for(let i = 0; i < button.length; i++) {
//         let buttonName = button[i].innerHTML
//         button[i].addEventListener('click', function() {
//             console.log(buttonName)
//         })
//     }
// })







// var square = function(x) {
//     return x * x;
// };
// console.log(12 + square(7 + 5) + square(square(2)))





// function Dog(name) {
//     this.name = name
//     this.getName = function() {
//         return this.name
//     }
//     this.sayHello = function() {
//         console.log('Dog', this.name)
//     }
// }

// var badDog = Dog('abc')

// console.log(name) // => abc
// console.log(badDog) // => undefined
// console.log(badDog.name) // => Uncaught TypeError: Cannot read property 'name' of undefined at xxx.js:xxx


// var Person = function() {

// }


var arr = [];

arr[arr.length] = 1

arr[arr.length] = 2

arr.push(3)

arr.push('hey')

console.log(arr[3])


var Stack = function() {
    if(!(this instanceof Stack)){
        return new Stack(name);
    }
    var item = [];
    // push 添加元素在堆疊的頂部
    Stack.prototype.push = function(element) {
        if(element !== undefined) {
            item[item.length] = element;
        }
    }
    // pop 移除堆疊的頂部一個元素
    Stack.prototype.pop = function() {
        if(item.length === 0) {
            return 'empty!';
        }
        return item.splice(item.length-1, 1)
    }
    // peek 返回堆疊頂部的元素
    Stack.prototype.peek = function() {
        return item[item.length-1];
    }
    // 返回堆疊裡元素的數量
    Stack.prototype.size = function() {
        return item.length;
    }
    // 確認堆疊是不是空的
    Stack.prototype.isEmpty = function() {
        return item.length === 0;
    }
    // 印出堆疊裡的元素
    Stack.prototype.print = function() {
        return console.log(item.toString());
    }
    // 清空堆疊
    Stack.prototype.clear = function() {
        item = [];
    }
}


var Queue = function() {
    if(!(this instanceof Queue)){
        return new Queue(name);
    }
    var item = [];
    this.push = function(element) {  // enqueue 入隊：向佇列的尾部添加一個元素
        if(element !== undefined) {
            item[item.length] = element;
        }
    }
    this.pop = function() {    // dequeue 出隊： 移除堆疊的第一個元素
        // return item.splice(0, 1)
        return item.shift()
    }
    this.peek = function() {    // peek 返回堆疊頂部的元素
        return item[item.length-1];
    }
    this.size = function() {    // 返回堆疊裡元素的數量
        return item.length
    }
    this.isEmpty = function() {    // 確認堆疊是不是空的
        return item.length === 0;
    }
    this.print = function() {    // 印出堆疊裡的元素
        return console.log(item)
        // return console.log(item.toString())
    }
    this.clear = function() {    // 清空堆疊
        item = []
    }
}









/** 迴圈 陣列 練習 */
// function pushArr(n) {
//     var arr =[]
//     for(var i = 0; i < n; i++) {
//         arr[i] = arr.push(i)
//     }
//     return arr
// }
// console.log(pushArr(10))

// function pushArr2(n) {
//     var arr =[]
//     for(var i = 0; i < n; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(pushArr2(10))

// function pushArr3(n) {
//     var arr = [];
//     var i = 0
//     while(i < n) {
//         arr[i] = arr.push(i)
//         i++
//     }
//     return arr
// }
// console.log(pushArr3(10))


// function pushArr4(n) {
//     var arr = [];
//     var i = 0
//     while(i < n) {
//         arr.push(i)
//         i++
//     }
//     return arr
// }
// console.log(pushArr4(10))

// function pushArr5(n) {
//     var arr = [];
//     var i = 0
//     do {
//         arr[i] = arr.push(i)
//         i++
//     }
//     while(i < n)
//     return arr
// }
// console.log(pushArr5(10))

// function pushArr6(n) {
//     var arr = [];
//     var i = 0
//     do {
//         arr.push(i)
//         i++
//     }
//     while(i < n)
//     return arr
// }
// console.log(pushArr6(10))




// var name = 'Jack'
// var age = 25

// var person = {
//     name, age
// }

// console.log(person)
// var person = null

// console.log(person)

// delete person
// console.log(person)




// function double(n) {
//     return n * 2
// }
// console.log(double(10))

// var double = null
// console.log(double) // null
// console.log(typeof double) // object






// /** 以下為 'React 開發實務' 的內容 */

// // ES5
// var double = function(n) {
//     return n * 2
// }
// console.log(double(10))

// // 只有一個
// // 參數可以省略括號，只需要回傳一條陳述句或運算式的結果時，可省略大括號
// var triple = n => n * 3
// console.log(triple(10))

// // ES6
// var quadruple = (n) => n * 4
// console.log(quadruple(10))


// // 模組匯出語法
// export var foo = 'foo'
// export var bar = 'bar'
// export function greet() { console.log('Hello') }

// // 設定預設的匯出，引入模組時，若沒有透過名稱的引入，則會得到模組的預設匯出
// // ES5
// module.export = foo;

// // ES6
// export default foo

// // 模組引入語法
// // ES5
// var fs = require('fs');

// // ES6
// import fs from 'fs'

// /** 如果我們想要引入一個模組單獨匯出的變數、方法或類別，而不是要引入預設的匯出時，我們必須要知道該模組匯出的變數、方法或類別的名稱，通常這些資訊會在模組的文件中提到，在知道名稱後，我們將 import 後加入一個大括號，並將大括號中加入我們所要引入的變數、方法或類別的名稱，這樣我們就可以利用這些名稱來呼叫我們所引入的變數、方法或類別 */

// // ES5
// var fs = require('fs');
// var readFile = fs.readFile;

// // ES6
// import { readFile } from 'fs'
