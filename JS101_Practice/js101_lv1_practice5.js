/* 未解開
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
isUpperCase("abcd") 正確回傳值：false
isUpperCase("Abcd") 正確回傳值：true
isUpperCase("ABCD") 正確回傳值：true
isUpperCase("aBCD") 正確回傳值：false
*/


//找第一個字
function isUpperCase(stri) {
	console.log(stri[0])
}

isUpperCase("abcd") //正確回傳值：false
isUpperCase("Abcd") //正確回傳值：true
isUpperCase("ABCD") //正確回傳值：true
isUpperCase("aBCD") //正確回傳值：false


function isUpperCase(str) {
	var char = str[0]
	if (char >= 'a' && char <= 'z') return false
	if (char >= 'A' && char <= 'Z') return true
}

console.log(isUpperCase("abcd")) 
//正確回傳值：false

console.log(isUpperCase("Abcd"))
 //正確回傳值：true




 function isUpperCase(str) {
	var char_d = str[0]
	if (char_d >= 'A' && char <= 'Z') return true 
	return false
}

// function isUpperCase(str) {
// 	var char = str[0]
// 	return char >= 'A' && char <= 'Z' true 
// 	return false
// }


console.log(isUpperCase("abcd")) 
//正確回傳值：false

console.log(isUpperCase("Abcd"))
 //正確回傳值：true



//  if(A === true ) return true
//  else return false
//  return A