// Object 物件
// key: value

// var students = []

// {
// 	name: 'peter',
// 	score: 98,
// 	address: 'Taipei city',
// 	phone:' 0987654321',
// }
// console.log(students)

var students = []
// 也可以用這個方式呈現
var peter = {
  name: 'peter', // key: value
  age: 23,
  score: [92, 95, 98], // 物件裡面也可以放陣列
  address: 'Taipei city',
  phone: '0987654321',
  father: { // 物件裡面也可以放物件
    name: 'polo',
    phone: '0987334567'
  }
}
// 物件跟陣列，一起用
students.push('peter', 'clark', 'Alex')
console.log(students[0], students[2])

// 這樣就可以把學生的資料打印出來了
console.log(peter)

// 用 typeof 檢查類型：result => object
console.log(typeof peter)

// 從這個物件拿出你想要的東西
console.log(students[0].name)

// 如果不要把物件跟陣列混用
console.log(peter.address)

// 兩種方式：如果不要用. 可以用中括號['key']
console.log(peter['phone'])

var key = 'age'
console.log(peter.key)// 用peter.key會顯示undefined ，peter沒有key
console.log(peter[key])// 如果想要動態去改它，用中括號，放這個變數

console.log(peter.score)

// 以下兩個方法結果一樣
console.log(peter.father.phone)
console.log(peter['father']['phone'])
