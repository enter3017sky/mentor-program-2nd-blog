/* Array 類型的內建函式
 .map .filter 很重要
*/

/*
arr.join() 會把陣列的每一個元素用你指定的字元接在一起，在每個字元之間加入一個元素的意思。
.join 回傳的是字串，後面不能繼續接其他函式
*/

var arr = [1, 2, 3, -1, -2, -3]
console.log(arr.join())
// result = 1,2,3,-1,-2,-3

console.log(arr.join(''))
// result = 123-1-2-3

console.log(arr.join('!'))
// result = 1!2!3!-1!-2!-3



// arr.map() 會把每個元素帶到 function(想讓它變怎樣) 去，用它的回傳值，取代原本的值
function double (x) {
  return x * 2
}
console.log(arr.map(double))
// result = [ 2, 4, 6, -2, -4, -6 ]

function negtive (a) {
  return a * -1
}
console.log(arr.map(negtive))
// [ -1, -2, -3, 1, 2, 3 ]

// 用匿名函式的方式也可以，與上面的結果相同
console.log(
  arr.map(function negtive (a) {
    return a * -1
  })
)
// [ -1, -2, -3, 1, 2, 3 ]

// 也可以繼續 .map 接下去
console.log(
  arr.map(function negtive (a) {
    return a * -1
  })
    .map(function negtive (a) {
      return a * 2
    })
)
// [ -2, -4, -6, 2, 4, 6 ]


// arr.filter() 你可以把東西過濾掉，回傳ture的會留下來，回傳false的會不見，以下範例把負數過濾掉
console.log(
  arr.map(function negtive (a) {
    return a * -1
  })
    .filter(function (a) {
      return a > 0
    })
)
// [ 1, 2, 3 ]


// arr.slice([begin[, end]]) 從哪切到哪
var arr2 = [0, 1, 2, 3, 4, 5, 6]

console.log(arr2.slice(3))
// [ 3, 4, 5, 6 ]

console.log(arr2.slice(2, 4))
// [ 2, 3 ]

/**
 sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
 */

/*
if a<b => return -值
if a>b => return +值
*/

// a<b 由小排到大 ; a>b 由大排到小
var array1 = [1, 30, 4, 21]

array1.sort(function (a, b) {
  if (a === b) return 0 //
  if (b > a) return -1
  return 1
})
console.log(array1)

// b - a 結果是陣列的排序由大至小
array1.sort(function (a, b) {
  return b - a
})
console.log(array1)

// a - b 結果是陣列的排序由小至大
array1.sort(function (a, b) {
  return a - b
})
console.log(array1)

/*
splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。會改到原本的
array。

sort() 方法會原地（in place）對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。

參考資料：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

*/


// accumulator 累加器：
function sum(accumulator, currentValue) {
  return currentValue + accumulator
}
[1, 2, 3].reduce(sum)

//               null         +1
// function sum(accumulator, currentValue) {
//   return currentValue + accumulator  1
// }
// [1, 2, 3].reduce(sum)

//                  1          +2
// function sum(accumulator, currentValue) {
//   return currentValue + accumulator  3
// }
// [1, 2, 3].reduce(sum)


//                  3         +3
// function sum(accumulator, currentValue) {
//   return currentValue + accumulator   6
// }
// [1, 2, 3].reduce(sum)

// => 6




// < 10 的數字的加總
console.log(
  [1, 2, 3, 4, 5, 10, 20].reduce(
      function(count, value) {
          if(value < 10) {
              return count + value
          }
          return count
      }, 0 // 初始值
  )
)

// < 10 的數字有幾個
console.log(
  [1, 2, 3, 4, 5, 10, 20].reduce(
      function(count, value) {
          if(value < 10) {
              return count + 1
          }
          return count
      }, 0 // 初始值
  )
)