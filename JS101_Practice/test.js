// function forloop () {
//   for (var i = 1; i <= 9; i++) {
//     console.log(i)
//   }
//   return ''
// }
// // forloop()
// console.log(forloop())

<<<<<<< HEAD
// var score = [30, 20, 50, 70, 70]
// var sum = 0
// for (var i = 0; i < score.length; i++) {
//   console.log(score[i])
//   sum = sum + score[i]
// }
// console.log(sum)

// let total = 0; let count = 1
// while (count <= 10) {
//   total += count
//   count += 1
// }
// // console.log(total)
// // → 55
// console.log(total(range(1, 10)))

// function factorial (n) {
//   if (n == 0) {
//     return 1
//   } else {
//     return factorial(n - 1) * n
//   }
// }

// console.log(factorial(2))
// console.log(factorial(5))
// console.log(factorial(7))
// console.log(factorial(10))

// → 40320

// let number = 0
// while (number <= 12) {
//   console.log(number)
//   number = number + 2
// }

//   let result = 1
//   let counter = 0
//   while (counter < 10) {
//     result = result * 2
//     counter = counter + 1
//     console.log(result)
//   }
// }
// console.log(String.fromCharCode('a'.charCodeAt(0) - 32))

// console.log(String.fromCharCode('A'.charCodeAt(0) + 32))

// var lowerWord = 'JAVA SCRIPT!'
// console.log(lowerWord.toLowerCase())
// // result => java script!

// 使用Object 儲存資料
// var _class = {
//   name: '一年一班',
//   students: [{
//     name: '學生１',
//     seatNo: 1
//   }, {
//     name: '學生2',
//     seatNo: 2
//   }, {
//     name: '學生3',
//     seatNo: 3
//   }, {
//     name: '學生4',
//     seatNo: 4
//   }]
// }

// for (var i = 0; i < _class.students.length; i++) {
//   var student = _class.students[i]
//   console.log(student.name)
//   console.log(student.seatNo)
// }

// function capitalize (input) {
//   var output = ''
//   for (var i = 0; i < input.length; i++) {
//     output += input[0].toUpperCase() + input.slice(1)
//     return input
//     console.log(input)
//   }
//   console.log(output)
// }

// capitalize('nike')




// var result = []
// result.push(0)
// return result
// console.log(result)

// var arr = [1, 2, 3]
// console.log(arr[0])

// var result = []
// var arr = [1, 2, 3]
// result.push(arr[0])
// console.log(result)
// return result

function double(x) {
  return x*2
=======
var score = [30, 20, 50, 70, 70]
var sum = 0
for (var i = 0; i < score.length; i++) {
  console.log(score[i])
  sum = sum + score[i]
>>>>>>> 5b3dd28705e7d49099235463b5dec2bcc3ec8da8
}
var arr = [1, 2, 3]
var result = []
result.push(double(arr[0]))
console.log(result)
return result