// ES6 class 語法，跟下面的一樣
/*
class Calculator {
    constructor() {
        this.text = ''
    }
    input(str) {
        this.text += str
    }
    getResult() {
        return eval(this.text)
    }
}
*/
// ES5
// constructor 建構子
//

// class Calculator {
//     constructor(){
//         this.name = name
//         this.text = ''
//     }
// }

// Calculator.prototype.input = function(str) {
//     this.text += str
// }

// Calculator.prototype.getResult = function(){
//     return eval(this.text)
// }

// const calculator = new Calculator('name');
// calculator.input(1)
// calculator.input('+')
// calculator.input(3)
// const result = calculator.getResult()
// console.log(result)


class Animal {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log(this.name)
    }
}
const dog = new Animal('My dog')
dog.hello()

const cat = new Animal('My cat')
cat.hello()