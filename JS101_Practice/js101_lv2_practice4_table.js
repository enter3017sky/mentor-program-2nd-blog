/**
 練習四：乘法表
請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果。

table(1) 預期輸出：
1*1 = 1
1*2 = 2
...
1*8 = 8
1*9 = 9

table(7) 預期輸出：
7*1 = 1
7*2 = 14
...
7*8 = 56
7*9 = 63

 */

function table (n) {
  // var result = n 多餘的
  for (var i = 1; i <= 9; i++) {
    console.log(n + '*' + i + ' = ' + n * i)
  }
  console.log(' ')
}

table(3)

table(5)

table(9)
