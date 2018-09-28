
// 範例：輸出所有學生的成績並加總
var score = [30, 20, 50, 70, 70]
var sum = 0;
//i=0, i<5 i=0,1,2,3,4
for(var i = 0; i < score.length; i++){
    console.log(score[i]) // 輸出學生的成績
    sum += score[i]    // 加總所有學生的成績
}
console.log(sum)


// var i=0, i<5 是 ,console.log(score[0], sum=0+30 => 30,i++
// var i=1, i<5 是 ,console.log(score[1], sum=30+20 => 50,i++