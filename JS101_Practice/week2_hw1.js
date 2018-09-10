
function stars (n) {
  var result = Array().push
  for (var i = 1; i <= n && n <= 30; i++) {
    result += '*'
    // console.log(result)
  }
  //   console.log(result)
  return result
}
stars(2)
