function reverse (str) {
  var newStr = ''
  var strLength = str.length
  for (var i = 0; i <= str.length; i++) {
    // console.log(strLength - i)
    console.log('strLength:' + (strLength - i) + ' ' + 'i=' + i)
    newStr += str.charAt(strLength - i)
  }
  console.log(newStr)
}
// reverse('1234567890')
reverse('abcd')
/* 範圍有錯 4個字 但跑5次
strLength:4 i=0
strLength:3 i=1
strLength:2 i=2
strLength:1 i=3
strLength:0 i=4
dcba
*/

// function reverse (str) {
//   var newStr = ''
//   var strLength = str.length
//   for (var i = 1; i <= str.length; i++) {
//     // console.log(strLength)
//     // console.log(i)
//     console.log('strLength:' + (strLength - i) + ' ' + 'i=' + i)
//     newStr += str.charAt(strLength - i)
//   }
//   console.log(newStr)
// }
// // reverse('1234567890')
// reverse('abcd')
// /*
// strLength:3 i=1
// strLength:2 i=2
// strLength:1 i=3
// strLength:0 i=4
// dcba
// */
