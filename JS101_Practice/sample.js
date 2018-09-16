
/****
  function: repeatStr
  len: 重複次數
  input : 重複內容
  output: 輸出內容
****/

var repeatStr = function( len, input){
  var output = ''; // 初始化輸出內容為空白
  // 設置一段迴圈，長度為 len
  for( var i = 0; i < len; i ++){
    output += input; // 將重複內容加進輸出內容
  }
  console.log( output); // 打印輸出內容
}
// repeatStr(5, '!')


/****
  function: alternateCase
  input: 輸入內容
  output: 輸出內容
****/

var alternateCase = function( input){
  var output = ''; // 初始化輸出內容為空白
  // 設置一段迴圈，長度為輸入內容的字串長度
  for( var i = 0; i < input.length; i ++){
    if( input.charAt(i) == input.charAt(i).toUpperCase()) output += input.charAt(i).toLowerCase(); // 如果字元等於字元轉成大寫，那就把字元轉成小寫放進輸出內容裡
    else output += input.charAt(i).toUpperCase();　// 否則把字元轉成大寫放進輸出內容裡
  }
  console.log( output); // 打印輸出內容
}


/*
  function: buildTower
  floor: 樓層高度 
  output: 輸出內容
  */

var buildTower = function( floor){
  var output = [];                                // 初始化輸出內容為空白陣列
  for( var i = 0; i < floor; i ++){               // 設置一段迴圈，長度為樓層高度
    var space = ''; // 空白字串
    var star = ''; // 星號字串
    for( j = 0; j < ( floor - 1) - i; j ++){  // 設置一段迴圈，組合左右兩邊要用的空白字串。
      space += ' ';                       // 空白字串單邊的長度為總樓層減1再減掉目前所在樓層
    }                                     // 設置一段迴圈，組合中間要用的星號字串。
    for( var j = 0; j < ( i + 1) * 2 - 1; j ++){ // 星號字串長度為所在樓層乘2再減掉1
      star += '*';
    }
    output[i] = space + star + space;
  }
  console.log(output);        // 直接打印陣列，輸出內容的空白會被精簡，看不出效果！
}
buildTower(3)



  /**  
  for( var i = 0; i < output.length; i ++){
    console.log( output[i]);
  }
  **/

function test(n) {
  output = ''
  for( var i = 0; i < n; i++){
    output += '*'
  }
  return output
}
console.log(test(5))


