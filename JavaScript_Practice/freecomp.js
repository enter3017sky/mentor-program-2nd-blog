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
