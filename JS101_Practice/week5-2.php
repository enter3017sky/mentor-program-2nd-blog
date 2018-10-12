<?php
// 繼承 Inheritance

class Animal {
    public $name = 'default';

    //初始化
    public function __construct($name) { //建構子
        $this->name = $name;
    }
    public function sayHello(){
        echo 'I am' . $this->name;
    }
}

class Dog extends Animal {
    public function run() {
        echo ' I am running';
    }
}

$a = new Dog('leo');
$a->sayHello();
$a->run();

?>

public 在哪裡的可以存取到這個方法
<?php

class Dog {
    private function hello() { 
        echo "I am dog";
    }
}

$dog = new Dog();
$dog->hello();

?>
private 私有的。呼叫的事後不讓你呼叫
把細節藏在 class 裡面

<?php

class Dog {
    //首先把 hello() 設定成 public 的function ，用 $a->hello() 它
    public function hello() { 
        echo $this->getHelloSentence();
    }
    private function getHelloSentence(){
        return 'I am a dog';
    }
}

$a = new Dog();
$a->hello(); // JS 裡面是 a.hello()

?>