
// var http = require('http'),
//     fs = require('fs');

// function serverStaticFile(res, path, contentType, responseCode) {
//     if(!responseCode) responseCode = 200;
//     fs.readFile(__dirname + path, function(err, data) {
//         if(err) {
//             res.writeHead(500, { 'content-type':'text/plain' });
//             res.end('500 - Internal Error.');
//         } else {
//             res.writeHead(responseCode, { 'content-type': contentType });
//             res.end(data)
//         }
//     });
// }

// http.createServer((req, res) => {
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
//     switch(path) {
//         case '':
//                 serverStaticFile(res, '/public/home.html', 'text/html')
//                 break;
//         case '/about':
//                 serverStaticFile(res, '/public/about.html', 'text/html')
//                 break;
//         case '/img/logo.jpg':
//                 serverStaticFile(res, '/public/img/logo.jpg', 'image/jpeg')
//                 break;
//         case '/img/soft.png':
//                 serverStaticFile(res, '/public/img/soft.png', 'image/jpeg')
//                 break;
//         default:
//                 serverStaticFile(res, '/public/home.html', 'text/html', 404)
//                 break;
//     }


// }).listen(3000)

// console.log('Server started on localhost:3000; press Ctrl-C to terminate...')



// //

// const person = {
//     name: 'tom',
//     say: function() {
//       return function () {
//         console.log(this.name);
//       }
//     }
//   }
//   person.say()()
//   console.log(person.say()())

// setTimeout( ()=> console.log('a'), 0)

// var p = new Promise( (resolve)=> {
//   console.log('b');
//   resolve()
// })

// p.then( ()=> console.log('c').catch( (err)=> console.log('d') ))
// console.log('e');

// console.log(p)




// const  {a} = require('./utils.js')

// let time = new Date()

// console.dir(time)

// let time = '2019-01-17T22:57:28.000Z,'

// time = Date.parse(time)

// console.log(time)


// const myObj = {
//     username: "Clark",
//     password: "youGuessIt",
//     localhost: "computer"
// }

// console.log(myObj)
// console.log(myObj['username'])
// console.log(myObj.username)

// myObj.username = "Clark Kent"

// console.log(myObj['username'])
// myObj['username'] = "Kent Clark"

// console.log(myObj)
// console.log(myObj.username)



// const myArr = [ 
//   { title: 'JavaScript 基礎',
//     id: 79 },
//   { title: 'JavaScript Closure 筆記',
//     id: 77 },
//   { title: 'code high light TEST',
//     id: 64 },
//   { title: 'PHP - Insert and Display checked values from Database',
//     id: 21 },
//   { title: 'PHP Markdown Parser 函式庫',
//     id: 15 },
//   { title: 'JavaScript 中的 Event Loop',
//     id: 14 },
//   { title: 'PHP Exceptions 種類與使用情境說明',
//     id: 13 },
//   { title: 'empty()、isset()、is_null 的差別',
//     id: 5 },
//   { title: '搬新家', 
//     id: 1 } ]
//     myArr[2]['title'] = 'Hello World'
// // console.log(myArr)

// function handleContent(arr) {
//     for(let i = 0, len = arr.length; i < len; i++) {
//         arr[i]['content'] = marked(arr[i]['content'])
//     }
//     return arr
// }



let arr = [ '16', '19', '42' ]

let result = arr.map((x) => x * 2)

// console.log(result)
// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });


// let tags= [ { article_id: 100, category_id: 3 },
//     { article_id: 100, category_id: 16 },
//     { article_id: 100, category_id: 17 },
//     { article_id: 100, category_id: 18 },
//     { article_id: 100, category_id: 25 },
//     { article_id: 100, category_id: 42 },
//     { article_id: 100, category_id: 46 },
//     { article_id: 100, category_id: 49 },
//     { article_id: 100, category_id: 50 } ]

// let  categories = [ 
//     { id: 3, name: 'JavaScript' },
//     { id: 16, name: 'PHP' },
//     { id: 17, name: '心情記事' },
//     { id: 18, name: '感情交流' },
//     { id: 19, name: '運動健身' },
//     { id: 25, name: '旅遊' },
//     { id: 42, name: '學習筆記' },
//     { id: 43, name: '嘿嘿嘿' },
//     { id: 44, name: '嘿嘿嘿' },
//     { id: 45, name: '嘿嘿嘿' },
//     { id: 46, name: '12321' },
//     { id: 47, name: '12321' },
//     { id: 48, name: '12321' },
//     { id: 49, name: '添加一個分類吧~~~~' },
//     { id: 50, name: 'DEBUG' },
//     { id: 51, name: '12e12e' } ]
//     let categories_checked_array = [ 3, 16, 17, 18, 25, 42, 46, 49, 50 ]

//     for(let cat of categories) {
//         // tags.forEach(function(tag) { if (cat.id  ===  tag.category_id) console.log('checked') })
//         console.log(cat.id)
//         if(inArray(cat.id, categories_checked_array)) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
        
//     }

    
//     function inArray(needle, haystack) {
//         var length = haystack.length;
//         for(var i = 0; i < length; i++) {
//             if(haystack[i] == needle) 
//             return true;
//         }
//         return false;
//     }

    // let test = ''

    // if(!test) {
    //     console.log('false')
    // } else {
    //     console.log('true')
    // }

    // let str = '    ';

    // console.log("str.length: ", str.length)

    // console.log("str.length !=== ", (str.length === ''))
    // console.log("!str: ",  !str)
    // console.log("typeof !str", typeof !str)

    // foreach ($cat_option_arr as $id => $name) {
    //     $checked = '';
    //     $category_name = escape($name);
    //     if(in_array($id, $checked_arr)) {
    //         $checked = "checked";
    //     }
    //     print "
    //     <div class='form-check'>
    //         <input name='category_id[]' class='form-check-input' type='checkbox' value='$id' id='check_$id' $checked/>
    //         <label class='form-check-label' for='check_$id'>$category_name</label>
    //     </div>";
    // }


    // <% checkedTag.forEach(tag => tag.category_id === tag.id ? 'checked' : ''; %>


    const myobj = {
        title: '週三下午十四點二十八分進行各種express 相關測試',
        content: '    12e12e',
        'category_id[]': [ '17', '19', '45', '47', '49', '51' ],
        id: '100',
        draft: '0' }
    // console.log(myobj['category_id[]'])

    // const  cat = [ '17', '19', '45', '47', '49', '51' ];
    // const id = 99
    // const tag = {}

    // tag.forEach((id, tag) => {
        
    // })

    // var arr1 = [1];
    // if(Array.isArray(arr1) && arr1.length === 0){
    //     console.log('是空数组');
    // }
    // console.log(typeof [1])｀
    // console.log(Array.isArray(''))

    // let hello = []

    // if(!hello) {
    //     console.log('true')
    // } else {
    //     console.log('false')
    // }

    // function foo() {
    //     console.log(this)
    // }
    
    // foo(); // MemberExpression 是 foo
    
    // function foo() {
    //     return function() {
    //         console.log(this)
    //     }
    // }
    
    // foo()(); // MemberExpression 是 foo()
    
    // var foo = {
    //     bar: function () {
    //         return this;
    //     }
    // }
    
    // foo.bar(); // MemberExpression 是 foo.bar


    var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar());
//示例2
console.log((foo.bar)());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());