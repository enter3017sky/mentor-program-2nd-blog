/*
	迴圈常用於 1..100 或 a...b 之間的值

分號 ; 這行結束的意思
i 計數器
for(i初始值 ; 終止條件 ; i 每一圈要做的事情) {
}

for loop 比較常用，當你知道終止條件的話，for loop 很適合
訣竅就是一行一行來
*/

// 範例說明
var i = 1	// 初始值
while (i <= 10) { // 終止條件
  console.log(i) //打印 i
  // ......很多我們想做的事情
  i += 2 // i 每一圈要做的事情
}

for (var i = 1; i <= 10; i++) {
  console.log(i)
}
// console.log(i)

/*
var i = 1
console.log(i)
i+=1
if(i <= 10) {
	goto line 27
}

for (var i = 1; i <= 0; i++) {
	console.log(i)
}

以上的執行過程
var i = 1
if (i <= 0){
	console.log(i)
	i++
	goto line 39
}

滿足條件時,用 break 跳出
for (var i = 1; i <= 0; i++) {
	if (i === 3) break
	console.log(i)
}

用 continue 印出偶數
for (var i = 1; i <= 0; i++) {
	if (i%2) continue
	console.log(i)
}

*/

for (var i = 1; i <= 100; i *= 2) {
  console.log(i)
}
/*
result
1
2
4
8
16
32
64
*/

var scores = [12, 23, 34, 45, 56]
var sum = 0

for (var i = 0; i <= 4; i++) {
  console.log(scores[i])
}

// var scores = [12, 23, 34, 45, 56]
// var sum = 0
for (var i = 0; i < 5; i++) {
  console.log(scores[i])
}

// i <= scores.length 結果會出現undefined
// var scores = [12, 23, 34, 45, 56]
// var sum = 0
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i])
}

// 以上結果相同

// 更多的應用，求總和
// var scores = [12, 23, 34, 45, 56]
// var sum = 0
for (var i = 0; i < scores.length; i++) {
  // sum = sum + scores[i]
  sum += scores[i]
}
console.log(sum)

// while 的用法
// var scores = [12, 23, 34, 45, 56]
// var sum = 0
var i = 0
while (i < scores.length) {
  sum += scores[i]
  i++
}
console.log(sum)
