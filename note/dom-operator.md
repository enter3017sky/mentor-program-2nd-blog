# DOM 操作筆記




參考資料：
[What is the “hasClass” function with plain JavaScript?](https://stackoverflow.com/a/16337545/10680064)
[HTML5 DOM元素类名相关操作API classList简介](https://www.zhangxinxu.com/wordpress/2013/07/domtokenlist-html5-dom-classlist-%E7%B1%BB%E5%90%8D/)
[都 2017 年了，學學用原生 JS 來操作 DOM 吧](https://jmln.tw/blog/2017-07-07-vanilla-javascript-dom-manipulation.html)

```js
<button type="button" class="btn btn-outline-danger delete">刪除</button>

// 假如一個 html 元素有很多個 class ，用 contains('className') 就可以檢查是否有指定的 class
Simply use classList 只需要使用:
if (document.body.classList.contains('thatClass')) {
    // do some stuff
}


Other uses of classList 其他用途:

document.body.classList.add('thisClass');
// $('body').addClass('thisClass');

document.body.classList.remove('thatClass');
// $('body').removeClass('thatClass');

document.body.classList.toggle('anotherClass');
// $('body').toggleClass('anotherClass');

```


## 留言板更改成 Ajax 之筆記

> 在 [MTR01]Lesson 7-2 的影片後半段，用 JQuery 示範留言板改成 Ajax 的過程。
> 先用 JavaScript 練習。



1. 首先要阻止表單的發送，然後取得送出的資訊(留言內容、parent_id)

```js
// 重點
    e.preventDefault()
    
    $(e.target).find('textarea[name=content]').val()
    $(e.target).find('input[name=parent_id]').val()

    el = $(e.target)
    el.find('textarea[name=content]').val()
    el.find('input[name=parent_id]').val()

```

- 老師在影片中 JQuery 的範例
```js
// 老師在影片中 JQuery 的範例
$(document).ready(function(){
    $('form').submit(function(e){
        // 阻止送出表單、取值
        e.preventDefault();
        const content = $(e.target).find('textarea[name=content]').val();
        const parentId = $(e.target).find('input[name=parent_id]').val();
    })
})


```

- 我的實作練習
```js
// 我的實作練習
document.addEventListener("DOMContentLoaded", function() {
        let form = document.forms
        // 遍歷所有 form
        for (let i = 0; i < form.length; i++) {
            const forms = form[i];
            forms.addEventListener('submit', function(e){
                e.preventDefault(); // 阻止表單 submit

                // test.1 用 childNodes 查找 parent_id 的 input
                //不好用 let parentId = forms.childNodes[3].value
                //不好用 let content = forms.childNodes[7].childNodes[1].value

                    // test.2 用 class
                let parentId = forms.querySelector('.hidden').value
                let content = forms.querySelector('.content').value
                // let content = forms.getElementsByClassName('content')[0].value 要有 index ，否則返回 undefined
                if(content != ''){
                    console.log('parent_id: ' + parentId)
                    console.log('content: ' + content)
                }


                // Ajax 的部分
                var request = new XMLHttpRequest();
                request.open('POST', './add_comment.php', true);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        // Success!
                        var resp = request.responseText;
                        data = {
                            parent_id: parentId,
                            content: content
                        }
                        console.log(resp)
                        console.log(data)
                    } else {
                        // We reached our target server, but it returned an error
                    }
                };
                request.onerror = function() {
                // There was a connection error of some sort
                };
                request.send();
            })
        }
    })


```

2. 送 Requet 給 Server

```js
// 在這個 add_comments.php 檔案

$arr = array('result' => 'data');
echo json_encode($arr);

echo json_encode(array(
    'message' => 'Added Failure'
));
/*
php json_encode(array(...)) 輸出兩個陣列

let resp = xhr.responseText;
let resJSON = JSON.parse(resp);

console.log(resp)
result =>
{"message":"Successfully Added"}{"result":"success","message":"add message success"}

一直出現錯誤訊息 SyntaxError:Unexpected token { in JSON at position X
原因可能是結果連起來!?
responseText 有多份資料會造成 JSON.parse(resp) 解析錯誤




*/
```

```js

/*
問題
 新增留言的時候，取得 user 的 nickname

 傳送 data 給 Server 之後，server redirect 會使 data 資料是index.php 的所有 code
 
 if ($stmt->execute()) {
// server redirect ，PHP的重新導向
header('location:./index.php');

*/

    document.addEventListener("DOMContentLoaded", function() {
        let form = document.forms
        // 遍歷所有 form
        for (let i = 0; i < form.length; i++) {
            const forms = form[i];
            forms.addEventListener('submit', function(e){
                e.preventDefault(); // 阻止表單 submit
                let target = e.target
                let parentId = forms.querySelector('.hidden').value
                let content = forms.querySelector('.content').value

                var xhr = new XMLHttpRequest();
                xhr.open('POST', './add_comment.php', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

                var payload = {
                    parent_id: parentId,
                    content: content
                };
                xhr.onload = function() {
                    console.log('DONE', xhr.readyState);
                    if (xhr.status >= 200 && xhr.status < 400) {
                        let resp = xhr.responseText; // server 回應
                        if(xhr.readyState === 4 && xhr.statusText === 'OK'){
                            let resp = xhr.responseText; // server 回應
                            // Success!
                            let respObj = JSON.parse(resp);
                            let parent = document.querySelector('.container')
                            let firstMeg = document.querySelector('.comments__wrapper')
                            let id = respObj.id;
                            let newMeg = document.createElement('div') // 建立新的元素
                            newMeg.classList.add('comments__wrapper') // 附加 class 
                            newMeg.innerHTML += // data

                            if (respObj.result === 'Success') {
                                // 新的主留言插入在第一個留言之前
                                parent.insertBefore(newMeg, firstMeg)
                            }
                        } else if(xhr.readyState === 3) {
                            console.log('readyState: 3, 載入中')
                        } else if(xhr.readyState === 2) {
                            console.log('readyState: 2, 已接受標頭')
                        }
                    } else {
                        console.log('We reached our target server, but it returned an error.')
                    }
                }
                xhr.onerror = function() {
                    console.log('There was a connection error of some sort.')
                };

                // 方法一： 傳送的 data 必須 encodeURIComponent
                // var data = 'parent_id=' + encodeURIComponent(parentId) + '&content=' + encodeURIComponent(content)

                // 方法二：用這個函式 encode data(物件)
                var encodedData = encodeFormData(payload);
                xhr.send(encodedData);
            });
        };
    });

/**
 * Encode the properties of an object as if they were name/value pairs from
 * an HTML form, using application/x-www-form-urlencoded format
 */
function encodeFormData(data) {
    if (!data) return "";    // Always return a string
    var pairs = [];          // To hold name=value pairs
    for(var name in data) {                                  // For each name
        if (!data.hasOwnProperty(name)) continue;            // Skip inherited
        if (typeof data[name] === "function") continue;      // Skip methods
        var value = data[name].toString();                   // Value as string
        name = encodeURIComponent(name.replace(" ", "+"));   // Encode name
        value = encodeURIComponent(value.replace(" ", "+")); // Encode value
        pairs.push(name + "=" + value);   // Remember name=value pair
    }
    return pairs.join('&'); // Return joined pairs separated with &
}




```