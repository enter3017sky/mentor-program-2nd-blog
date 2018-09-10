
/* 萬年經典題：== 與 === 差別在 型態
三個等號判斷相等、型態又相同，才會相等
兩個等號判斷相等，不判斷型態
一個等號代表賦值
*/

var a = 10

console.log(a === 10)
/* 判斷 a 是否等於 10
result = true
*/

console.log(a === 10)
/* 判斷 a 是否等於 10
result = true
*/

console.log(a = 1)
/* 執行順序
=> a = 1
=> console.log(a)
result = 1
*/

var b = 10 === 10
var b = (10 === 10)
console.log(b)
/** 通暢執行順序是由右至左
	但最好用括號刮起來
 */

console.log(0 == '')
// result = true

console.log(0 === '')
// result = false

console.log(12 == '12')
// result = true

console.log(12 === '12')
// result = false

/*
 		從 Object 的等號真正理解變數
 */
console.log([] === [])
console.log([1] === [1])
console.log({} === {})
console.log({ a: 1 } === { a: 1 })
/* 四個結果都是 false
因為它們記憶體位置是不一樣的
obj(0x01) obj(0x05) 記憶體位置不一樣
*/

var obj = {
  a: 1
}

var obj2 = obj
obj2.a = 2

console.log('obj', obj)
console.log('obj2', obj2)
console.log(obj === obj2)
/*
obj,obj2 指向同一個記憶體位置
var obj2 = obj
	obj2.a = 2
以上result = true

如果 obj2 = {b:1}
那 result = false
*/

var a = []
b = a
b.push(1)
console.log('a', a)
console.log('b', b)
console.log(a === b)
// result = true

var a = []
b = a
b.push(1)

b = [1, 2, 3]

console.log('a', a)
console.log('b', b)
console.log(a === b)
// result = false
