/*

// primitive（primitive value、primitive data type）－基本型別（或譯為原始型別）指的是非物件的型別，並且不具有方法。
boolean: true跟false
number: 所有數字
string: 單引號或雙引號括起來的東西

另外三種
object
undefined
function

*/
console.log('typeof true',typeof true)
console.log('typeof 30',typeof 30)
console.log('typeof 0.5',typeof 0.5)
console.log('typeof hello',typeof 'hello')
console.log('typeof "30"',typeof '30')

console.log('typeof [1]',typeof [1])
console.log('typeof {a: 1}',typeof {a: 1})
console.log('typeof null',typeof null)
console.log('typeof undefined',typeof undefined)
console.log('typeof function',typeof function(){})

/* result
typeof true boolean
typeof 30 number
typeof 0.5 number
typeof hello string
typeof "30" string
typeof [1] object
typeof {a: 1} object
typeof null object 剛開始就這樣，被認為是一個設計錯誤
typeof undefined undefined
typeof function function

*/

