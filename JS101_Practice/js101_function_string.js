// /*
// String 類型的內建函式

// // ASCII Code 存在電腦上對應的數字

// */

// var upperWord = 'hello world!'
// console.log(upperWord.toUpperCase())

// // 轉成大寫 ABCDEFG ，符號會忽略
// var a = 'abcdef!!!g'.toUpperCase()
// console.log(a)

// upperWord.fromCharCode('a'.charCodeAt(0) - 32)

// // 轉成小寫 hijklmn
// var b = 'HI!!!JKLMN'.toLowerCase()
// console.log(b)

// var c = 'Aa'
// var cCode = c.charCodeAt(0)
// var eCode = c.charCodeAt(1)
// console.log(cCode, eCode)
// // A=65, a=97

// // 用 ASCII code 變成它代表的字 A=>65 a=>97 相差32
// var str = String.fromCharCode(65, 66, 67, 68)
// console.log(str)
// // A

// var s = 'abcdefg' // 用不同的方式小寫轉大寫
// var aCode = s.charCodeAt(0)
// console.log(aCode)

// var str = String.fromCharCode(aCode - 32)
// console.log(str)

// var str2 = String.fromCharCode(aCode - ('s'.charCodeAt(0) - 'S'.charCodeAt(0)))
// console.log(str2)

// // 利用字串比大小的方式，來知道這個單字是大寫還小寫，是不是字母的範圍裡。
// var char = 'g'
// console.log(char >= 'a' && char <= 'z')

// /*
// 在一個字串裡面搜尋一個單字存不存在
// 存在的話，會回傳它的index，譬如以下出現在第4個字，-1 代表不存在
// */
// var string = 'hey hello world yoyoyo'
// var index = string.indexOf('hello')
// console.log(index)

// // .replace('原本的','你想要的') 只會換第一個
// var test = 'hey hello world yoyoyo'.replace('hey', '!!!')
// console.log(test)
// // result => !!! hello world yoyoyo

// // 正規表達式 /你想換的字/g  g是global
// var testReplace = 'hey hello world yoyoyo'.replace(/y/g, '!!!!!')
// console.log(testReplace)
// // result => he!!!!! hello world !!!!!o!!!!!o!!!!!o

// // .split 把單字切開，切成陣列
// var cup = 'data1,data2,data3'
// console.log(cup.split(','))
// // result = [ 'data1', 'data2', 'data3']

// console.log(testReplace.split('x'))

// console.log(cup.split())
// // result = [ 'data1,data2,data3' ]

// console.log(cup.split(''))
// /*
// [ 'd',
//   'a',
//   't',
//   'a',
//   '1',
//   ',',
//   'd',
//   'a',
//   't',
//   'a',
//   '2',
//   ',',
//   'd',
//   'a',
//   't',
//   'a',
//   '3' ]
// */

// // // .trim() 切掉空格
// // console.log(cup.trim())
// // // result = data1,data2,data3

// // // 檢查多少字元
// // console.log(cup.length)

// // // 利用這個方式把每個字列在一行
// // for (i = 0; i < cup.length; i++) {
// //   console.log(cup[i])
// // }

// /*
// d
// a
// t
// a
// 1
// ,
// d
// a
// t
// a
// 2
// ,
// d
// a
// t
// a
// 3
// */
