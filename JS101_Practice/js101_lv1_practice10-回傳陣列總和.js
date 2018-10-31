// 練習十：回傳陣列總和
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0


function sum(arr){
    // 初始化 result = 0
    result = 0;
    // 設置迴圈 i = 陣列的長度
    for(var i =0; i<arr.length; i++){
    // 將 result 加上每一個arr[i]
        result += arr[i];
    }
    // 回傳 result
    return result
}
console.log(sum([1, 2, 3]))




// function sum(arr) {
//     return arr.reduce(function(accumulator, value) {
//         return accumulator + value
//     })
// }
// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))



// .map 存取陣列每一個元素，但沒有要改變它，直接return result
// function sum(arr) {
//     var result = 0
//     arr.map(function(value) {
//         result = result + value
//         return result
//     })
//     return result
// }
// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))


// // forEach 存脆把每一個值都給你，但要設定一個變數存取狀態
// // 像不用 return 的 .map 
// function sum(arr) {
//     var result = 0
//     arr.forEach(function(value) {
//         result = result + value
//     })
//     return result
// }
// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))



// console.log(
//     [2, 4, 6].reduce(function(obj, value) {
//         obj['a' + value] = value
//         // console.log(obj)
//         return obj
//         },{}   // 要放的值
//     )
// )


// // < 10 的數字的加總
// console.log(
//     [1, 2, 3, 4, 5, 10, 20].reduce(
//         function(count, value) {
//             if(value < 10) {
//                 return count + value
//             }
//             return count
//         }, 0 // 初始值
//     )
// )


// // < 10 的數字有幾個
// console.log(
//     [1, 2, 3, 4, 5, 10, 20].reduce(
//         function(count, value) {
//             if(value < 10) {
//                 return count + 1
//             }
//             return count
//         }, 0 // 初始值
//     )
// )