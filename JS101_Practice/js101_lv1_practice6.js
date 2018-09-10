// /*
// 回傳第一個大寫字母以及它的 index

// */

// function position(str) {
// 	console.log(str.indexOf('A'))
// }

// position('AbCd')

// //印出Ａ-Ｚ的 ASCII Code
// function position(str) {
// 	var indexOfLetter = []
// 	var form = 'A'.charCodeAt(0)
// 	var to = 'Z'.charCodeAt(0)
// 	for (var i = form; i <= to; i++) {
// 		console.log(i)
// 	}
// }

// 這樣就可以印出Ａ到Ｚ了
// function position(str) {
//   var indexOfLetter = []
//  var form = 'A'.charCodeAt(0)
//  var to = 'Z'.charCodeAt(0)
//  for (var i = form; i <= to; i++) {
//  console.log(String.fromCharCode(i))
//    }
// }
// position()

// 正解
// function position(str) {
// 	for (var i = 0; i < str.length; i++) {
// 		if (str[i] >= 'A' && str[i] <= 'Z') {
// 			return str[i] + ' ' + i
// 		}
// 	}
// 	return -1
// }

// var a = position('abCD')

// var b = position("abcd") //正確回傳值：-1

// var c = position("AbcD") //正確回傳值：A 0

// var d = position("abCD") //正確回傳值：C 2

// console.log(a)

// console.log(b)

// console.log(c)

// console.log(d)

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
