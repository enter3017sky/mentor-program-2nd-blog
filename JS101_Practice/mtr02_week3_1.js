/*
week3 的作業開始準備

簽到規則：增加六日


Automatic Semicolon 

行的結尾 可加可不加
*/
// const arr = [1, 2, 3, 4]
// let [first] = arr;
// const arr2 = [4, 5, 6];
// [first] = arr2




// function test(){
//     let a = 1
//     function test2(){
//         var a //undefined
//         console.log(a)
//         a = 10
//     }
//     test2()
// }
// test()

// // 記得這個是 undefined 就好了
// function test(){
//     console.log(a)
//     var a = 10
// }
// test()



// // Temporal Dead Zone
// // 從function 開始到你實際賦值的區塊就叫 TDZ


// function test(){
//     let a = 1
//     function test2(){
//         qwdqwd // TDZ Start
//         qwdwqdwq
//         csacadcd
//         ascscsac
//         console.log(a) //TDZ
//         let a = 10 // TDZ end
//     }
//     test2()
// }
// test()






// // callback function
// // 同步 阻塞 block
// const result = getData()
// console.log(result)
// ------------------------



// // callback function 應用在需要等的時候
// function ccallMe(data){
//     console.log('done')
// }
// getData(callMe)



// function getData(id, cb){
//     ...發 request id
//     ...response 回來
//     cb(response)
// }

//  // 匿名函式
// getData(function(data){
//     console.log('done')
//     console.log(data)
// })




// 規定 callback function 放前面 參數放後面
setTimeout(cb, 3000)

function cb(){
    console.log('yo')
}




GET vs POST

很多人用瀏覽器的角度去想，沒有瀏覽器也可以存在，很多限制是瀏覽器給它們加上去的

get 可以脫離瀏覽器

curl http://google.com



瀏覽器文章導讀

CPU 中央處理器 

GPU 圖形處理器 繪圖相關功能
算圖非常耗效能

Process 程序
Thread 執行緒

IPC 讓兩個 Process 做溝通 


Renderer Process 
渲染畫面的程序怎麼運作的

錯誤處理的機制，

JavaScript可以阻止解析
當HTML解析器找到<script>標記時，它會暫停解析HTML文檔，並且必須加載，解析和執行JavaScript代碼。為什麼？因為JavaScript可以使用document.write()改變整個DOM結構的東西來改變文檔的形狀（ HTML規範中的解析模型概述有一個很好的圖表）。這就是HTML解析器在重新解析HTML文檔之前必須等待JavaScript運行的原因。如果您對JavaScript執行中發生的事情感到好奇，V8團隊就此進行了討論和博客文章。

計算 CSS

Layout 佈局

display: none 隱藏起來
visibility: hidden 透明，但會佔住位置。


html 轉化成 DOM Tree
計算 style，css 套用在節點上
排版，決定位置在哪裡
順序的前後




