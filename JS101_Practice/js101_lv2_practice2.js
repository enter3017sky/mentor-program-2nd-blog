/*
請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串

makeStars(1) 正確回傳值：*

makeStars(2) 正確回傳值：*\n**

makeStars(5) 正確回傳值：*\n**\n***\n****\n*****

*/

function makeStars (n) {
  var stars = ''
  var result = ''
  for (var i = 1; i <= n; i++) {
    stars += '*'
  } if (i > 1) {
    result = '1'
  }
  stars += result
  console.log(stars)
}
// console.log(makeStars(4))
makeStars(5)
