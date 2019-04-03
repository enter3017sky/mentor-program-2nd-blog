// var x = 3; // 全域空間，全域變數
// function test(){
//     // var y = 5; // 區域空間，區域變數
//     var x = 9; 
//     console.log(x+y);
//     // 搜尋變數 x 裡面找到了 所以呼叫test() 印出14
//     // 裡面沒有 x=9 就會找外面的 會印出 8
// }
// test()
// // 外部的程式碼，不能使用內部的變數。 y 找不到
// console.log(x+y);



// var a = 123;
// console.log(window.a);


// var num = 0;
// for(var i = 0; 2 > i; i++){
//     num += 2;
// }
// console.log(num)


// var num = 0
// function addChange(a, b){
//     num = a + b;
// }
// addChange(2, 5);
// console.log(num)

// var num = 0
// function addChange(a, b){
//     num += 2;
// }
// addChange();
// addChange();
// console.log(num)



// var price = 100;
// function sales(money){
//     var thisPrice = money * 0.8;
//     var total = location(thisPrice);
//     console.log(total);
// }
// function location(price){
//     return price - 30;
// }
// sales(price);


// var obj = {
//     str: 'hello',
//     str: 'hi'
// }
// console.log(obj.str)

// var arry= ['tom', 3, {str: 'hi'}]
// console.log(arry[2].str)


// var eggs = [10 ,5 ,20];
// for(var i =0; eggs.length>i;i++){
//     console.log('第'+ i + '個農場');
//     break;
// }



// // 建立空白物件
// var point = new Object();

// // 建立物件的成員(屬性與方法)
//     //物件裡面裝的不是函式就叫做屬性
// point.x = 3; // 屬性
// point.y = 4;
// point.getPosition = function(){ // 方法
//     console.log(this.x + "," + this.y);
// };

// // 使用物件
// console.log(point.x)
// point.getPosition();


// 遊戲中的玩家設計
// 物件的設計
// var player = new Object;
// player.name = "john";
// player.hp = 100;

// player.fight = function(){
//     this.hp = this.hp-=2
// }
// player.rest = function(){
//     this.hp++;
// }
// player.report = function(){
//     console.log(this.name + ": " + this.hp);
// }

// // 物件的使用
// player.fight();
// player.rest();
// player.report();



// [建構式](https://www.youtube.com/watch?v=iZ3LfVujGCM&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=18)
// // 建構物件的函式 
// function Player(name, hp){
//     // this 代表新建的空白物件
//     // 接上屬性 this.name
//     this.name = name;
//     this.hp = hp;
//     this.fight = function(){
//         this.hp-=2;
//     };
//     this.rest = function(){
//         this.hp++;
//     }
//     this.report = function(){
//         console.log(this.name + ": " + this.hp);
//     }
// }
// var player = new Player("John", 100);
// player.fight();
// player.report();

// var player2 = new Player("Bob" , 80);
// player2.rest();
// player2.report();







// 20181210

/* https://stackoverflow.com/questions/35436985/length-1-vs-length-in-a-javascript-loop

    遍歷字串或陣列的時候，index 由 0 開始 或由
    0 結束，所以 str.length-1

*/

// function reverseString(str) {
//     var reverseStr = ''
//     for (var i = str.length-1; i > 0; i--) {
//         reverseStr += str[i];
//         console.log(str[i])
//         // console.log('re: ', reverseStr,'str: ', str)
//     }
//     return reverseStr
// }
// console.log(reverseString('ABCD'))


// 判斷回文, str.length =>會顯示 undefined ,str.length-1 不會??
// function isPalindrome(str) {
//     var reverseStr = '';
//     for (var i = str.length-1; i >= 0; i--) {
//         reverseStr += str[i];
//     }
//         //return 這個判斷的結果
//     return reverseStr === str
// }
// console.log(isPalindrome('aba'))

// 找出最小值: 先排序 由小至大, 然後 return index[0]
// function findSmallest(arr) {
//     arr.sort(function(a, b) {
//         return a - b
//     })
//     return arr[0]
// }
// console.log(findSmallest([4, 2, 1, 7, 5]))



/**
題目名稱：判斷完全數
請實作出一個 isComplete 的 function 並接收一個數字，回傳這個數字是否是「完全數」
完全數定義：它的所有因數的總和（除了自己）就等於自己，例如說 6 的因數是：1, 2, 3, 6，1+2+3 = 6，所以 6 是完全數



note: 
let resultStr = ''
let resultArr = []
let resultNum = 0
 */



// function isComplete(n) {
//     let resultFactor = [];
//     let result = 0;

//     for (let i = 0; i < n; i++) {
//         if(n % i === 0) {
//             resultFactor.push(i)
//         }
//     }
//     // return resultFactor
//     for (let i = 0; i < resultFactor.length; i++) {
//         result += resultFactor[i]
//     }
//     return (n === result)
// }

// console.log(isComplete(6))
// console.log(isComplete(28))
// console.log(isComplete(496))
// console.log(isComplete(8128))
// console.log(isComplete(33550336))



// function swap(str) {
//     let result = '';
//     for(let i = 0; i < str.length; i++) {
//         if(str.charAt(i) == str.charAt(i).toUpperCase()) {
//             result += str.charAt(i).toLowerCase()
//         } else {
//             result += str.charAt(i).toUpperCase()
//         }
//     }
//     return result
// }

// console.log(swap("abcd"))
// console.log(swap("A1Lkk2"))










// function bigAdd(a, b) {
//     let input1 = '';
//     let input2 = '';
//     input1 = a;
//     input2 = b;
//     let sum = '';
//     let result=''
//     for(let i = input1.length-1; i >= 0; i--) {
//         console.log(input1[i], input2[i])
//         let sum = Number(input1.charAt(i)) + Number(input2.charAt(i))
//         result += sum[i]
//         console.log('result ', result += sum[i])
//     }
//     return result += sum
    
// }
// console.log(bigAdd('23', '52'))

// var c = '1131231231312'
// var d = 121212

// console.log(c.length, d.length )

// for(let i = a.length-1; i >= 0; i--) {
    //     console.log(a.split('').push(i))
    // }
    // console.log(typeof a)
    
//     let a = '432'
// b = a.split('')
// // c = b[0]
// // b.shift()
// b.unshift(0)
// console.log(b)


// function convertHolesToUndefined(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i]
//     }
//     return result
// }
// console.log(convertHolesToUndefined(['a', , 'b']))


// function Dog(name) {

//     if(this instanceof Dog) {
//         console.log(this)
//         console.log('1')
//     } else {
//         console.log(this)
//         console.log(2)
//     }

//     this.name = name
//     this.getName = function() {
//         return this.name
//     }
//     this.sayHello = function() {
//         console.log('Dog', this.name)
//     }
// }

// var b = Dog('123')

// var d = new Dog('456')


// console.log(name)

// console.log(name)



// console.log(this instanceof Dog)
// console.log(this)









// https://www.youtube.com/watch?v=Mus_vwhTCq0&t=338s

// /** debug 之好的方式 */

// const foo = { name: 'tom', age: 30, nervous: false }
// const bar = { name: 'dick', age: 40, nervous: false }
// const baz = { name: 'harry', age: 50, nervous: false }

// // %c + CSS 在瀏覽器的 DevTool 的 console 可以看到效果
// console.log('%c My Friend', 'color: orange; font-weight: bold;')

// console.log(foo)
// // 這樣在瀏覽器顯示更方便
// console.log({ foo, bar ,baz })
// console.log([foo, bar ,baz ])

// // console.time console.timeEnd 執行時間
// console.time('looper')
// let i = 0;
// while (i < 1000000) { i++ }
// console.timeEnd('looper')

// //  console.trace 在瀏覽器控制台可以知道是什麼函數執行的
// // const deleteMe = () => console.trace('bye bye database')
// // deleteMe()
// // deleteMe()


// // Object destructuring 物件解構比較好的方式
// const turtle = {
//     name: 'Bob 🐢',
//     legs: 4,
//     shell: true,
//     type: 'amphibious',
//     meal: 10,
//     diet: 'berries'
// }

// // 'Bad Code 💩'
// function feed(animal) {
//     return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
// }

// 'Good Code ✅'
// function feed({ name, meal, diet}) {
//     return `Feed ${name} ${meal} kilos of ${diet}`
// }
// // OR
// function feed(animal) {
//     const { name, meal, diet } = animal
//     return `Feed ${name} ${meal} kilos of ${diet}`
// }
// console.log(feed(turtle))


// const horse = {
//     name: 'Topher 🐴',
//     size: 'large',
//     skills: ['jousting', 'racing'],
//     age: 7
// }

// 'Bad String Code 💩'
// let bio = horse.name + ' is a ' + horse.size + ' skilled in ' + horse.skills.join(' & ');
// console.log(bio)


// 'Good String Code ✅'
// const { name, size, skills } = horse;
// bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

// console.log(bio)

// //  Advanced Tag Example

// function horseAge(str, age) {
//     const ageStr = age > 5 ? 'old' : 'young';
//     return `${str[0]}${ageStr} at ${age} years`
// }
// const bio2 = horseAge`This horse is ${horse.age}`
// console.log(bio2)


// // let myName = 'Clark',
// //     area = 'Taiwan',
// //     age = 30
// // let someString = `${myName}, Hello World, I come from ${area}, age is ${age}`
// // console.log(someString)

// // let hey = 'Hello World'
// // console.log`Hello World ${hey} ${hey} ${hey}`
// // console.log('Hello World')


// const pikachu = { name: 'Pikachu 🐹' }
// const stats = { hp: 40, attack: 60, defense: 45}


// 'Bad Object Code 💩'
// pikachu['hp'] = stats.hp
// pikachu['attack'] = stats.attack
// pikachu['defense'] = stats.defense

// // OR
// const lv8 = Object.assign(pikachu, stats)
// const lv9 = Object.assign(pikachu, { hp: 45 })

// 'Good Object Code ✅'
// const lv10 = { ...pikachu, ...stats }
// const lv11 = { ...pikachu, hp: 50 }

// console.log(lv8)
// console.log(lv9)
// console.log(lv10)
// console.log(lv11)


// // Array

// let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

// 'Bad Array Code 💩'
// // pokemon.push('Bulbasaur')
// // pokemon.push('Metapod')
// // pokemon.push('Weedle')

// 'Good Array Code ✅'

// // // Push
// // pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// // // Shift
// pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon]

// // pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle',]
// console.log(pokemon)

// /** loops */
// const orders = [500, 30, 90, 15, 223];
// 'Bad Loop Code 💩'

// // let total = 0;
// // let withTax = [];
// // let highValue = [];

// // for(var j = 0; j < orders.length; j++) {
// //     // Reduce
// //     total += orders[j];

// //     // Map
// //     withTax.push(orders[j] * 1.1);

// //     // Filter
// //     if(orders[j] > 100) {
// //         highValue.push(orders[j])
// //     }
// // }
// // console.log`total: ${total}, withTax: ${withTax}, highValue: ${highValue}`
// // console.log(`total: ${total}, withTax: ${withTax}, highValue: ${highValue}`)

// 'Good Loop Code ✅'

// // Reduce
// const total = orders.reduce((acc, cur) => acc + cur)
// console.log(total)

// // Map
// const withTax = orders.map( v => v * 1.1)
// console.log(withTax)

// // Filter
// const highValue = orders.filter(v => v > 100)
// console.log(highValue)


// /** async / await */

// const random = () => {
//     return Promise.resolve(Math.random())
// }


// 'Bad Promise Code 💩'

// // const sumRandomAsyncNums = () => {
// //     let first;
// //     let second;
// //     let third;

// //     return random()
// //         .then(v => {
// //             first = v;
// //             return random();
// //         })
// //         .then(v => {
// //             second = v;
// //             return random();
// //         })
// //         .then(v => {
// //             third = v;
// //             return first + second + third;
// //         })
// //         .then(v => {
// //             console.log(`Result ${v}`)
// //         })
// // }
// // console.log(sumRandomAsyncNums())

// 'Good Promise Code ✅'

// const sumRandomAsyncNums = async() => {
//     const first = await random();
//     const second = await random();
//     const third = await random();

//     console.log(`Result ${first + second + third}`)

// // 搭配 if  
//     if(await random()) {
//         console.log(`work`)
//     }

// // 搭配 for 遍歷結果
//     const randos = Promise.all([
//         random(),
//         random(),
//         random()
//     ])
//     for(const r of await randos) {
//         console.log(random())
//     }

// }

// console.log(sumRandomAsyncNums())



/** https://learnjavascript.online/app.html
 * Complete the function capitalize such that it capitalizes the name it receives. There's no capitalize method in JavaScript, so you have to write it yourself.
Here's an example example of capitalization: "joHN" becomes "John" */

function capitalize(word){
    var result = '';
    for(var i = 0; i < word.length; i++) {
        if(i === 0) {
            result += word[i].toUpperCase()
        } else {
            result += word[i].toLowerCase()
        }
    }
    return result;
}

console.log(capitalize("john"));
console.log(capitalize("BRAVO"));
console.log(capitalize("BLAne"));

/** 將數字轉換成字串 */
function convertNumberToString(number){
    return number.toString();
}

/** 將字串轉換成十進制數字 */
function convertStringToNumber(string){
    return parseInt(string, 10);
}

/** condition */

function canVote(age){
    if(age >= 18) {
        return true
    }
}

function canVote(age){
    if(age >= 18) {
        return true
    } else {
        return false
    }
}

function canVote(age){
    return age>= 18
}