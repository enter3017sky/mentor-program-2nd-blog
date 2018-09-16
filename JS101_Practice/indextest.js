
function star(n) {
  result = '';
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
    }
    result += '*'
    console.log(result)
  }
  for (let i = 1; i >= n; i--) {
    console.log(i)
  }
}
star(5)