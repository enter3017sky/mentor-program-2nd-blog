# JavaScript函數 活用範例速查辭典

## 書號 312.32 J36 8654

#### 定義類別：

- 利用 new 運算子呼叫函數，可以確認 Animal 類別的實體確實建立了，而具有建立實體功能的 Animal 函數（與其說是 Animal 類別）更適合被稱為建構式。

```js
var Animal = function() {
    this.name = name;
    this.toString = function() {
        return 'Animal: ' + this.name;
    };
};
var ani = new Animal('德次郎');
console.log(ani.name)  //result => 德次郎
console.log(ani.toString()) //reuslt => Animal: 德次郎
```
> NOTE: 原型基礎的物件導向
>
>JavaScript 雖然是物件導向的語言，但是其語法是以原型這項概念為基礎，一提到這種語言的特殊性，就會提到「以原型為基礎」的特徵（相對於一般以 __類別基礎的__ 物件導向而言，也有人會稱 JavaScript 是以為 __原型基礎的__ 物件導向。）

- 定義當成建構式使用的函數時，有下列幾點需要特別注意：
- 1. 名稱應以大寫英文字為首
- 2. 屬性可利用 「this.屬性名稱」定義
- 3. 類別的方法是函數型的屬性
  - 嚴格來說 JavaScript 沒有所謂的方法，值為函數物件的屬性可當成方法用。例如範例的就是將函數物件指定給 toString 屬性。換言之，就是透過這個方法定義「toString 方法」
- 4. 不需要回傳值
  - 建構式會自動回傳指向 this 的物件，所以不需要回傳值。若真的需要回傳值，其回傳值就是 new 運算子的值，此時要注意的是，對 this 設定的屬性將全部被忽略。
  - 此外，要追求效率就不該在建構式中定義方法(註1)，下列定義方式才是更具效率的做法。

##### 強制呼叫建構式

- 在 JavaScript 的世界中是由函數擔任建構式的功能，所以也會有一些問題。因為既然是函數，就能以函數的方式呼叫。

```js
// 沒有 new 運算子
var ani = Animal('德次郎')

console.log(ani)  // result=> undefined
console.log(name) // result=> 德次郎
console.log(ani.name)     // result=> 錯誤（Cannot read property 'name' of undefined）
```

- 此時並未建立 Animal 物件，反而是建立了全域變數的 name(非 Strict 模式時)，以防萬一，必須在建構式下新增下列程式碼才安全

```js
var Animal = function() {
    if( !(this instanceof Animal)){
        return new Animal(name);
    }
    this.name = name;
    // 省略...
}
```

- 倘若建構式不是由 new 運算子呼叫，this 就不會是 Animal 物件，而會是全域物件或 undefined 才對。而上述程式碼就是利用這個性質，才在 this 不為 Animal 物件時重新以 new 運算子呼叫建構式，如此一來就能迴避上述的問題了。

---

#### 替類別新增方法

- 將方法當作原型物件（prototype 屬性）的成員新增
- 語法（方法的定義）： `建構式函數.prototype.方法名稱 = function(...) {...}`

```js
var Animal = function(name) {
    this.name = name;
};

Animal.prototype.toString = function() {
    return 'Animal: ' + this.name;
};

var ani = new Animal('德次郎')
console.log(ani.name) //result=> 德次郎
console.log(ani.toString()) //result=> Animal: 德次郎
```

- __不在建構式之中定義，而改在原型中定義的理由__
- (註1)已提過在建構式中追加方法並不符合效率，而其中原由在於每建立一次實體，於建構式中定義的成員就會被複製一次。
- 而與屬性不同的是，方法的內容應該都是一樣的，所以重複複製是一種浪費資源的做法。

- 原型物件(prototype屬性)定義的成員只繼承實體化之後的物件，而不會複製該物件。所謂的「繼承」就是由建構式建立的所有物件將逕自參照建立來源的原型物件。
- 不管建立多少個實體，方法的主體都只有一個，所以能節省記憶體的用量。
- 而且就性質而言，實體在建立之後，即便是新增或刪除成員，實體仍可以被正確辨識。
  - 建構式建立實體，全部的方法、多餘的方法也會複製。
  - 原型定義的成員，只會向原型參照必要的方法。

![image](https://ppt.cc/fqYhPx@.jpg)

>NOTE: 實體也能新增成員
>

```js
var a1 = new Animal('德次郎');
var a2 = new Animal('任三郎');
a1.run = function() { return 'run 方法' };
console.log(a1.run()) // result=> run方法
console.log(a2.run()) // result=> 錯誤(undefined is not a function)

```

### 替類別新增靜態成員

- 所謂的靜態成員就是透過「類別.屬性」或「類別.方法(...)」這類的方法(不透過實體)呼叫的成員，而這些成員已於建構式函數中新增為直接成員。
- 語法(靜態成員的定義)
  - `建構式函數.屬性名稱 = 值`
  - `建構式函數.方法名稱 = function(...){...}`

```js
var Util = function() {};

Util.VERSION = '1.0.0';

Util.getBmi = function(weight, height) {
    return weight/(height*height);
};

console.log(Util.VERSION)
console.log(Util.getBmi(65, 1.81));
```

- VERSION 之所以命名為全部大寫是為了說明這個是常數(讀取專用)，JavaScript 沒有常數這個機制，只命名來區分。
- 靜態屬性(與實體屬性不同)是類別的資訊，所以只要靜態屬性被修改，所有的實體都會被影響。因此大部分的情況下都不建立修改靜態屬性的內容，只存取靜態屬性的內容才是比較妥當的做法。
- 靜態方法並未持有實體，所以就性質而言，也無法存 this (實體)的內容。

#### 繼承類別

>透過繼承某個類別的功能來建立新類別

- 這次要將父類別的實體指定給子類別的 prototype 屬性。下列範例就是先繼承 Person 類別再依此建立 BusinessPerson 類別。

```js
// 父類別
var Person = function() {};
Person.prototype = {
    eat: function() {console.log('嚼嚼、嚼嚼')}
}

// BusinessPerson 類別繼承自 Person 類別
var BusinessPerson.prototype = new Person();
BusinessPerson.prototype.work = function() {console.log('呼哧、呼哧')}

var bp = new BusinessPerson();
bp.eat();  // result=> 嚼嚼、嚼嚼
bp.work(); // result=> 呼哧、呼哧
```

這次的範例將 Person 的實體指定為 BusinessPerson 類別的原型(BusinessPerson.prototype)。因此可從 BusinessPerson 實體參照於 Person 類別定義的 eat 方法。

![image](https://ppt.cc/foZ9mx@.jpg)

#### 定義無法從外部存取的屬性與方法

>不希望使用者存取類別內部的資訊或處理。

- 無法從類別外部存取的成員(屬性、方法)稱為私有成員。可以從外部隨意存取只在類別內部使用的成員，並不是件妥當的事情。所以盡可能將這類成員定義為私有成員，才能提升成員的安全性。
- 下列範例中，將 _name 屬性和 _birth 屬性定義為 Private 屬性，也連帶將 getName 方法與 getBirth 方法定義為存取上述兩種屬性的公開型方法。

- 範例說明
  1. 第一步是在建構式中利用 var 命令定義私有成員。要注意的是，這裡不是以「this.成員名稱 = ~~~」的語法定義。由於這些成員都只是區域變數，所以無法從函數（建構式）的外部存取。
  2. 如果只將私有成員設定成「無法存取」，那就不需要額外定義這些成員，所以才另外定義可存取私有成員的公開型方法。這種方法擁有特別的權限，所以又稱為 Privilege 方法（特權方法）。
  3. 特權方法也是在建構式中定義的（但不是被定義成 prototype 屬性這種成員）。如果是在建構式函數底下定義，當然就能夠自由地存取區域變數，而且區域變數原本會在函數結束時跟著從記憶體中被移除才對，結果因為特權方法（實體）不斷地參照，導致區域變數一直存在於記憶體中。具體來說，區域變數要等到特權方法（實體）消失時才會被移除。
  4. 像這種「參照區域變數的函數內部函數」就稱為閉包函數。
  5. 其餘不需要存取私有成員的方法，也可利用之前介紹的方法定義。

```js
var Person = function(name, birth) {
    // Private 屬性
    var _name = name;       // ----------1
    var _birth = birth;

    // 可存取 Private 屬性的特權方法
    this.getName = function() {
        return _name;       // ----------2
    };

    this.getBirth = function() {
        return _birth;       // ----------2
    };
}

Person.prototype.toString = function() {       // ----------3
    return 'Person: ' + this.getName() + '' + this.getBirth();
};

       // ----------4
var p = new Person('王小明', new Date(1900, 5, 25));
console.log(p.getName())    // result=> 王小明
console.log(p.get.toString())  // result=> Person: 王小明 Mon Jun 25 1900...略
console.log(p._name) // undefined
```


#### 判斷物件的型態

> 依照物件的型態或持有的成員進行不同的處裡

嚴格來說 JavaScript 沒有「類別」這種概念，所以連同型態這個概念也不算存在。但只要使用 instanceof 運算子、in 運算子或 isPrototypeOf 方法，一樣能判斷較為寬鬆的型態。

##### 判斷建構式的型態 --- `instanceof` 運算子

- 語法(判斷建立物件的建構式): __`物件變數 instanceof 建構式`__


```js
var Person = function() {};
var BusinessPerson = function() {};
BusinessPerson.prototype = new Person();
var bp = new BusinessPerson();

console.log(bp instanceof BusinessPerson);
console.log(bp instanceof person);
console.log(bp instanceof Object);
// result=> true (所有的物件都繼承了 Object)
```

##### 確認參照的原型 --- `isPrototypeOf` 運算子

- 這個方法可以用來確認原型(prototype 屬性)

```js
console.log(BusinessPerson.prototype.isPrototypeOf(bp))
console.log(Person.prototype.isPrototypeOf(bp))
console.log(Object.prototype.isPrototypeOf(bp))
// result=> true
```

##### 判斷有無持有成員 --- `in` 運算子

- JavaScript 的物件不一定只能透過建構式建立，也可以直接透過語法建立，而且就算是透過建構式建立，也能另外對實體新增成員。
- 此時若想更謹慎地確認物件是否擁有成員，可以使用 in 運算子。

```js
var obj = {
    method1: function() {},
    method2: function() {}
    }
console.log('method1' in obj)
console.log('method3' in obj)
```

#### 避免類別名稱產生衝突

> 減少類別之間產生命名上的衝突

- 要定義命名空間只要季戀空白的物件即可(程式碼的[1]就定義了 Wings 命名空間)
- __`var Wings = {};`__
- 看似不起眼的定義卻能以「Wings || {}」，在 Wings 為空白（不存在）時建立命名空間。
- 之後可以利用新增靜態成員的方式以「命名空間.類別 = ~~」的語法對命名空間定義新的建構式。[2] 就對 Wings 命名空間定義了 Person 的類別。
- 要注意的是，要替命名空間底下的類別建立體就得使用完全描述名稱[3]。

```js
var Wings = Wings || {};  // -----[1]

Wings.Person = function(name, birth) { // ---[2]
    this.name = name;
    this.birth = birth;
}

Wings.Person.prototype.toString = function() {
    return this.name + '__' + this.birth;
}

var p = new Wings.Person('許xx', new Date(1999, 9, 9)); // -----[3]
console.log(p.toString())
// result=> 許xx__Sat Oct 09 1999 00:00:00 GMT+0800 (CST)
```

#### 定義有階層構造的命名空間

> 應用程式的規模較大時，可將命名空間定義成階層構造再進行管理

- namespace 函數利用「.」將命名空間分割階層構造[1]之後，在於上層階層（變數 parent）底下依序新增命名空間[2]。在最上層的命名空間就是 Global 物件----於瀏覽器環境底下的就是 window 物件。
- namespace 函數的回傳值為最後建立的命名空間（以這次的範例就是 Myapp.Recipe.Samples 物件）[3]。
- 再將這個回傳值儲存至變數，變數就能被當成命名空間的暱稱使用。換句話說，就不需要再使用「Myapp.Recipe.Samples.MyClass」這個完全描述的名稱，而可以改用「ns.MyClass」這個比較簡短的名稱。

```js
var namespace = function(ns) {
    // 以「.」分割命名空間
    var elems = ns.split('.');     // [1]
    var parent = window;

    // 依序新增後續的命名空間以形成階層構造
    for (var i = 0, len = elems.length; i < len; i++) {    // ---[2]
        parent[elems[i]] = parent[elems[i]] || {};
        parent = parent[elems[i]];                         // ---[2]
    }
    return parent;     // ---[3]
};

// 新增 Myapp.Recipe.Samples 命名空間
var ns = namespace('Myapp.Recipe.Samples');     // ---[4]
 // 定義命名空間之下的類別
ns.MyClass = function() {};
var c = new ns.MyClass();
console.log(c instanceof Myapp.Recipe.Samples.MyClass)  // ---[4]
```



#### 正規表達式的使用

- 在 JavaScript 中負責用來剖析這些正規表達式，並且提供搜尋功能就是 __RepExp__ 物件
- 可以利用 RegExp 建構式或正規表示法建立。
  - 語法(RegExp): __`var 變數 = new RegExp(正規表示式, 選項)`__
    - RegExp 建構式以「\\」 讓「\」跳脫
  - 語法(正規表示式): __`var 變數 = /正規表示式/選項`__
    - 正規表示法語法以「\/」 讓「/」跳脫
- 正規表達式的主要形式：
  - 基本:
    - __`xyz`__: 匹配「xyz」這個字串。
    - __`[xyz]`__: 匹配 x、y、z 其中一個字元。
    - __`[^xyz]`__: 匹配 x、y、z 之外的單一字元。
    - __`[a-z]`__:  匹配 a~z 之間的單一字元。
    - __`[x|y|z]`__: 匹配 x 或 y 或 z
  - 量指定:
    - __`x*`__: 0 個字元以上的 x 匹配。("to*" 等於與 "t"、"to"、"too" 匹配)
    - __`x?`__: 0 或一個字元以上的 x 匹配。("to?" 等於與 "t" 或 "to" 匹配，但不與 "too" 匹配)
    - __`x+`__: 與 1 個字元以上的 x 匹配。("to+" 等於與 "to"、"too" 匹配，但不與 "t" 匹配)
    - __`x{n}`__: 與 x 匹配 n 次。("[0-9]{4}" 代表 4 位數的數字)
    - __`x{n,}`__: 與 x 匹配 n 次以上。("[0-9]{4}" 代表 4 位數以上的數字)
    - __`x{m,n}`__:  與 x 匹配 m~n 次。("[0-9]{2,4}" 代表 2~4 位數的數字)
  - 位置指定:
    - __`^`__: 開頭匹配。
    - __`$`__: 結尾匹配。
  - 文字指定:
    - __`.`__: 與任意 1 個字元匹配。
    - __`\w`__: 與大/小寫英文字母、數字、底線匹配。(與 "[A-Za-z0-9_]" 的意思相同)
    - __`\W`__: 與該字元以外的字元匹配(與"[^w]"的意思相同)
    - __`\d`__: 與數字匹配(與"[0-9]"的意思相同)
    - __`\D`__: 不與數字片匹配()(與"[^0-9]"的意思相同)
    - __`\n`__: 與斷行字元(換行)匹配
    - __`\r`__: 與 Enter 字元匹配。
    - __`\f`__: 與換頁字元匹配
    - __`\t`__: 與定位點字元匹配
    - __`\v`__: 與垂直定位點字元匹配
    - __`\s`__: 與空白字元匹配(與"[\n\r\t\v\f]"的意思相同)
    - __`\S`__: 不與空白字元匹配(與"[^\s]"的意思相同)
    - __`\~`__: 以「~」代表的字元


- 正規表達式的選項：
    - `g`: 是否匹配整段字串
    - `i`: 是否將大/小寫英文字母視為相同
    - `m`: 是否將換行字元視為行首/尾(多行模式)
    - 也可以多重指定: `'gi'`
