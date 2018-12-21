### [網頁前端工程入門：Javascript 函式 - 延伸觀念 By 彭彭](https://www.youtube.com/watch?v=qmrVxIj97g4&index=15&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp)

```javascript

/*
function add(n1, n2){
    console.log(n1+ n2);
}
*/

// 把函式放進變數裡的感覺，把資料放進變數裡
var add = function(na, n2){
    console.log(n1, n2);
}
add(31,15);
var test = add;
test(10, 20);


/* x 裡面放什麼
var x = 3;
x = "String";
x = function(){console.log("Hello World!");};
x();
*/

var x = 3; // 全域空間，全域變數
function test(){
    var y = 5; // 區域空間，區域變數
    // var x = 9; 
    console.log(x+y);
    // 搜尋變數 x 裡面找到了 所以呼叫test() 印出14
    // 裡面沒有 x=9 就會找外面的 會印出 8
}
test()
// 外部的程式碼，不能使用內部的變數。
console.log(x+y);

```

[物件](https://www.youtube.com/watch?v=Vwg7BaPBK-Y&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=16)

```js
//Javascript 物件 - 基礎使用
// 建立空白物件
var point = new Object();

// 建立物件的成員(屬性與方法)
    //物件裡面裝的不是函式就叫做屬性
point.x = 3; // 屬性
point.y = 4;
point.getPosition = function(){ // 方法
    console.log(this.x + "," + this.y);
};

// 使用物件
console.log(point.x)
point.getPosition();

```

物件建構式
```js

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



[建構式](https://www.youtube.com/watch?v=iZ3LfVujGCM&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=18)
// 建構物件的函式 
function Player(name, hp){
    // this 代表新建的空白物件
    // 接上屬性 this.name
    this.name = name;
    this.hp = hp;
    this.fight = function(){
        this.hp-=2;
    };
    this.rest = function(){
        this.hp++;
    }
    this.report = function(){
        console.log(this.name + ": " + this.hp);
    }
}
var player = new Player("John", 100);
player.fight();
player.report();

var player2 = new Player("Bob" , 80);
player2.rest();
player2.report();
```

# 測試測試

https://mileslin.github.io/2017/05/vscode-%E8%A8%AD%E5%AE%9A%E8%87%AA%E5%8B%95%E8%A7%B8%E7%99%BC-suggestions/