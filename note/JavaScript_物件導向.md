## 物件導向整理筆記


## ES6 

```js
/** ES6 的做法 */
class Dog {
    // var hey = new Dog(name) 這裡的參數會傳來 constructor(name) {}
    constructor(name) {
        this.name = name
    }
    // setter
    setName(name) {
        this.name = name
    }
    // getter
    getName() {
        return this.name
    }
    sayHello() {
        if(this.name !== undefined) {
            console.log(this.name, 'say Hello!')
        } else {
            console.log('Hello~~')
        }
    }
}

var d = new Dog('123!')
d.sayHello()
var b = new Dog('456!')
b.sayHello()
console.log(d.sayHello === b.sayHello)
// true
```

###

```js
class BlackDog extends Dog {
    showColor() {
        console.log('Black Dog, ',this.name)
    }
}
```

### ES5

```js
// ** ES5 的做法，但不建議，因為這種做法會消耗很多記憶體，因為 new 了幾個就 return 幾組新 getName function  */

function Dog(name) {
    var myName = name
    return {
        getName: function() {
            return myName
        },
        sayHello: function() {
            console.log(myName)
        }
    }
}

var b = Dog('123')
var d = Dog('456')

console.log(b.sayHello)
console.log(b.sayHello === d.sayHello)
// [Function: sayHello]
// false
```

### 底層原理

```js
/** ES5 的寫法，ES6 的底層。
 * 當你宣告的時候有加上 new 才會把這個 function 當作 constructor(建構式) 來用 */
function Dog(name) {
    this.name = name
}

var b = new Dog('abc')
// => Dog { name: 'abc' }
var d = Dog('abc')
// => undefined (註解1)
// console.log(d, b)

var d =  Dog('abc')
```

### 強制呼叫建構式

- 註解1
- 當沒有使用 new 建構子的時候，this 會指向全域或 undefined。

```js
function Dog(name) {
    this.name = name
    console.log(this === global)
    console.log(this instanceof Dog)
}

/** 正確的做法，使用 new 建構子 */
var dog = new Dog('abc')
// => Dog { name: 'abc' } 指向這個類別
// console.log(this === global) => false
// console.log(this instanceof Dog) => true


/** 如果沒有使用 new 建構子
 * this 會指向 global
 * badDog: undefined
 * badDog.name 會出錯 */
var badDog = Dog('abc')
console.log(name) // => abc
console.log(badDog) // => undefined
console.log(badDog.name) // => Uncaught TypeError: Cannot read property 'name' of undefined at xxx.js:xxx
```

- 此時並未建立 Dog 物件，反而是建立了全域變數的 name(非 Strict 模式時)。
- 在建構式裡面用 `instanceof` 檢查以防萬一。

```js
var Dog = function() {
    if(!(this instanceof Dog)){
        return new Dog(name);
    }
    this.name = name;
    // 省略...
}
```



```js

Dog.prototype.getName = function() {
    return this.name
}

Object.prototype.sayHello = function() {
    console.log('Object', this.name)
}
/** 上下相同，但如果在 prototype 找到了，就不會往下層找了 */
Dog.prototype.sayHello = function() {
    console.log('Dog', this.name)
}
var b = new Dog('123')
var d = new Dog('abc') 
console.log(d.sayHello === b.sayHello)
console.log(d.__proto__ === Dog.prototype)
// => true 他們共用這些方法



function Dog(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
    this.sayHello = function() {
        console.log('Dog', this.name)
    }
}

var b = Dog('123')
console.log(b)
console.log(name)
console.log(d)

d.sayHello()
console.log(b)

console.log(Dog.__proto__ === Function.prototype)

Prototype chain 原型鍊

1. d 本身有沒有 sayHello
2. d.__proto__ 有沒有 sayHello
3. d.__proto__.__proto__ 有沒有 sayHello
4. d.__proto__.__proto__.__proto__ 有沒有 sayHello
5. null 找到頂了

d.__proto__ = Dog.prototype
d.__proto__.__proto__ = Object.prototype
上下相同
Dog.prototype.__proto__ = Object.prototype



function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function () {
      console.log('Hi! I\'m ' + this.name + '.');
    }
    return obj;
  }

var plusOne = createNewPerson('plusOne')
var plusTwo = createNewPerson('plusTwo')
console.log(plusOne.name)
console.log(plusTwo.name)
plusOne.greeting()
plusTwo.greeting()

console.log(plusTwo.name === console.log(plusTwo.name))

function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
    this.work = function() {
        console.log(this.name + 'is walking');
    };
    Person.prototype.salHello = function() {
        console.log('Hello! I\'m ' + this.name + '.');
    }
}

var one = new Person('one')
var two = new Person('two')
console.log(one.name)
console.log(two.name)
console.log(one.salHello === two.salHello)

```