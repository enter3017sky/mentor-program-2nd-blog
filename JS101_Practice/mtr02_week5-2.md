> [MTR02 Week5-2：物件導向程式設計](https://www.youtube.com/watch?v=nZhzLcV9eHI)
>[MTR02 Week5-2（續）：繼承與 static](https://www.youtube.com/watch?v=k5TGAw7faNg&feature=youtu.be)

# 物件導向設計(Object-Oriented Programming);

> 面向對象(中國翻譯)

## 為什麼要有物件導向？

- 沒有物件導向會發生的事情
- 程式碼分散，function 散落在各個地方。（範例一）
- 變數一個個分散開來。（範例二）
  - 我們有了 JavaScript 的 Obeject ，用一個物件，把有關於這個學生的資訊集合起來。
  - 物件導向的好處是貼近我們現實生活中的樣貌，譬如一個學生，姓名、身高、分數等等，這些東西都是這個 __物件的屬性__（學生的資訊），把東西都 __集合__ 在一起。

```javascript
// 計算機 範例一
function setResult() {
}

function appendResult() {
}

function inputNumber() {
}

function inputOperator() {
}

document.querySelector('.number').addEventListener('click', function(){
    inputNumber(document.querySelector('.number').innerText)
})

document.querySelector('.operator').addEventListener('click', function(){
    inputOperator(document.querySelector('.number').innerText)
})
```

```javascript
// 學生的資訊 範例二
const students = []
const studentScore = []
const studentName = []

{
    name:'peter',
    score: 100,
    height: '190',
}
```



## 類別 Class VS 實體 Instance

- 在物件導向裡面有一個重要的概念 _Class_ 。
- 當 function 出現在物件裡面的時候，叫做 __method__（方法），放在外面的時候叫做 function。
    - _ex. hello() 是 Dog 的方法。_
- 我們定義了 Dog 有 hello()這個方法可以用。
- 類別(Class)比喻成設計圖，實體(Instance)就是從類別(Class)創建(_New_)出來的東西。

```php
<?php

class Dog {
    function hello() { //method 方法
        echo "I am dog";
    }
}
// 用 new 創建一隻狗
$dog = new Dog();

// doe 的 hello()方法
$dog->hello();

?>
```

延伸閱讀：
[什麼是物件導向（2）：Object, Class, Instance](http://teddy-chen-tw.blogspot.com/2012/01/2object-class-instance.html)
[翻譯名詞：object, instance](http://meebox.blogspot.com/2006/11/object-instance.html)
[物件原型 | MDN](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes)

## PHP 中的 Class

## 封裝 Encapsulation

- 可以經由 `public` 從外面改名稱
- 不過其實設定成`public`比較少見，因為代表別人可以亂改你的東西。

```php
<?php
class Dog {
    //首先把 hello() 設定成 public 的function ，用 $a->hello() 它
    public $name = ', name is default';
    public function hello() {
        echo $this->getHelloSentence();
    }
    private function getHelloSentence(){
        return '<br> I am a dog' . $this->name; // 存取自己實體的東西用 this
    }
}

$a = new Dog();
$a->name = ', my name is Leo';
$a->hello(); // JS 裡面是 a.hello()
// result=> I am a dog, my name is Leo
$b = new Dog();
$b->name = ', my name is Boo';
$b->hello(); // 執行這個的時候 this 就是 b的名稱
?>
// result=> I am a dog, my name is Boo

```

- 譬如東西無意間被改到
- 譬如 name 不能是髒話，用 public 不能限制
- 可以做檢查
- 保證裡面的東西不會被變更到

```php
<?php
class Dog {
    //首先把 hello() 設定成 public 的function ，用 $a->hello() 它
    private $name = ', name is default';
    public function hello() { 
        echo $this->getHelloSentence();
    }
    private function getHelloSentence(){
        return '<br> I am a dog' . $this->name; // 存取自己實體的東西用 this
    }


    // 譬如東西無意間被改到
    // 譬如 name 不能是髒話，用 public 不能限制

    // 可以做檢查 保證裡面的東西不會被變更到
    // setter 專門設定變數
    public function setName($name) {
        if($name === 'fuck') return; // 設定檢查
        $this->name = $name;
    }
    // getter 傳回變數
    public function getName() {
        return $this->name;
    }
}

$a = new Dog();
$a->setName(', my name is Leo');
$a->hello();
// result=> I am a dog, my name is Leo
$b = new Dog();
$b->setName(', my name is Boo');
$b->hello();
// result=> I am a dog, my name is Boo
?>
```

- 作業做過一樣的事情

```javascript
// 我要一個新的 request
let request = new XMLHttpRequest();
// 送到哪裡去
request.open('GET', url, true);
// 加一個 callback function
request.onload = () => {
    ...
}
// 最後把 request 送回去
request.send()
```

- 要讓別人怎麼用這個東西去思考 ex. 計算機範例

```javascript
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
const calculator = new Calculator('name');
calculator.input(1)
calculator.input('+')
calculator.input(3)
const result = calculator.getResult()
console.log(result)
*/


// ES5
// constructor 建構子
class Calculator {
    constructor(){
        this.name = name
        this.text = ''
    }
}

Calculator.prototype.input = function(str) {
    this.text += str
}

Calculator.prototype.getResult = function(){
    return eval(this.text)
}

const calculator = new Calculator('name');
calculator.input(1)
calculator.input('+')
calculator.input(3)
const result = calculator.getResult()
console.log(result)

```

## Static 靜態方法 vs Method 方法

- 變數永遠都只有一份
- 不需要改，每個宣告的都共用到的變數

```php
class MentorProgramAPI {
    static $version = 1;
    public function getTwitchResult(){
    }
}
$api = new MentorProgramAPI();
$api->getTwitchResult();
echo MentorProgramAPI::$version;

```

- 如果今天放在 instance 裡面的時候。
因為是分別存在不同的 instance 裡面，api 這個instance裡面有一個變數version，api2也有一個version，就會有兩個變數。

```php
class MentorProgramAPI {
    public $version = 1;
    public function getTwitchResult(){
    }
}

$api = new MentorProgramAPI();
$api->getTwitchResult();
$api->version;
echo $api->version;

$api2 = new MentorProgramAPI();
$api2->getTwitchResult();
$api2->version;
echo $api2->version;
```

```php

// 繼承 Inheritance
// public 公用的
// private 私用資料
// protected 被保護的
// instance 實例;例子

// 宣告這個說明書(Animal)，New 一個 instance(Dog) 出來才可以用裡面這些 method。
//
class Animal {
    public $name = 'default';
    // protected $name = 'default';
    //初始化
    public function __construct($name) { //建構子
        $this->name = $name;
    }
    public function sayHello(){
        echo '動物 ' . $this->name;
    }
}

// extends 擴充;延伸。
// Dog 擴充 動物這個類別
class Dog extends Animal {
    public function run() {
        echo ' I am running';
    }
    public function sayHello(){ // override 複寫
        echo 'I am dog'. $this->name;
    }
    public function sayYoAndHello() {
        parent::sayHello();
        echo 'yo';
    }
    public static function test() {
        echo 'test' ;
    }
}
// Dog::test()

// 靜態方法：static。Class 本身也可以有 function ，這個好處是，這個東西本身不會被改變，然後是建立在 Dog 底下的 function

class MentorProgramAPI {
    static $version = 1;
    public function getTwitchResult(){
    }
}

$api = new MentorProgramAPI();
$api->getTwitchResult();
echo MentorProgramAPI::$version;


// $api2 = new MentorProgramAPI();
// $api2->getTwitchResult();
// $api2->version;
// echo $api2->version;


//$a = new Dog(' leo '); // 新增一隻狗
// $a->name;    // protected 也沒辦法用
// $a->sayYoAndHello();
// $a->sayHello();
// $a->run();

class Db {
    public function __construct($server, $user, $password, $database) {
        $this->sevverName = $s;
    $this->userName = $u;
    $this->init()
    }

    private function init() {
        $this->conn = myqdli_db_connect(....)
    }

    public function query($str) {
        $this->result = myqdli_query($this->conn, $str)
    }
}

mysqli_connect($conn)
myqdli_query($conn, $query)
myqdli_fetch_result($conn, $query) //顯式

$conn->connect()
$conn->query($query)
$conn->fetch_result($query)

```

```javascript
// 建構子 constructor
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

```