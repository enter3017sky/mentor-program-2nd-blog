
//[JS101]物以類聚：陣列(Array)

var score = [1, 3, 5, 10, 100]

//把東西放進去陣列裡面
score.push(500)
score.push(1000)

//console陣列,陣列長度
console.log(score, score.length)

//取最後一個值
console.log(score[score.length - 1])



//也可以用下面的方式呈現
var score = []
score.push(1)
score.push(3)
score.push(5)
score.push(10)
score.push(100)

console.log(score, score.length)
console.log(score[score.length - 1])