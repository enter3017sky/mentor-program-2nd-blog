function capitalize (str) {
  console.log(str)
  var firstChar = str.charAt(0).toUpperCase()
  console.log(str)
  var otherChar = str.slice(1)
  console.log(str)
  var newStr = firstChar + otherChar
  console.log(str)
  return newStr
}
console.log(capitalize('nikeeee'))



// 在 Javascript 對符號用 toUpperCase 它還是符號，所以不用管它

function capitalize (str) {
  var result = ''
  result = str[0].toUpperCase() + str.slice(1)
  return result
}
console.log(capitalize('nikeeee'))
console.log(capitalize('Nikeeee'))
console.log(capitalize(',hello'))

// function capitalize (str) {
//   var result = ''
//   result = str[0].toUpperCase()
//   return result + str.slice(1)
// }
// console.log(capitalize('nick'))
// console.log(capitalize('nikeeeeeeee'))
// console.log(capitalize('Nikeeeeeeee'))
// console.log(capitalize(',hello'))

// function capitalize (str) {
//   var result = ''
//   for (var i = 0; i < str.length; i++) {
//     result = str[0].toUpperCase()+ str.slice(1)
//   }
//   return result
// }
// console.log(capitalize('nick'))
// console.log(capitalize('nikeeeeeeee'))
// console.log(capitalize('Nikeeeeeeee'))
// console.log(capitalize(',hello'))
