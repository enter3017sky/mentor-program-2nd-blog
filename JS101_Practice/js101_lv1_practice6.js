// /*
// 回傳第一個大寫字母以及它的 index

// */

// 正解
function position (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      return str[i] + ' ' + i
    }
  }
  return -1
}

var a = position('abCD')
var b = position('abcd') // 正確回傳值：-1
var c = position('AbcD') // 正確回傳值：A 0
var d = position('abCD') // 正確回傳值：C 2

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// // 回傳第一個大寫字母以及它的 index+1
// function position (str) {
//   var result = str
//   for (var i = 0; i < result.length; i++) {
//     // console.log(i)
//     // console.log(str[i])
//     if (str[i] >= 'A' && str[i] <= 'Z') {
//       // console.log(str[i])
//       return str[i] + ' 是第' + (i + Number(1)) + '個'
//     }
//   }
//   return -1 + ' : 都沒有大寫'
// }
// console.log(position('abdbbbbbbbbC'))
// console.log(position('abdbbbGbbbbC'))
// console.log(position('bCCd'))
// console.log(position('ABCd'))
// console.log(position('abcd'))

// 印出Ａ-Ｚ的 ASCII Code
// function position (str) {
//   var indexOfLetter = []
//   var form = 'A'.charCodeAt(0)
//   var to = 'Z'.charCodeAt(0)
//   for (var i = form; i <= to; i++) {
//     console.log(i)
//   }
// }
// position()

// 轉換 ASCII Code 印出 A - Z
// function position(str) {
//   var indexOfLetter = []
//  var form = 'A'.charCodeAt(0)
//  var to = 'Z'.charCodeAt(0)
//  for (var i = form; i <= to; i++) {
//  console.log(String.fromCharCode(i))
//    }
// }
// position()

// 複雜的解法

// function position(str) {
// 	var indexOfLetter = []
// 	var form = 'A'.charCodeAt(0)
// 	var to = 'Z'.charCodeAt(0)
// 	for (var i = form; i <= to; i++) {
// 		var char = String.fromCharCode(i)
// 		indexOfLetter.push({
// 			char: char,
// 			index: str.indexOf(char)
// 		})
// 	}
// 	indexOfLetter.sort(function(a, b) {
// 		return a.index - b.index
// 	})

// 	indexOfLetter = indexOfLetter.filter(funciotn(item) {
// 		return item.index >= 0
// 	})

// 	if (indexOfLetter.length === 0) {
// 		return -1
// 	}

// 	return indexOfLetter[0].char + ' ' + indexOfLetter[0].index

// }

// var a = position('abCD')
// console.log(a)
