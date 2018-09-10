//Object 物件
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
//也可以用這個方式呈現
var peter = {
 // key: value
	name: 'peter',
 //物件裡面也可以放陣列
	age:23,
	score: [92, 95, 98],
	address:'Taipei city',
	phone:'0987654321',
 //物件裡面也可以放物件
	father: {
		name:'polo',
		phone:0987334567

	}
}


//這樣就可以把學生的資料打印出來了
console.log(peter)

//用 typeof 運算子檢驗運算元的型別
console.log(typeof peter)

//把物件跟陣列用再一起
students.push(peter)
console.log(students[0])

//從這個物件拿出你想要的東西
console.log(students[0].name)

//如果不要把物件跟陣列混用
console.log(peter.address)

//如果不要用. 可以用中括號[]
console.log(peter['phone'])

//用peter.key會顯示undefined,用中括號放變數
var key = 'age'
console.log(peter.key)
console.log(peter[key])

console.log(peter.score)

console.log(peter.father.phone)