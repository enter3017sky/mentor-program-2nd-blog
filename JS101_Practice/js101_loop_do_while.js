/*
	do...while... loop
*/

var i = 1
do {
  console.log(i)
  i++
} while (i <= 30)

console.log('i=', i)
/* 思考 loop 要有電腦的思維，一行一行執行指令

i => 1
console.log(1)
while(i <= 30)
i => 2
console.log(2)
while(i <= 30)
i => 3
console.log(3)
while(i <= 30)

*/
/* result
1
2
3
...
100
i = 101
*/

// 以下範例的結果與上面相同
var i = 1
do {
  console.log(i)
  i++
  if (i > 30) {
    break
  }
} while (true)

console.log('i=', i)

/*
continue => 直接進到下一圈
只有偶數會印出 console.log('i++', i)
*/

var i = 1
do {
  console.log(i)
  i++
  if (i % 2 === 1) {
    continue
  }
  console.log('i++', i)
} while (i <= 30)

console.log('i=', i)

/*
result
1
i++ 2
2
3
i++ 4
4
5
i++ 6
6
7
....

28
29
i++ 30
30
i= 31
*/

/*
無窮迴圈

var i = 1
do {
	if (i%2 === 1) {
		continue
	}
	console.log(i)
	i++
} while(i <= 100)

console.log('i=',i)

	流程
i => 1
do
if (i%2 === 1) => true
continue
while(i <= 100)  => true

do
if (i%2 === 1) => true
continue
while(i <= 100)  => true

...

*/
