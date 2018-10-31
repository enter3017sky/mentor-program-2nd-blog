// 把物件轉成 JSON 格式
var objectLiteral = {
    firstname: 'Mary',
    isAProgrmmer: true
}
console.log(JSON.stringify(objectLiteral))


// 把 JSON 轉成物件
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}');
console.log(jsonValue)