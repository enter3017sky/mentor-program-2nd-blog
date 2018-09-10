function forloop () {
  for (var i = 1; i <= 9; i++) {
    console.log(i)
  }
  return ''
}
// forloop()
console.log(forloop())

var score = [30, 20, 50, 70, 70]
var sum = 0
for (var i = 0; i < score.length; i++) {
  console.log(score[i])
  sum = sum + score[i]
}
console.log(sum)
