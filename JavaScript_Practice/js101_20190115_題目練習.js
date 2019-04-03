/**  JS101  */
/** 1-1 印出一到九 */

// for (var i = 1; i <= 9; i++) {
//     console.log(i)
// }

// var i = 1;
// while (i <= 9) {
//     console.log(i)
//     i++
// }


/** 1-2 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n。 */

// function print(n) {
//     for(var i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }

// print(5)
// print(9)


/** 1-3 寫一個能夠印出 n 個 * 的函式 
寫一個函式 star，接收一個參數 n，並印出 n 個 *（禁止使用內建函式 repeat）
star(1) 預期輸出： *
star(5) 預期輸出： *****
*/

// function printStar(n) {
//     var result = ''; // 宣告 result 是空字串
//     // 印出 n 顆星的迴圈，將 result += n 顆星，印完之後離開迴圈，在 console.log 出來
//     for(var i = 0; i < n; i++) {
//         result += '*';
//     }
//     console.log(result) // 這行如果在 for loop 裡面的話，會變成印出 n 排 n 顆星
// }
// printStar(5)



/** 1-4
 * 
寫一個能回傳 n 個 * 的函式
請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。
star(1) 會回傳 *
star(5) 會回傳 *****
所以 console.log(star(5)) 的預期輸出是： *****
 */

// function star(n) {
//     var result = '';
//     for(var i = 0; i < n; i++) {
//         result += '*'; // result 加等於 n 顆星，然後跳出迴圈，return 結果。
//     }
//     return result;
// }
// console.log(star(5))
// console.log(star(10))




/** 1-5
 * 練習五：判斷大小寫
請寫一個叫做 isUpperCase 的 function，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
 */

// function isUpperCase(str) {
//     // 直接判斷第一個字元。
//     if(str[0] >= 'A' && 'Z' <= str[0]){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isUpperCase('Javascript'))
// console.log(isUpperCase('foo'))




/** 1-6 練習六：回傳第一個大寫字母以及它的 index
請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。
position("abcd") 正確回傳值：-1
position("AbcD") 正確回傳值：A 0
position("abCD") 正確回傳值：C 2 
*/

/** return -1 如果寫在 for loop 裡面會變成跑到不符合的字直接就 return -1，所以要寫在迴圈外面，遍歷整個字串後條件不符合才 return -1
有兩個方法可以存取字串中個別的字元。
第一個是用 charAt() 方法：
另一個方法是將字串當作一個類似陣列的物件，直接存取字串中對應的數值索引。


*/
// function position(str) {
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] >= 'A' && str[i] <= 'Z') {
//             return str[i] + ' ' + i;
//     } 
//     return -1
// }

// function position(str) {
//     for (var i = 0; i < str.length; i++) {
//         if(str.charAt(i) >= 'A' && str.charAt(i) <='Z') {
//             return str.charAt(i) + ' ' + i
//         }
//     }
//     return -1
// }

// console.log(position("abcd"))
// console.log(position("AbcD"))
// console.log(position("abCD"))
// console.log(position("abcD"))
// console.log(position('javaScript'))
// console.log(position('asynchronousOrSynchronous'))




/** 1-7 回傳陣列裡面所有小於 n 的數的數量
請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。
findSmallCount([1, 2, 3], 2) 預期回傳值：1
findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0
findSmallCount([1, 2, 3, 4], 100) 預期回傳值：4
 */


/**
 *  心得：宣告 sum 加總小於 arr[i] 的數量。
 *  最後再回圈跑完之後，回傳 sum
 */


// function findSmallCount(arr, num) {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] < num) {
//             sum++
//         }
//     }
//     return sum
// }

// console.log(findSmallCount([1, 2, 3], 2))
// console.log(findSmallCount([1, 2, 3, 4, 5], 0))
// console.log(findSmallCount([1, 2, 3, 4], 100))


/** 1-8 練習八：回傳陣列裡面所有小於 n 的數的總和
請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
findSmallerTotal([1, 2, 3], 1) 正確回傳值：0
findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25
findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0
 */


/** 心得：跟上一題差不多
 *  只是符合條件後做的事情不一樣，條件符合時 total+=arr[i]
 */

// function findSmallerTotal(arr, num) {
//     var total = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] < num) {
//             total += arr[i]
//         }
//     }
//     return total
// }

// console.log(findSmallerTotal([1, 2, 3], 3))
// console.log(findSmallerTotal([1, 2, 3], 1))
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))



/** 1-9   練習九：回傳陣列裡面所有小於 n 的數
請寫一個函式 finaAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2] */

// 心得：小於 num 的元素 push 去 result 中 

// function findAllSmall(arr, num) {
//     var result = [];
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] < num) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(findAllSmall([1, 2, 3], 10))
// console.log(findAllSmall([1, 2, 3], 2))
// console.log(findAllSmall([1, 3, 5, 4, 2], 4))


/** 1-10 練習十：回傳陣列總和
請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
sum([1, 2, 3]) 預期回傳值：6
sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0 */


// function sum(arr) {
//     var result = 0;
//     for (var i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result
// }

// console.log(sum([1, 2, 3]))
// console.log(sum([-1, 1, 2, -2, 3, -3]))



/** 2-1 練習一：好多星星
請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案。
stars(1) 預期輸出：
*
stars(3) 預期輸出：
stars(3) 預期輸出：
*
**
***
*/

// function stars(n) {
//     var result = '';
//     for(var i = 0; i < n; i++) {
//         result += '*'
//         console.log(result)
//     }
// }
// stars(5)



/** 2-2 練習二：好多星星 回傳版
請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
makeStars(1) 正確回傳值：*
makeStars(2) 正確回傳值：*\n**
makeStars(5) 正確回傳值：*\n**\n***\n****\n*****
 */


// function stars(n) {
//     var result = '';
//     for(var i = 0; i < n; i++) {
//         result += '*'
//         console.log(result)
//     }
// }
// stars(3)
// function star(n) {
//     var result = '';
//     for(var i = 0; i < n; i++) {
//         result += '*';
//     }
//     return result;
// }

// function makeStars(n) {
//     var result = ''
//     for(var i = 1; i <= n; i++) {
//         result += star(i)
//         if(i !== n) {
//             result += '\n'
//         }
//     }
//     return result
// }


// 陣列的解法
// function makeStars(n) {
//     var result = []
//     for(var i = 1; i <= n; i++) {
//         result.push(star(i))
//     }
//     return result.join('\n')
// }

// console.log(makeStars(1))
// console.log(makeStars(2))
// console.log(makeStars(5))



/** 2-3 練習三：好多星星 加強版
請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。

stars2(1) 預期輸出：
*
stars2(3) 預期輸出：
*
**
***
**
*
 */

/** 利用最簡單的印出多少顆星星的函式搭配迴圈 */

// function star(n) {
//     var result = '';
//     for(var i = 0; i < n; i++) {
//         result += '*';
//     }
//     return result;
// }

// function starts(n) {
//     for(var i = 1; i <= n; i++) {
//         console.log(star(i))
//     }
//     for(var i = n-1; i > 0; i--) {
//         console.log(star(i))
//     }
// }
// starts(5)


/** 2-4 練習四：乘法表
請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果。 */

// function table(n) {
//     result = 0;
//     for(var i = 1; i <= 9; i++) {
//         result = n + ' * ' + i + ' = ' + n*i
//         console.log(result)
//     }
// }
// table(9)



/** 2-5    練習五：九九乘法表
請寫出一個 function table9to9，並列出 1*1 ~ 9*9。
table9to9() 預期輸出： 1*1=1 ~ 9*9=81 */

/** 心得: table(n) 會印出 n 的乘以 1~9 的結果，再用一個迴圈就可以成功了。
 */

// function table(n) {
//     var result = 0;
//     for(var i = 1; i <= 9; i++) {
//         result = n + ' * ' + i + ' = ' + n*i
//         console.log(result)
//     }
// }

// function table9to9() {
//     for(var i = 1; i <=9; i++) {
//         table(i)
//     }
// }

// table9to9()


/** 2-6 練習六：費式數列
費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....
用比較數學一點的講法，就是：
fib(0) = 0
fib(1) = 1
for n >=2, fib(n) = fib(n-1) + fib(n-2)
現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字
fib(1) 預期回傳值：1
fib(2) 預期回傳值：1
fib(8) 預期回傳值：21 */





/** 2-7 練習七：字串反轉
請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
reverse("abcd") 預期回傳值：dcba
reverse("12345aa") 預期回傳值：aa54321 */


// function reverse(str) {
//     var result = '';
//     for(var i = str.length-1; i >= 0;  i--) {
//         result += str[i]
//     }
//     return result
// }

// 一樣是 i++ ,從字元的 index 去操控
// function reverse(str) {
//     var reverseStr = '';
//     for(var i = 1; i <= str.length; i++) {
//         reverseStr += str[str.length-i]
//         console.log(reverseStr, str.length, '-', i, '=', str.length-i)
//     }
//     return reverseStr
// }
// console.log(reverse("123456"))



/** 2-8 練習八：大小寫互換
請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串。
swap("Peter") 預期回傳值：pETER
swap("AbCdE") 預期回傳值：aBcDe */

// function swap(str) {
//     var result = '';
//     for(var i = 0; i < str.length; i++) {
//         if(str[i] >='A' && str[i] <= 'Z') {
//             result += str[i].toLowerCase()
//         } else {
//             result += str[i].toUpperCase()
//         }
//     }
//     return result
// }

// console.log(swap("Peter"))
// console.log(swap("AbCdE") )



/** 2-9    練習九：找出最小值
請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1
findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10 */

// 我的寫法，但老師的寫法省略了多餘的步驟
// function findMin(arr) {
//     var min = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//         } else {
//             min = arr[0]
//         }
//     }
//     return min
// }

// function findMin(arr) {
//     var min = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//         }
//     }
//     return min
// }

// console.log(findMin([1, 2, 5, 6, 99, 4, 5]))
// console.log(findMin([1, 6, 0, 33, 44, 88, -10]))


// function findNthMin(arr, htn) {
//     var min = 0;
//     var result = [];
//     for(var i = 0; i < arr.length; i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//         } 
//     }
//     return min
// }


// console.log(findNthMin([10, 2, 1, 6, 41, 5]))

// console.log(findNthMin([1, 2, 6, 4, 5], 1))
// console.log(findNthMin([1, 3, 5, 7, 9], 3))
// console.log(findNthMin([1, 1, 1, 1, 1], 2))


// function findMin(arr) {
//     var min = arr[0]
//     var minIndex = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(min > arr[i]) {
//             min = arr[i]
//             minIndex = i
//         }
//     }
//     return minIndex
// }

// function finNthMin(arr, nth) {
//     for (var i = 1; i <= nth-1; i++) {
//         console.log(i)
//         var minIndex = findMin(arr)
//         arr.splice(minIndex, 1)
//     }
//     var resultMinIndex = findMin(arr)
//     return arr[resultMinIndex]
// }

// finNthMin(([1, 2, 5, 6, 99, 4, 5]), 3)

// splice(index, count)

// console.log(findMin([1, 2, 5, 6, 99, 4, 5]))
// console.log(findMin([1, 6, 0, 33, 44, 88, -10]))



