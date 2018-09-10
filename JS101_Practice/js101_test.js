function repeat (input, len) {

  output = ''

  for (i = 0; i < len; i++) {
    output += input
  }

  return output
}
// repeat('a', 5)
console.log(repeat('Hello ', 3))
