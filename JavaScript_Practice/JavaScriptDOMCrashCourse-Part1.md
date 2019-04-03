# Document Object Model

- tree of nodes/elements created by the browser
- JavaScript can be used to read/write/manipulate to the DOM
- Object Oriented Representation


## 了解 document

- 查看 DOM 的結構

```js
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)

```

## 選取元素

```js
document.getElementById
document.getElementsByTagName
document.getElementsByClassName
document.querySelector
document.querySelectorAll
```

## 遍歷節點



```js

    /** JavaScript DOM Crash Course - Part 1
 https://www.youtube.com/watch?v=0ik6X4DJKCc */

    let container = document.querySelector('.container')
    container.style.border = "1px solid gray"
    container.style.display = "flex"
    container.style.justifyContent = "center"
    container.style.alignItems = "center"
    container.style.flexDirection = "column"
    container.style.maxWidth = "100%"

    let main = document.querySelector('.main')
    main.style.border = "1px solid #000"
    main.style.padding = "3rem"
    main.style.margin = "2rem"

    let title = document.getElementsByClassName('title')
    let newDelBtn = document.createElement('input')
    Object.assign(newDelBtn, {
        type: 'button',
        value: 'DeleteAll'
    })
    // console.log('newDelBtn', newDelBtn)
    // main.prepend(newDelBtn)
    // console.log('title', title)

    /** querySelectorAll */
    // let items = document.querySelectorAll('.list-group-item')
    // items[0].style.color = "red"
    // items[1].style.color = "green"
    // items[2].style.color = "blue"
    // for(let i = 0; i < items.length; i++) {
    //     items[i].style.background = "#ccc"
    // }
    // let odd = document.querySelectorAll('li:nth-child(odd)')
    // let even = document.querySelectorAll('li:nth-child(even)')
    // for(let i = 0; i < odd.length; i++) {
    //     odd[i].style.background = "#f4f4f4"
    //     even[i].style.background = "#ccc"
    // }

    /** querySelector */
    // let item = document.querySelector('.list-group-item')
    // item.style.background = "white"
    // let secondItem = document.querySelector('.list-group-item:nth-child(2)')
    // secondItem.style.background = "orange"
    // let listItem = document.querySelector('.list-group-item:last-child')
    // listItem.style.background = "#8e1"
    // let input = document.querySelector('input')
    // input.value = "Hello world"
    // let btn = document.querySelector('input[type=submit]')
    // btn.value = "SEND"

    /** 遍歷 DOM - Traversing the DOM */
    let itemList = document.querySelector('#items')
    // parentNode 這兩者基本上相同
    // itemList.parentNode.style.background = "#ffff22"
    // itemList.parentNode.parentNode.style.background = "#ff2f22"
    // parentElement
    // itemList.parentElement.style.background = "#ffff22"
    // itemList.parentElement.parentElement.style.background = "#ff2f22"

    // childNodes 子節點(包括空白的文字節點，不實用)
    // console.log(itemList.childNodes)

    // children 探訪 itemList 的子節點(這個不包括空白的文字節點，較實用)
    // console.log(itemList.children)
    // console.log(itemList.children[2])
    itemList.children[2].style.background = "red"

    // firstChild 第一個子節點(包括空白的文字節點，根本沒屁用)
    // console.log(itemList.firstChild)
    // firstElementChild 第一個元素子節點
    // console.log(itemList.firstElementChild)
    // itemList.firstElementChild.textContent = "Hello"

    // // lastChild 最後一個子節點(包括空白的文字節點，根本沒屁用)
    // console.log(itemList.lastChild)
    // // lastElementChild 最後一個子節點
    // console.log(itemList.lastElementChild)

    // // nextSibling 下一個兄弟節點(包括空白文字節點，這個也沒啥用)
    // console.log(itemList.nextSibling)
    // // nextElementSibling 下一個兄弟節點
    // console.log(itemList.nextElementSibling)

    // // previousSibling 上一個兄弟節點(包括空白文字節點，這個也沒啥用)
    // console.log(itemList.previousSibling)
    // // previousElementSibling 上一個兄弟節點
    // console.log(itemList.previousElementSibling)

    /** createElement */

    // Create a div
    let newDiv = document.createElement('div')
    // Add class 新增 class
    newDiv.className = "hello"
    // Add id 新增 id
    newDiv.id = "hello world"
    // Add attr 新增屬性
    newDiv.setAttribute('title', 'hello Div')

    // Create text node 建立文字節點
    let newDivText = document.createTextNode('Hello World')
    let newDivText2 = document.createTextNode('Hello World123')
    // 將文字節點
    newDiv.appendChild(newDivText)
    console.log(newDiv)
    let headerContainer = document.querySelector('header .container')
    let h1 = document.querySelector('header h1')
    headerContainer.insertBefore(newDiv, h1)
    
    // Object.assign(newDiv, {
    //     class: 'test',
    //     id: 'testDiv'
    // })

    // div.className = "title"
    // div.innerHTML = "Hello World!"
    // div.value = "123123123"
    // document.body.insertBefore(div, container)


```