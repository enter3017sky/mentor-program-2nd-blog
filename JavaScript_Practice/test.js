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


var num = 0;
for(var i = 0; 2 > i; i++){
    num += 2;
}
console.log(num)


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


