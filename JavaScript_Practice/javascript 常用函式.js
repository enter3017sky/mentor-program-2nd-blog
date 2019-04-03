

// 在 node express 實作 blog 撈主頁的內文，然後再將資料中的內文換成 markdown 處理過的
// const mdPosts = handleContent(originPosts)
// function handleContent(arr) {
//     for(let i = 0, len = arr.length; i < len; i++) {
//         arr[i]['content'] = marked(arr[i]['content'])
//     }
//     return arr
// }


// var test = '123'
// var cp = '12e1e'

// console.log((true && cp))

// if( cp = true ) {
//     console.log('qdqwd')
// } else {
//     console.log('1e12')
// }


// let arr = [1, 2, 3]
// let obj = {
//     '12e12e': 123,
//     '12e12e21e': 456
// }

// console.log(Array.isArray(arr))

// let data = [ { title: '123',
// id: 102,
// draft: 0,
// created_at: "2019-03-15T06:00:11.000Z" },
// { title: '123',
// id: 101,
// draft: 1,
// created_at: "2019-03-15T02:26:07.000Z" },
// { title: '測試',
// id: 92,
// draft: 1,
// created_at: "2019-02-26T03:44:16.000Z" },
// { title: 'Gulp Example',
// id: 80,
// draft: 1,
// created_at: "2019-01-23T17:34:29.000Z" },
// { title: 'JavaScript 基礎',
// id: 79,
// draft: 0,
// created_at: "2019-01-23T17:28:07.000Z" },
// { title: 'JavaScript 物件導向',
// id: 78,
// draft: 1,
// created_at: "2019-01-22T03:11:07.000Z" },
// { title: 'JavaScript Closure 筆記',
// id: 77,
// draft: 0,
// created_at: "2019-01-21T23:33:54.000Z" },
// { title: 'code high light TEST',
// id: 64,
// draft: 0,
// created_at: "2019-01-17T22:57:28.000Z" },
// { title: '草稿測試',
// id: 28,
// draft: 1,
// created_at: "2019-01-10T05:36:45.000Z" },
// { title: 'PHP - Insert and Display checked values from Database',
// id: 21,
// draft: 0,
// created_at: "2019-01-09T21:07:52.000Z" },
// { title: 'PHP Markdown Parser 函式庫',
// id: 15,
// draft: 0,
// created_at: "2019-01-07T21:08:42.000Z" },
// { title: 'JavaScript 中的 Event Loop',
// id: 14,
// draft: 0,
// created_at: "2019-01-07T08:27:30.000Z" },
// { title: 'PHP Exceptions 種類與使用情境說明',
// id: 13,
// draft: 0,
// created_at: "2019-01-07T05:49:44.000Z" },
// { title: 'empty()、isset()、is_null 的差別',
// id: 5,
// draft: 0,
// created_at: "2019-01-06T07:05:35.000Z" },
// { title: '搬新家',
// id: 1,
// draft: 0,
// created_at: "2019-01-04T00:05:39.000Z "} ]

function marked(h) {
    return h += "-123"
}
function moment(x) {
    return x += "-456"
}

function markedAndMomentFormat (arr) {
    if(Array.isArray(arr)) {
        for(let i = 0, len = arr.length; i < len; i++) {
            if(arr[i]['content']) {
                arr[i]['content'] = marked(arr[i]['content'])
            }
            if(arr[i]['created_at']) {
                arr[i]['created_at'] = moment(arr[i]['created_at'])
            }
        } 
    } else {
        arr['content'] = marked(arr['content'])
        arr['created_at'] = moment(arr['created_at'])
    }
    return arr
}


// console.log(markedAndMomentFormat(data))

// function find_max(nums) {
//     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//     for (let num in nums) {
//         if (num > max_num) {
//         // (Fill in the missing line here)
//         // num = max_num
//         // max_num += 1
//         // max_num = num
//         max_num += num
//         }
//     }
//     return max_num; 
// }

// console.log(find_max(12314456543234567654323456))

// word

// function isPalindrome(word){
//   // Please write your code here.
//   if(word.reverse)

// }
// var word = readline()
// print(isPalindrome(word))

// let arr = []
// let str = 123456789

// let str2 = str.slice(0 , 1)

// console.log(str2)

// var str = "abcdef"; 
// console.log( str.split("").reverse().join("") )

function isPalindrome(word) {
    // Please write your code here.
    let result = word.split("").reverse().join("")
    if(result.toLowerCase() == word.toLowerCase()) {
        return true
    } else {
        return false
    }
}
var word = 'Deleveled'

console.log(isPalindrome(word))