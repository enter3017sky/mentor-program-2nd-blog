function fib(n) {
  result = 0
  for (var i = 0; i < n; i++){
    if (n >= 2){
      result = (n - 1) + (n - 2)
    }
    return result
  }
}

console.log(fib(8))