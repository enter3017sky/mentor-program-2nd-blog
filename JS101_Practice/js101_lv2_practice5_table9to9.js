/*
練習五：九九乘法表
請寫出一個 function table9to9，並列出 1*1 ~ 9*9。

table9to9() 預期輸出：

1*1 = 1
1*2 = 2
1*3 = 3
...
*/

function table9to9 () {
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      console.log(i + '*' + j + '=' + i * j)
    }
    console.log(' ')
  }
}
table9to9()
