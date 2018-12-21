function alphaSwap(str) {
    let i = 0, result = '';
    while(i < str.length) {
        if(str.charAt(i) == str.charAt(i).toUpperCase()){
            result += str.charAt(i).toLowerCase()
        } else {
            result += str.charAt(i).toUpperCase()
        }
        i++
    }
    return result
}

console.log(alphaSwap('nikeeeEEE'))