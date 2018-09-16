/*
js101_lv2_練習五
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
isUpperCase("abcd") 正確回傳值：false
isUpperCase("Abcd") 正確回傳值：true
isUpperCase("ABCD") 正確回傳值：true
isUpperCase("aBCD") 正確回傳值：false
*/
answer
function isUpperCase (str) {
  var char = str[0] // 尋找 index = 0 的字
  if (char >= 'a' && char <= 'z') return false
  if (char >= 'A' && char <= 'Z') return true
}
console.log(isUpperCase('ABCD'))
console.log(isUpperCase('abcd'))
console.log(isUpperCase('Abcd'))
console.log(isUpperCase('aBCD'))

answer
function isUpperCase (str) {
  var char = str[0] // 尋找 index = 0 的字
  return char >= 'A' && char <= 'Z' //本身就是比較大小寫
}
console.log(isUpperCase('ABCD'))
console.log(isUpperCase('abcd'))
console.log(isUpperCase('Abcd'))
console.log(isUpperCase('aBCD'))

// 變化版
// function isUpperCase (str) {
//   var char = str[0] // 尋找 index = 0 的字
//   if (char >= 'a' && char <= 'z') console.log('Result is ' + false + ',' + ' str[0]= ' + str[0])
//   if (char >= 'A' && char <= 'Z') console.log('Result is ' + true + ',' + ' str[0]= ' + str[0])
// }
// isUpperCase('ABCD')
// isUpperCase('abcd')
// isUpperCase('Abcd')
// isUpperCase('aBCD')

// // 三元運算版 ternary
// function ternaryisUpperCase (str) {
//   var charStr = str[0]
//   console.log((charStr >= 'A' && charStr <= 'Z') ? 'true' : 'false')
// }
// ternaryisUpperCase('ABCD')
// ternaryisUpperCase('abCD')
// ternaryisUpperCase('ABcd')
// ternaryisUpperCase('abcd')

// 三元運算版 ternary2
// function ternaryisUpperCase (str) {
//   console.log((str[0] >= 'A' && str[0] <= 'Z') ? 'true' : 'false')
// }
// ternaryisUpperCase('ABCD')
// ternaryisUpperCase('abCD')
// ternaryisUpperCase('ABcd')
// ternaryisUpperCase('abcd')

// // 三元運算版 ternary3 回傳
// function ternaryisUpperCase2 (str2) {
//   var charStr = str2.charAt(0)
//   return (charStr >= 'A' && charStr <= 'Z') ? 'true' : 'false'
// }
// console.log(ternaryisUpperCase2('ABCD'))
// console.log(ternaryisUpperCase2('abcd'))

// 找第一個字
// function isUpperCase (str) {
// var char = str[0, 1, 2]
// console.log(str[0], str[2])
// console.log(char)
// }
// isUpperCase('ABCD')
// isUpperCase('abcd')
// isUpperCase('Abcd')
// isUpperCase('aBCD')

// console.log(isUpperCase("Abcd"))
//  //正確回傳值：true

// function isUpperCase (str) {
//   var char_d = str[0]
//   if (char_d >= 'A' && char_d <= 'Z') return true
//   return false
// }
// console.log(isUpperCase('abcd'))
// // 正確回傳值：false
// console.log(isUpperCase('Abcd'))
// // // 正確回傳值：true

// // 邏輯
//  if(A === true ) return true
//  else return false
//  return A
