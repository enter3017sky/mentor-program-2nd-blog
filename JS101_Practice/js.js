// function log(a) {
//     a();
// }

// log(function(){
//     console.log('hello')
// })




// // by value (primitives 純值)
// var a = 3;
// var b;

// b = a;  // 把 a 的值拷貝給 b, 兩者之間的記憶體位址是不一樣的
// a = 2;  // 所以 a 賦予新的值並不會影響到 b

// console.log(a)
// console.log(b)

// // by reference(all objects (including functions)) 所有的物件，包括函式

// var c = { greeting: 'hi'};
// var d;
// d = c;

// c.greeting = 'Hello';

// console.log(c)
// console.log(d)

// // by reference (even as parameters)

// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; //mutate
// }
// changeGreeting(d)
// console.log(c)
// console.log(d)

// // equals operator sets up new memory space (new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);




// /*

// var 函式名稱 = function(需要傳遞的參數){
//         具體的處理程式碼;
// };

// 呼叫函式
// 函式名稱(參數)

// */

// var total = function(price) {
//     var tax = 0.05;
//     return price + price * tax;
// }

// console.log('咖啡機的價格為 ' + total(8000) + ' 元(含稅)')



var fizzbuzz = function(num){
    if(num % 3 === 0 && num % 5 === 0){
        return ('FizzBuzz')
    } else if(num % 3 === 0) {
        return ('Fizz')
    } else if (num % 5 === 0) {
        return ('Buzz')
    } else {
        return (num)
    }
}

for (var i = 0; i < 30; i++) {
    console.log(fizzbuzz(i))
}