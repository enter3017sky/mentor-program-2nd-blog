/*
呼叫add() ，先看 等號右邊，參數a=3 b=4
帶入function add 
function 內部 console.log(a + b) 印出 7
function 外部 console.log(result) 印出 undefined

function add(a, b) {
    console.log(a + b);
}
var result = add(3, 4)
console.log(result)

*/


// function add(a, b) {
//     console.log(a + b); // 印出 7
//     return 10; // 印出 10
// }
// var result = add(3, 4)
// console.log(result)


// function add(a, b) {
//     console.log(a + b); //7
//     return a + b; //
// }
// var result = add(3, 4) * add(10, 20);
// // 回傳 7 ，回傳 30 ，然後7 * 30 ，印出 210 
// console.log(result)

// function getSum(n){
//     sum = 0;
//     for(var i = 1; i <= n; i++){
//         sum += i;
//         i++
//     }
//     return(sum)
// }
// console.log(getSum(10))




var x = 3;
function test() {
    var y = 5;
    var x = 9;
    console.log(x+y)
}
// test()
console.log(x)