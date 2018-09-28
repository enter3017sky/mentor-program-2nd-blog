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




// 規定 cb function 放前面 參數放後面
setTimeout(cb, 3000)

function cb(){
    console.log('yo')
}