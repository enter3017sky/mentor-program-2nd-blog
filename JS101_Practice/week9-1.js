
// // hoisting 提升
// console.log(a)
// // console.log(b)
// var a = 1
// // let b = 2

// function test() {
//     console.log()
// }

// closure 閉包
/*
不想被外部存取到這個變數

*/ 
// function test() {
//     var a = 10
//     console.log(a)
// }
// console.log(a)
// test()

// 值會變修改
// var count = 0;
// function addCount() {
//     count++
//     return count
// }
// console.log(addCount())
// count = 10
// console.log(addCount())


// // 值會被修改
// function createCounter() {
//     var count = 0;
//     function addCount() {
//         count++
//         return count
//     }
//     return addCount
// }

// // counter 等於執行完 createCounter() 的結果
// var counter1 = createCounter();
// var counter2 = createCounter();

// counter1()
// counter1()
// counter1()
// counter1()

// console.log(counter1()) //=>4
// console.log(counter2()) //=>1
// console.log(counter1 === counter2)
// // console.log(counter())





// function arr() {
//     return [1, 2, 3]
// }
// var a = arr()
// var b = arr()

// console.log( a === b)
// // false 指向的記憶體位置不一樣

// var arr1 = [1, 2, 3]
// function arr() {
//     return arr1
// }
// var a = arr()
// var b = arr()

// console.log( a === b)
// // true 指向的記憶體位置一樣




// class Person {
//     setName(name) {
//         this.name = name
//     }
// }

// function Person(name) {
//     this.name = name
//     this.getName = function () {
//         return this.name
//     } 
// }

// var nick = new Person('nick')
// var peter = new Person('peter')

// console.log(nick.name, peter.name)



// // prototype chain 原型鏈

// function Person(name) {
//     this.name = name
// }

// Person.prototype.getName = function() {
//     return this.name
// }

// // new
// var nick = new Person('nick')
// var peter = new Person('peter')

// // implementation  new在做的事情像以下
// // var obj = {
// //     name: 'nick'
// // }
// // obj.__proto__ = 

// // 1. nick 找不到，就去 nick.__proto__(Person.prototype)
// // 2. 如果還是找不到，就去 nick .__proto__.__proto__(Person.prototype.__proto__)

// console.log(nick.getName)
// console.log(nick.getName())
// console.log(nick.__proto__)
// console.log(nick.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)

// // 找到底了 null
// console.log(Object.prototype.__proto__) 


// 查找順序
// 1. nick
// 2. nick.__proto__ ( = Person.prototype)
// 2. nick.__proto__.__proto__ ( = Person.prototype.__proto__) ( = Object.prototype.__proto__)
// 2. nick.__proto__.__proto__.__proto__ 
// ( = Person.prototype.__proto__.__proto__) =
// ( = Object.prototype.__proto__.__proto__)



// document.querySelector('.btn').addEventListener('click', function () {
//     this //這個 this 是.btn
// })


/* 
    stack => 資料結構

    堆疊、棧
*/

// // call stack
// function a() {
//     a()
// }
// a()


// console.log('top - b = '+ b)
// var b = 2;
// function hello(e) {
//     var c = 10;
//     var d = 15;
//     b = 3;
//     function innerFunction() {
//         var f = 5;
//         c = 20;
//         b = 30
//         aaa = 10
//         console.log(c);
//     }
//     innerFunction();
//     innerFunction();
//     console.log(c);
// }
// console.log('b= ' + b)
// hello(10)

/*


innerFunction: {
    VO: {
        b: 3,
        hello: 0x11
    },
    scopeChain: [innerFunction, helloEC, globalEC.VO]
    this: ...
}


helloEC: {
    VO :{
        arguments: {
            length: 1,
            e: 10
        },
        c: 10,
        d: 15,
        innerFunction: 0x22
    },
    scopeChain: [helloEC, globalEC.VO],
    this: ...
}

globalEC: {
    VO: {
        b: 3,
        hello: 0x11
    },
    scopeChain: [globalEC.VO]
    this: ...
}



1. global EC => 編譯
2. global EC => 執行
3. hello EC => 編譯
4. hello EC => 執行
5. innerFunction =>




*/




function Counter() {
    var count = 0;
    function addCounter() {
        count++
        return count
    }
    return addCounter
}

var counter1 = Counter()
var k = counter1()
k = counter1()

console.log(k)