
var month = 3

switch (month) {
  case 1:
    console.log('一月')
    break
  case 2:
    console.log('二月')
    break
  case 3:
    console.log('三月')
    break
  case 4:
    console.log('四月')
    break
  case 5:
    console.log('五月')
    break
  case 6:
    console.log('六月')
    break
  default:
    console.log('冬天')
}

/* case 可以同時多組
如果沒有加 break ,下面的也會印出來
*/
switch (month) {
  case 1:
  case 2:
  case 3:
    console.log('春天')
    break
  case 4:
  case 5:
  case 6:
    console.log('夏天')
    break
  default:
    console.log('秋天或冬天')
}

/* 這種固定有排序的，我們可以直接把它變成陣列，只要找到它 index 就可以了 */
var month_to_chinese = ['一月', '二月', '三月']
console.log(month_to_chinese[month - 1])

/*
	假如條件太多的話，用switch case

if (month === 1){
	console.log('一月')
} else if (month === 2) {
	console.log('二月')
} else if (month === 3) {
	console.log('三月'))
} else if (month === 4) {
	console.log('四月'))
} else if (month === 5) {
	console.log('五月')
} else if (month === 6) {
	console.log('六月')
}
*/
