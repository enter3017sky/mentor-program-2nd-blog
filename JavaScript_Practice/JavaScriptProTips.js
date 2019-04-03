
'https://www.youtube.com/watch?v=Mus_vwhTCq0&t=338s'

/** debug 之好的方式 */

const foo = { name: 'tom', age: 30, nervous: false }
const bar = { name: 'dick', age: 40, nervous: false }
const baz = { name: 'harry', age: 50, nervous: false }

// %c + CSS 在瀏覽器的 DevTool 的 console 可以看到效果
console.log('%c My Friend', 'color: orange; font-weight: bold;')

console.log(foo)
// 這樣在瀏覽器顯示更方便
console.log({ foo, bar ,baz })
console.log([foo, bar ,baz ])

// console.time console.timeEnd 執行時間
console.time('looper')
let i = 0;
while (i < 1000000) { i++ }
console.timeEnd('looper')

//  console.trace 在瀏覽器控制台可以知道是什麼函數執行的
// const deleteMe = () => console.trace('bye bye database')
// deleteMe()
// deleteMe()


// Object destructuring 物件解構比較好的方式
const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

// 'Bad Code 💩'
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`
}

'Good Code ✅'
function feed({ name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`
}
// OR
function feed(animal) {
    const { name, meal, diet } = animal
    return `Feed ${name} ${meal} kilos of ${diet}`
}
console.log(feed(turtle))


const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

'Bad String Code 💩'
let bio = horse.name + ' is a ' + horse.size + ' skilled in ' + horse.skills.join(' & ');
console.log(bio)


'Good String Code ✅'
const { name, size, skills } = horse;
bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`

console.log(bio)

//  Advanced Tag Example

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`
}
const bio2 = horseAge`This horse is ${horse.age}`
console.log(bio2)


// let myName = 'Clark',
//     area = 'Taiwan',
//     age = 30
// let someString = `${myName}, Hello World, I come from ${area}, age is ${age}`
// console.log(someString)

// let hey = 'Hello World'
// console.log`Hello World ${hey} ${hey} ${hey}`
// console.log('Hello World')


const pikachu = { name: 'Pikachu 🐹' }
const stats = { hp: 40, attack: 60, defense: 45}


'Bad Object Code 💩'
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR
const lv8 = Object.assign(pikachu, stats)
const lv9 = Object.assign(pikachu, { hp: 45 })

'Good Object Code ✅'
const lv10 = { ...pikachu, ...stats }
const lv11 = { ...pikachu, hp: 50 }

console.log(lv8)
console.log(lv9)
console.log(lv10)
console.log(lv11)


// Array

let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

'Bad Array Code 💩'
// pokemon.push('Bulbasaur')
// pokemon.push('Metapod')
// pokemon.push('Weedle')

'Good Array Code ✅'

// // Push
// pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// // Shift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon]

// pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle',]
console.log(pokemon)

/** loops */
const orders = [500, 30, 90, 15, 223];
'Bad Loop Code 💩'

// let total = 0;
// let withTax = [];
// let highValue = [];

// for(var j = 0; j < orders.length; j++) {
//     // Reduce
//     total += orders[j];

//     // Map
//     withTax.push(orders[j] * 1.1);

//     // Filter
//     if(orders[j] > 100) {
//         highValue.push(orders[j])
//     }
// }
// console.log`total: ${total}, withTax: ${withTax}, highValue: ${highValue}`
// console.log(`total: ${total}, withTax: ${withTax}, highValue: ${highValue}`)

'Good Loop Code ✅'

// Reduce
const total = orders.reduce((acc, cur) => acc + cur)
console.log(total)

// Map
const withTax = orders.map( v => v * 1.1)
console.log(withTax)

// Filter
const highValue = orders.filter(v => v > 100)
console.log(highValue)


/** async / await */

const random = () => {
    return Promise.resolve(Math.random())
}


'Bad Promise Code 💩'

// const sumRandomAsyncNums = () => {
//     let first;
//     let second;
//     let third;

//     return random()
//         .then(v => {
//             first = v;
//             return random();
//         })
//         .then(v => {
//             second = v;
//             return random();
//         })
//         .then(v => {
//             third = v;
//             return first + second + third;
//         })
//         .then(v => {
//             console.log(`Result ${v}`)
//         })
// }
// console.log(sumRandomAsyncNums())

'Good Promise Code ✅'

const sumRandomAsyncNums = async() => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`)

// 搭配 if  
    if(await random()) {
        console.log(`work`)
    }

// 搭配 for of 遍歷結果
    const randos = Promise.all([
        random(),
        random(),
        random()
    ])
    for(const r of await randos) {
        console.log(random())
    }

}

console.log(sumRandomAsyncNums())