var star = function(n) {
    result = '';
    for(var i = 0; i < n; i++) {
        result += '*'
    }
    return result
}
// console.log(star(5))

var arrStars = function(n) {
    var result = [];
    for(var i = 0; i < n; i++) {
        result.push(star(i))
    }
    return result 
}
console.log(arrStars(5))