// function nextInLine(arr, item) {
//     if(Array.isArray(arr) && arr.length === 0 ) {
//         arr.push(item)
//         return arr[0]
 
// }

// // 判斷 array 是否是空陣列

// function nextInLine(arr, item) {
//     arr.push(item)
//     removed = arr.shift()
//     return removed

// }
// //   && arr.length > 1 && item===number
//   // Test Setup
//   var testArr = [1,2,3,4,5];
// // console.log(typeof 5 == Number())
// console.log(nextInLine([], 5))
// console.log(nextInLine([], 1))
// console.log(nextInLine([2], 1))
// console.log(nextInLine([5,6,7,8,9], 1))
// // // nextInLine(testArr, 10)
// // console.log(testArr)
// // var arr = []
// // console.log(Array.isArray(arr))
// // var arr = []
// // console.log(arr[0])
// console.log(typeof testArr)
// console.log(Array.isArray())
//   // Display Code
// //   console.log("Before: " + JSON.stringify(testArr));
// //   console.log(nextInLine(testArr, 6)); // Modify this line to test
// //   console.log("After: " + JSON.stringify(testArr))


// // var arr = [];
// // if(Array.isArray(arr) && arr.length === 0){
// //     console.log('是空数组');
// //     console.log(arr.length)
// //     arr.push(5)
// //     console.log(arr)
// // }



// // Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
//   if(prop !== 'tracks' && value !== '') {
//       if(collection[id][prop]){
//         collection[id][prop].push(value)
//       } else {
//         collection[id][prop] = value
//       } 
//   } else if(value ==''){
//       delete collection[id][prop]
//   } else {
//     collection[id][prop] = value
//   }
//   return collection;
// }

// // Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"));


// closue
// function a(){
//     var i=0;
//     function b(){
//     console.log(++i);
//     }
//     return b;
// }

// var c = a();
// c();
// c();
// c();
// c();



// function factoriak(num){ 
//     if(num<=1){ 
//         return 1;
//     }else{ 
//         return num * arguments.callee(num-1);//这样无论用什么名字都能完成递归调用
//     };
// }
// console.log(factoriak(4))

// var color = "blue";
// function changeColor() {
//     if (color = "blue") {
//         color = "red";
//     } else {
//         color = "blue";
//     }
// }
// changeColor();
// console.log("现在的颜色是 " + color);



// var person = {};
// person.name = "Nicholas";
// person.age = 29;

// let id = "name"

// console.log(person.id)


// var t = "bb"; 
//  function test() { 
//      console.log('t1:', t); 
//      var t = "aa"; 
//      console.log(t); 
//  }
//  test();
//  console.log(t);




// function enter3017sky() {

// }

// var Person = function(name, birth) {
//     var _name = name;
//     var _birth = birth;

//     this.getName = function() {
//         return _name;
//     };

//     this.getBirth = function() {
//         return _birth;
//     };
// }

// Person.prototype.toString = function() {
//     return 'Person: ' + this.getName() + '' + this.getBirth();
// };

// var p = new Person('王小明', new Date(1900, 9, 2));
// console.log(p.getName())    // result=> 王小明
// console.log(p.toString())  // result=> Person: 王小明Tue Oct 02 1900 00:00:00 GMT+0800 (CST)
// console.log(p._name) // undefined



// var obj = {
//     method1: function() {},
//     method2: function() {}
//     }
// console.log('method1'in obj)
// console.log('method3'in obj)



// var Wings = Wings || {};

// Wings.Person = function(name, birth) {
//     this.name = name;
//     this.birth = birth;
// }
// Wings.Person.prototype.toString = function() {
//     return this.name + '__' + this.birth;
// }

// var p = new Wings.Person('許xx', new Date(1999, 9, 9))
// console.log(p.toString())



// var namespace = function(ns) {
//     // 以「.」分割命名空間
//     var elems = ns.split('.');
//     var parent = window;

//     // 依序新增後續的命名空間以形成階層構造
//     for (var i = 0; len = elems.length ,  i < len; i++) {
//         parent[elems[i]] = parent[elems[i]] || {};
//         parent = parent[elems[i]];
//     }
//     return parent;
// };

// // 新增 Myapp.Recipe.Samples 命名空間
// var ns = namespace('Myapp.Recipe.Samples');

//  // 定義命名空間之下的類別
// ns.MyClass = function() {};
// var c = new ns.MyClass();
// console.log(c instanceof Myapp.Recipe.Samples.MyClass)


// var s = 09

// console.log(typeof s)
// // if(s < 10) {
// //     s = '0'+s
// // }
// if(s.toString().length === 1) {
//     s = '0'+s;
// }
// console.log(s)
// console.log(typeof s)

    

    // const today = new Date();
    // const y = today.getFullYear();
    // let month = today.getMonth();
    // let day = today.getDate();
    // let h = today.getHours();
    // let m = today.getMinutes();
    // let s = today.getSeconds();

    // console.log(typeof month)





    // function pe(n) {
    //         result = []
    //     for (let i = 2; i <= n; i++) {
    //         if(n % i === 0) {
    //             result.push(i)
    //         }
    //     }
    //     return result
    // }

    // console.log(pe(220))



    // 白飯
// function pe(n) {
//     let output1 = 0
//     let output2 = 0
//     for (let i = 1; i <= n; i++) {
//         if(n % i === 0 && n != i) {
//             output1 += i;
//         }
//     }

//     // console.log('output1:', output1)
//     for (let i = 1; i <= output1; i++) {
//         if(output1 % i === 0 && output1 != i) {
//             output2 += i;
//         }
//     }
//     if (n === output2) {
//         return result = output1.toString()
//     } else if(n !== output2 && n === output1) {
//         return result = output1.toString()
//     } else {
//         return '0'
//     }
// }

// console.log(pe(220))

// console.log(pe(6))

// console.log(pe(7))


/**
neko最近迷上了洛克人。但是他的技術很差，每次玩紅白機的洛克人2都會卡在空氣人這關，不管試了多少次就是過不了。於是neko只好上網搜尋攻略，網路上能找到的所有技巧他都試過了，什麼暫停連打之類的，還是一直打不贏。

最後，neko在google上找到了一篇文章，只要把文章中的密碼解開，用這個密碼登入某網站，裡面就會出現所有武器道具全滿的密技使用方法。聰明的neko也觀察出了密碼的解法：

這篇文章包含兩個部份，前半段是n個由小寫字母組成的英文單字，後半段是一個數列A1, A2, …, Am 。將所有單字接成一個很長的字串，這個字串的第A1, A2, …, Am個字母拼成的單字就是網站的密碼。

例如文章前半為 the quick brown fox jumps over the lazy dog

數列是 30, 6, 10, 19, 30, 13

答案就是字串"thequickbrownfoxjumpsoverthelazydog"的第30, 6, 10, 19, 30, 13個字母"airman"

(註：字串index由1開始)

由於文章非常長，neko希望你能幫他寫一個簡單的程式算出他要的密碼。

輸入說明
輸入會是兩個陣列，第一個陣列包含各種英文單字，第二個陣列包含文中所提的數列，可以假設數字不會超過字串總長度。





解題思維
    壓平第一個陣列將它變成字串
    遍歷這個字串
    第二個陣列的數值 將是字串的第 index 的字母
    
    最後返回結果
 */
// function pc(An, Am) {
    
//     for (let i = 1; i <= array.length; i++) {
//         const element = array[i];
        
//     }
// }


// function createTest() {
//     var count = 0;
//     return function add() {
//         count++
//         return count
//     }
// }
// var test = createTest()
// console.log(test())
// console.log(test())



// var count = 0;
// function add() {
//     count++
//     return count
// }
// console.log('add:', add())
// console.log('add:', add())



// // 記憶體位址不同，所以不同
// function arr() {
//     return [1, 2, 3]
// }
// var a = arr()
// var b = arr()
// console.log(a === b)


// // 記憶體位址相同，所以相同
// var default_arr = [3, 2, 1]
// function arr321() {
//     return default_arr
// }
// var c = arr321()
// var d = arr321()
// console.log(c === d)



// function Person(name) {
//     this.name = name
// }

// Person.prototype.getName = function() {
//     return this.name 
// }

// Person.prototype.__proto__.getName = function() {
//     return this.name 
// }

// var nick = new Person('nick')
// var peter = new Person('peter')

// // prototype chain 原型鏈
// // nick 找不到，會去 nick.__proto__(Person.prototype)
// // 還是找不到，會去 nick.__proto__.__proto__(Person.prototype.__proto__)
// console.log(nick.getName === peter.getName)

// console.log(nick.getName === Person.prototype.getName)

// console.log(nick.__proto__ === Person.prototype)

// console.log(nick.__proto__.__proto__ === Person.prototype.__proto__)

// console.log(Person.prototype.__proto__ === Object.prototype)

// console.log(nick)
// console.log(Person)
// console.log(Person.prototype)
// console.log(Object.prototype)
// console.log(Object.prototype.__proto__)

// console.log(nick.__proto__.__proto__)



// function a() {
//     b()
//     console.log('here is a')
// }

// function b() {
//     c()
//     console.log('here is b')
// }

// function c() {
//     console.log('hey, im c')
// }
// a()


// console.log(b)
// var b = 2;
// function hello(e) {
//     var c = 10;
//     var d = 15;
//     b = 3;
//     function innerFunction() {
//         var f = 5;
//         c = 20
//         console.log(c)
//     }
//     innerFunction();
//     innerFunction();
// }
// hello(10)


// function test(a, b, c) {
//     console.log(this)
//     console.log(a, b, c)
// }
// // test() 
// // => 回傳 node.js 的大型物件

// test.call('Hello',1 ,[1, 2 ,3] ,'world')
// // .call() apply() 可以改變 this 的值，兩者基本上都一樣

// // // apply() 第一個參數是改變 this 的值，第二個參數要傳陣列，沒有第三個參數
// // test.apply('hello world', [1, 2, 3])

// // /** 輸出
// // [String: 'Hello']
// // 1 2 3
// // [String: 'world']
// // 4 5 6
// //  */



// var obj = {
//     name: 'hello world',
//     getName: function() {
//         // console.log(this.name)
//         return this.name
//     },
//     ui: {
//         name: 'ui-object',
//         test: function() {
//             // console.log(this.name)
//             return this.name
//         }
//     }
// }

// var f= obj.getName

// console.log(f())
// console.log(obj.getName())
// console.log(obj.ui.test())
// console.log(obj.ui.test.call(obj.ui))

// // { name: 'hello world',getName: [Function: getName], ui: { name: 'ui-object', test: [Function: test] } }

// console.log(obj.ui.test())
// // this 代表 { name: 'ui-object', test: [Function: test] }




// var name = "Microsoft"; 
// function funcA(){
//     // console.log('name1: ', name)
//     var name = "Google";
//     // 在 function 裡面使用 var 宣告 name ，定義變數是 function 內的區域變數，也就是說，name 這個變數的作用域在這個 function 裡面。如果 function 裡面沒有宣告的話 name 這個變數會變成全域變數，因為function 裡面找不到宣告 會往外層找。
//     console.log('name2: ', name)
// }
// console.log(funcA());
// console.log(name);



// var nameExample = "Microsoft"; 
// function funcA(){
//     // console.log('nameExample1: ', nameExample)
//     // // nameExample = "Google";
//     // console.log('nameExample2: ', nameExample)
//     return nameExample
// }
// console.log('callFuncA:', funcA());
// console.log('outside:', nameExample);


// var name = "Microsoft";
 
// function funcA(){
//     var name = "Google";
//     console.log(name);
//     return function(){
//         name = "Facebook";
//         console.log(name)
//     };
// }


// // funcA();
// console.log(name); //Microsoft

// var o = funcA(); //Google
// o(); //Facebook


// //JavaScript
// var sum = 0;
// for(var i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(i); //11






// function timeIsUp() {
//     console.log('1')
//     setTimeout(function() {
//         console.log('3')
//         setTimeout(() => {
//             console.log('4')
//         });
//     })
//     console.log('2')
// }
// console.log('5')
// timeIsUp()


// setTimeout(() => {
//     console.log('6')
//     setTimeout(() => {
//         console.log('7')
//     }, 0);
// }, 0);





// var f = function () {
//     console.log(this.x);
//   }
  
//   var x = 1;
//   var obj = {
//     f: f,
//     x: 2,
//   };
  
//   // 单独执行
//   console.log(f()) // 1
  
//   // obj 环境执行
//   obj.f() // 2


// function aFunc(value, cb){
//     setTimeout(cb, 1000, value)
//   }
  
//   function bFunc(value, cb){
//     setTimeout(cb, 0, value)
//   }
  
//   function inCbB(value){
//     console.log(value)
//   }
  
//   function cbB(value){
//     setTimeout(inCbB, 0, value)
//   }
  
//   function cbA(value){
//     console.log(value)
//   }
  
//   aFunc('a', cbA)
//   bFunc('b', cbB)




// console.log(a)

// if(a === undefined) {
//     console.log('a is undefined!');
// } else {
//     console.log(' a is defined!');
// }

// var a = 'hello world';

// function b() {
//     console.log('Called b!');
// }

// b();
// console.log(a);
// var a = 'hello world!';
// console.log(a);



// function a() {
//     var myVar
//     console.log('a: ',myVar)
//     b()
// }
// function b() {
//     var myVar = 2
//     console.log('b: ',myVar)
// }
// var myVar = 1
// a()
// console.log('outer var:', myVar)



// function a() {
//     function b() {
//         console.log('1',myVar)
//     }
//     console.log('2', myVar)
//     var myVar = 2;
//     console.log('3', myVar)
//     b()
// }
// console.log('4', myVar)
// var myVar = 1
// console.log('5', myVar)
// a()


// console.log('1');
// setTimeout(function() {
//      console.log('Hello World')
// }, 2000)
// console.log(a)
// var a = 10;


// 我現在在想 應該會有幾種情況  
// 1. 傳值-> 兩個都有，不做事
// 2. 傳值-> checked 但資料庫沒 INSERT INTO
// 3. 傳值->  uncheck 資料庫有  DELETE
// 4. 傳值->  都沒有，不做事


// 多做一個 taxonomy(table)裡面只有兩個欄位(article_id, category_id)，把本來的 articles(table) 的 category_id 的欄位移除。

// 然後用 checkbox 選取多個分類，本來在想，先判斷有沒有資料再決定要 UPDATE 或 INSERT INTO ，今天嘗試了一天，後來想到這的要檢查的話，會有四種情況。然後突然想起來，像之前留言板存 session 一樣，先刪光在新增就好了XDDDD



// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// console.log(3)

// setTimeout(() => {
//   console.log(4)
// }, 0)

// console.log(5)


// //JavaScript
// var sum = 0;
// for(var i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(i); //11



// setTimeout(function timeout() {
// console.log('hi')
// }, 1000)

// setTimeout(function timeout() {
// console.log('hi')
// }, 1000)

// setTimeout(function timeout() {
// console.log('hi')
// }, 1000)

// setTimeout(function timeout() {
// console.log('hi')
// }, 1000)

// for(let i=1;i<6;i++){
//     setTimeout(function(){
//         console.log('set1',i)
//         setTimeout(() => {
//             console.log('set2',i)
//         }, 500);
//     },0)
    
//     console.log(i)
//  }

//  for(var i=1;i<6;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }

// for(var i=1;i<6;i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j)
//         },50)
//     })(i);
//  }

// console.log(1);
// setTimeout(function() {
//   console.log(2);
// }, 3000);
// console.log(3);
// setTimeout(function() {
//   console.log(4);
// }, 2000);
// console.log(5);



// // Synchronous
// [1, 2, 3, 4].forEach(function (i) {
// console.log(i)
// })

// // Asynchronous
// function asyncForEach(array, cb) {
//     array.forEach(function () {
//         setTimeout(cb, 1000)
//     })
// }

// asyncForEach([1, 2, 3, 4], function (i) {
//     console.log(i)
// })




/** 模擬 Join: 迴圈第一圈 i = 0 的時候，str 不加 conn， */
// function fakeJoin(arr, connector) {
//     var str = '';
//     for(var i = 0; i < arr.length; i++) {
//         if(i > 0) {
//             str += connector
//         }
//         if(arr[i] !== undefined) {
//             str += arr[i]
//         }
//     }
//     return str
// }
// console.log(fakeJoin([10, undefined, 3], ','))



// var a = []
// var b = a
// console.log(a === b) // true
// b = []
// console.log(a === b) // false

// // obj 指向這個物件的記憶體位址
// var obj = {
//     number: 10
// }
// // 將 obj 指向這個物件的記憶體位址給 obj2
// var obj2 = obj
// console.log(obj, obj2)
// console.log(obj===obj2)
// // => { number: 10 } { number: 10 }

// // obj2 改變了它指向的物件上的數值
// obj2.number = 20
// console.log(obj, obj2)
// console.log(obj===obj2)
// // => { number: 20 } { number: 20 }

// // 等號是賦值的意思。 { number: 30 } 先指向新的記憶體位址。
// // 而 obj2 再指向了 { number: 30 } 的記憶體位址
// obj2 = {
//     number: 30
// }
// console.log(obj, obj2)
// console.log(obj===obj2)
// // => { number: 20 } { number: 30 }

// var a = 20
// console.log('1', a)
// if(a = 10) {
//     console.log(123)
//     console.log('2', a)
// }
// console.log('3', a)




// function foo() {
//     var a = 0
//     function bar() {
//         console.log(a)
//     }
//     return bar()
// }
// foo()
// foo()
// foo()


// // 閉包範例
// function foo() {
//     var a = 0
//     function bar() {
//         a++
//         console.log(a)
//     }
//     return bar
// }
// var callFun = foo()
// callFun()
// callFun()

// 'use strict';

/** ES6 的做法 */
// class Dog {
//     // var hey = new Dog(name) 這裡的參數會傳來 constructor(name) {}
//     constructor(name) {
//         this.name = name
//     }
//     // setter
//     setName(name) {
//         this.name = name
//     }
//     // getter
//     getName() {
//         return this.name
//     }
//     sayHello() {
//         if(this.name !== undefined) {
//             console.log(this.name, 'say Hello!')
//         } else {
//             console.log('Hello~~')
//         }
//     }
// }

// var d = new Dog('123!')
// d.sayHello()
// var b = new Dog('456!')
// b.sayHello()
// console.log(d.sayHello === b.sayHello)
// 共用 true

// 繼承
// class BlackDog extends Dog {
//     showColor() {
//         console.log('Black Dog, ',this.name)
//     }
// }

// var e = new BlackDog('i am black Dog')
// console.log(e)
// e.showColor()


/** ES5 的做法，但不建議，因為這種做法會消耗很多記憶體，因為 new 了幾個就 return 幾組新 getName function  */

function Dog(name) {
    var myName = name
    return {
        getName: function() {
            return myName
        },
        sayHello: function() {
            console.log('Hello, My name is :', myName)
        }
    }
}

var b = Dog('123')
var d = Dog('456')
b.sayHello()

console.log(b.sayHello)
console.log(b.sayHello === d.sayHello)
// [Function: sayHello]
// false 




// /** ES5 的寫法，ES6 的底層。
//  * 當你宣告的時候有加上 new 才會把這個 function 當作 constructor(建構式) 來用 */
// function Dog(name) {
//     this.name = name
//     // console.log(this === global)
//     // console.log(this instanceof Dog)
// }

// console.log('badDog: ', badDog,' dog: ', dog)
// var badDog = Dog('123') 
// var dog = new Dog('abc')

// console.log(badDog)
// console.log(name)
// // console.log(badDog.name)



// console.log(dog)
// console.log(badDog.name)



// Dog.prototype.getName = function() {
//     return this.name
// }

// Object.prototype.sayHello = function() {
//     console.log('Object', this.name)
// }
// /** 上下相同，但如果在 prototype 找到了，就不會往下層找了 */
// Dog.prototype.sayHello = function() {
//     console.log('Dog', this.name)
// }
// var b = new Dog('123')
// var d = new Dog('abc') 
// console.log(d.sayHello === b.sayHello)
// console.log(d.__proto__ === Dog.prototype)
// // => true 他們共用這些方法

// 

// function Dog(name) {
//     this.name = name
//     this.getName = function() {
//         return this.name
//     }
//     this.sayHello = function() {
//         console.log('Dog', this.name)
//     }
// }

// var b = Dog('123')
// console.log(b)
// console.log(name)
// console.log(d)

// d.sayHello()
// console.log(b)

// console.log(Dog.__proto__ === Function.prototype)

// Prototype chain 原型鍊

// 1. d 本身有沒有 sayHello
// 2. d.__proto__ 有沒有 sayHello
// 3. d.__proto__.__proto__ 有沒有 sayHello
// 4. d.__proto__.__proto__.__proto__ 有沒有 sayHello
// 5. null 找到頂了

// d.__proto__ = Dog.prototype
// d.__proto__.__proto__ = Object.prototype
// 上下相同
// Dog.prototype.__proto__ = Object.prototype



// function createNewPerson(name) {
//     var obj = {};
//     obj.name = name;
//     obj.greeting = function () {
//       console.log('Hi! I\'m ' + this.name + '.');
//     }
//     return obj;
//   }

// var plusOne = createNewPerson('plusOne')
// var plusTwo = createNewPerson('plusTwo')
// console.log(plusOne.name)
// console.log(plusTwo.name)
// plusOne.greeting()
// plusTwo.greeting()

// console.log(plusTwo.name === console.log(plusTwo.name))

// function Person(name) {
//     this.name = name;
//     this.greeting = function() {
//         console.log('Hi! I\'m ' + this.name + '.');
//     };
//     this.work = function() {
//         console.log(this.name + 'is walking');
//     };
//     Person.prototype.salHello = function() {
//         console.log('Hello! I\'m ' + this.name + '.');
//     }
// }

// var one = new Person('one')
// var two = new Person('two')
// console.log(one.name)
// console.log(two.name)
// console.log(one.salHello === two.salHello)

/** 現在你應該能在頁面上看到兩組新物件，且各自以不同的命名空間儲存。若要存取其屬性與函式，就要以 person1 或 person2 開始呼叫。這些物件均完整封包，不致與其他功能衝突；但仍具備相同的 name 屬性與 greeting() 函式。另請注意，物件均使用當初建立時所各自指派的 name 值；這也是「this」如此重要的原因之一，以確保物件可使用自己的值而不致混淆其他數值。 */
// console.log(one.greeting === two.greeting)
// one.greeting()
// two.greeting()

// console.log(one)
// console.log(two)




// greeting()
// function greeting() {
//     console.log('hi')
// }
// greeting.language = 'english'
// console.log(greeting)


// var anonymousGreet = function() {
//     console.log('hi')
// }
// console.log(anonymousGreet)
// anonymousGreet()

// function log(a) {
//     a();
// }
// console.log(log)
// log(function() {
//     console.log('Hi')
// })