// /*
// 	假如條件太多的話，用switch case
// if (month === 1){
// 	console.log('一月')
// } else if (month === 2) {
// 	console.log('二月')
// } else if (month === 3) {
// 	console.log('三月'))
// } else if (month === 4) {
// 	console.log('四月'))
// } else if (month === 5) {
// 	console.log('五月')
// } else if (month === 6) {
// 	console.log('六月')
// }
// */


var month = 1
switch (month) {
  case 1:
    console.log('一月')
    break   //  break:執行完，跳出
  case 2:
    console.log('二月')
    break
  case 3:
    console.log('三月')
    break
  default:   // default:如果前面都不符合的話，執行這個
    console.log('冬天')
}
// month(4)


/* case 可以同時多組
如果沒有加 break ,下面的也會印出來
*/


function switchMonth(month){
  switch (month) {
    case 1: case 2: case 3:
      console.log('春天')
      break
    case 4: case 5: case 10:
      console.log('夏天')
      break
    default:
      console.log('秋天或冬天')
  }
}
switchMonth(3)
switchMonth(5)
switchMonth(7)



function switchMonth(month){
  let result = '';
  switch (month) {
    case 1: case 2: case 3:
      result = '春天';
      break
    case 4: case 5: case 10:
      result = '夏天';
      break
    default:
    result = '秋天或冬天';
  }
  return result;
}
console.log(switchMonth(3))
console.log(switchMonth(5))
console.log(switchMonth(7))


/* 這種固定有排序的，我們可以直接把它變成陣列，只要找到它的 index 就是答案了 */
// var month = 6
// var month_to_chinese = ['一月', '二月', '三月', '四月', '五月', '六月']
// console.log(month_to_chinese[month - 1]) //month_to_chinese 的 month - 1


// function Month(n){
//   var month_to_chinese = ['一月', '二月', '三月', '四月', '五月', '六月']
// }