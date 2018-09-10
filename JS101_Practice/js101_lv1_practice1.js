// js101_lv1_練習一：印出一到九
// 請你分別用 for loop 以及 while 迴圈，印出 1~9。201809062358

function forloop () {
  for (var i = 1; i <= 9; i++) {
    console.log(i)
  }
}
forloop()

/*
console.log(forloop()) ?????
result 最後會顯示 undefined

1
2
3
...
9
undefined

*/

function whileloop () {
  var i = 1
  while (i <= 9) {
    console.log(i)
    i++
  }
}
whileloop()

function dowhile () {
  var i = 1
  do {
    console.log(i)
    i++
  } while (i <= 9)
}

dowhile()

// function whileloop2(){
// 	var i = 9
// 	while(i >= 1){
// 		console.log(i)
// 		i--
// 	}
// }
// whileloop2()
