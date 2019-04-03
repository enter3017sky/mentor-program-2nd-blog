/**
 * JSON.stringify(): 將陣列或物件轉換成 JSON 格式
 * JSON.parse(): 將 JSON 格式解析成物件或陣列
 */


const obj1 = {
    name: 'Clark',
    age: 30,
    greet: 'Hello World!'
}
const obj2 = {
    name: 'Alex',
    age: 25,
    greet: 'Hey~Guys~'
}
const obj3 = {
    name: 'Amy',
    age: 24,
    greet: 'Hi!'
}
const arr = [obj1, obj2, obj3]

const jsonArr = JSON.stringify(arr)

const jsonObj = JSON.parse(jsonArr)

console.log(arr)
console.log(arr.length)

console.log(jsonArr)
console.log(jsonObj[1]['age'])



// for (const name in jsonArr) {
//     if (jsonArr.hasOwnProperty(name)) {
//         const element = jsonArr[name];
//         console.log(element)
//     }
// }




// const jsonObj = JSON.stringify(obj)
// const parseObj = JSON.parse(jsonObj)
// console.log('jsonObj: ', jsonObj)
// console.log('obj; ', obj)
// console.log('parseObj: ', parseObj)

// const jsonArr = JSON.stringify(arr)
// const parseArr = JSON.parse(jsonArr)
// console.log('jsonArr: ', jsonArr)
// console.log('arr: ', arr)
// console.log('parseArr: ', parseArr)

// console.log(`
// obj: ${obj}
// arr: ${arr}
// jsonObj: ${jsonObj}
// parseObj: ${parseObj}
// jsonArr: ${jsonArr}
// parseArr: ${parseArr}
// `)