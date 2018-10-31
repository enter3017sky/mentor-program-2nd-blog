// var score = [100, 90, 40, 50 ,20]
// var sum = 0;

// for (let i = 0; i < score.length; i++) {
//     sum += score[i]
// }
// console.log(sum)


// var j = 0;
// while(j < score.length) {
//     sum += score[j];
//     j++
// } 

// console.log(sum)




// function shout() {
//     console.log("Hello! It's me you are looking for?")
// }

// function countToSeven(cb) {
//     for(var i = 0; i < 7; i++){
//         console.log(i)
//     }
//     if(typeof cb === 'function'){
//         cb();
//     }
// }

// countToSeven(shout)


// function getSatr(n){
//     result = '';
//     for (let i = 0; i < n; i++) {
//         result += '*';
//     }
//     return result
// }
// // getSatr(5)
// console.log(getSatr(5))

// function starArr(n){
//     var result = [];
//     for(i = 0; i < n; i++){
//         for(var j = 0; j<=i; j++){
//             result.push('*')
//         }
//         return result
//     }
// }
// console.log(starArr(5))
// // starArr(3)


// ## hw1：好多星星  
// 給定 n（1<=n<=30），依照規律「回傳」正確圖形（每一行是一個陣列的元素）

// ```
// n = 1
// ["*"]

// n = 3
// ["*", "**", "***"]

// n = 6
// ["*", "**", "***", "****", "*****", "******"]
// ```


// function repeat (times) {
//     var result = []
//     var str = '*'
//     for (var i = 0; i < times; i++) {
//       result += str
//     }
//     return result
//   }
//   console.log(repeat(5))
//   console.log(repeat('yoyoyo', 2))

// function starArr(n){
//     var result = [];
//     for(i = 0; i < n; i++){
//         result.push('*')
//     }
//     return result
// }

// function starlead(n){
//     for(var j = 0; j <= n; j++){
//         starArr(n)
//     }
//     return 
// }

// console.log(starlead(3))

// for (let i = 0; i < 4; i++) {
//     console.log('for-i='+i)
// }


// var i = 0
// while (i < 4) {
//     console.log('while-i=' + i);
//     i++
// }



		

var alternateCase = function(input){
    var output = ''; // 初始化輸出內容為空白
// 設置一段迴圈，長度為輸入內容的字串長度
    for( var i = 0; i < input.length; i ++){
        if( input.charAt(i) == input.charAt(i).toUpperCase()){
            output += input.charAt(i).toLowerCase();
        // 如果字元等於字元轉成大寫，那就把字元轉成小寫放進輸出內容裡
        }else {
            output += input.charAt(i).toUpperCase();　
        // 否則把字元轉成大寫放進輸出內容裡
        }
    }
        console.log( output); // 打印輸出內容
}
alternateCase("I Love You")