
// [JS101]物以類聚：陣列(Array)
// 陣列通常是存類型相同的東西
// 如果變數是一個箱子的話，陣列就是很多類型差不多的箱子，裝著不同的東西

// var index = 10
// var score = []
// score[0] = 30
// score[1] = 50
// score[2] = 'hello'
// score[index] = 100 //score[第 index 個]

var score = [1, 3, 5, 10, 100]

// 把東西放進去陣列裡面 .push
score[score.length] = 300
score.push(500)
score.push(1000)

// console 取得陣列長度 .length
console.log(score.length)
// result => 8

// 印出陣列,取得陣列長度 .length
console.log(score, score.length)
// result => [ 1, 3, 5, 10, 100, 500, 1000 ] 7

// 取得陣列最後一個值 .length - 1 (index從0開始，故 .length-1)
console.log(score[score.length - 1])
// result => 1000

// 也可以用下面的方式呈現
var scores = []
scores.push(1)
scores.push(3)
scores.push(5)
scores.push(10)
scores.push(100)

console.log(scores, scores.length)
// result => [ 1, 3, 5, 10, 100 ] 5

console.log(scores[scores.length - 1])
// result => 100

function hello (n) {
  console.log('Hello World!')
}
hello()
