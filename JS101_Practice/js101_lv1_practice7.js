// function findSmallCount(arr, n) {
//   var counter = 0 //counter儲存多少小於n的數量
//   //這個迴圈會從arr的第一個元素掃到最後一個元素
//   for (var i = 0; i < arr.length; i++){ 
//     if(arr[i] < n) counter++ 
//   }
//   return counter
// }

// console.log(findSmallCount([1, 2, 3, 4, 5], 2))
// console.log(findSmallCount([1, 2, 3, 4, 5], 0))
// console.log(findSmallCount([1, 2, 3, 4], 100))

// 回傳小於n的陣列
// function findSmallCount2(arr, n) {
//   return arr.filter(function(item){
//     return item < n
//   })
// }
// console.log(findSmallCount2([1, 2, 3, 4, 5], 2))
// console.log(findSmallCount2([1, 2, 3, 4, 5], 0))
// console.log(findSmallCount2([1, 2, 3, 4], 100))


// //回傳小於n的數量
function findSmallCount2(arr, n) {
  return arr.filter(function(item){
    return item < n
  }).length //加 .length，這個arr的長度
}
console.log(findSmallCount2([1, 2, 3, 4, 5], 2))
console.log(findSmallCount2([1, 2, 3, 4, 5], 0))
console.log(findSmallCount2([1, 2, 3, 4], 100))