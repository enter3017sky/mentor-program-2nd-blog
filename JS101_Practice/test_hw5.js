
function join (str, concatStr) {
  var result = str[0]
  for (var i = 1; i < str.length; i++) {
    result += concatStr + str[i]
  }
  return result
}
console.log(join([1, 2, 3], ' '))
console.log(join(['a', 'b', 'c'], '!'))
console.log(join(['a', 1, 'b', 2, 'c', 3], '!~!'))

// function join (str, concatStr) {
//   var result = ''
//   for (var i = 0; i < str.length - 1; i++) {
//     result += str[i] + concatStr
//   }
//   result += str[str.length - 1]
//   return result
// }
// console.log(join([1, 2, 3, 4, 5], '!'))
