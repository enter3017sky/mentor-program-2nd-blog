# 1 變數 Variable

- 可以把變數想像成一個可以裝東西的箱子，然後可以給它一個名稱，可以用箱子的名稱來代指這個箱子。
- 在 JavaScript 宣告變數的話，可以用 `var`

```javascript
var box = hello
console.log(box)
```

- 如果你宣告一個變數，可是裡面沒有裝東西（沒有給值），會顯示 __undefined__。你宣告了只是沒有給值。

```javascript
var box
console.log(box)
```

- 如果你今天 __console.log__ 一個完全不存在東西，它會出錯。你連宣告都沒有宣告。
`ReferenceError: '某東西' is not defined`

# 變數命名 Variable 

- 變數名稱不能用數字開頭、不能取保留字。
- 取名方式
  - 用底線連接：this_is_a_box
  - 駝峰式：thisIsABox
  - 語意化的取名

# 2 安安，可以 ++ 嗎 

```javascript
var a = 0;
    a = a + 1;
    a += 1
    a++
console.log(a)
```

```javascript
var a = 0;
console.log(a++ && 30); result => 0
console.log('a:', a); result => a:1

++ 放後面的話，會先把整句跑完，再執行 a++
運算過程像這樣
console.log(a++ && 30)
=>
console.log(a && 30)
a++

---

console.log(++a && 30);
=>
a+=1
console.log(a && 30);

```