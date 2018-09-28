/*
    1. (如果在 function 裡面) 宣告 Parameters 參數
    2. function 宣告提升，放到第一步下面
    3. 如果在同一個 scope 裡面這變數還沒宣告的話，變數宣告提升

        0924
*/

function test(d) {
    var d = 10
    function test2(c) {
      console.log(d)
    }
    test2(15)
    var d = 20
}
test(10)


/* 
JavaScript 運作邏輯

*/