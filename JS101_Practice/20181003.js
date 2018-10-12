
// function Star(n) {
//     let result = ''
//     for (let i = 0; i < n; i++) {
//         result += '*'
//     }
//     return  result
// }
// console.log(Star(10))
// printStar(3)

// function double(n) {
//     return n * n
// }

// 練習七：回傳陣列裡面所有小於 n 的數的數量
// 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。


// 20181003
// function findSmallCount(arr, n) { //接收 arr, n 的函式
//     result = 0
//     for (let i = 0; i < arr.length; i++) {
//         console.log('i='+i)
//         if(arr[i] < n ){ 
//             // console.log('i='+i)
//             result = result + 1
//         }
//     }
//     console.log(result)
// }
// findSmallCount([],2)
// findSmallCount([1, 2, 3], 2)
// findSmallCount([1, 2, 3, 4, 5], 0)
// findSmallCount([1, 2, 3, 4], 100)


// // 簡化 + 語義化：
// function findSmallCount(arr, n) { 
//     Count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < n )Count++
//     }
//     console.log(Count)
// }
// findSmallCount([1, 2, 3], 2)
// findSmallCount([1, 2, 3, 4, 5], 0)
// findSmallCount([1, 2, 3, 4], 100)


// // 老師的講解
// // .filter 後面的function 是給 .filter 用的
// // .filter 過濾條件
// function findSmallCount(arr, n) {
//     // 這樣就得到了所有 < n 的陣列 (練習九)
//     return arr.filter(function(item) {
//         return item < n
//     }).length
//     // 再來一個 .length 就得到 < n 的數量了 (練習七)
// }
// console.log(findSmallCount([1, 2, 3, 4], 100))





// function findSmallerTotal(arr, n) {
//     var total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < n){
//         total += arr[i] ;
//         }
//     }
//     return total
// }
// console.log(findSmallerTotal([1, 2, 3], 1))
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999) )
// console.log(findSmallerTotal([1, 2, 3], 4))

// 練習九：
// 請寫一個函式 finaAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
// findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
// findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
// findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]


// function findAllSmall(arr, n) {
//     result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < n ){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(findAllSmall([1, 3, 5, 4, 2], 4, 10))




// 練習十：回傳陣列總和
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0


// function sum(arr) {
//     var result = 0
//     for (var i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result
// }
// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))


// function sum(arr) {
//     return arr.reduce(function(accumulator, value) {
//         return accumulator + value
//     })
// }
// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))


// // .map 存取陣列每一個元素，但沒有要改變它，直接return result
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



console.log(
    [2, 4, 6].reduce(function(obj, value) {
        obj['a' + value] = value
        // console.log(obj)
        return obj
        },{}   // 要放的值
    )
)


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