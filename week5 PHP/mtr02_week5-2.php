

<?php

// class Dog {
    //首先把 hello() 設定成 public 的function ，用 $a->hello() 它
//     public $name = ', name is default';
//     public function hello() { 
//         echo $this->getHelloSentence();
//     }
//     private function getHelloSentence(){
//         return '<br> I am a dog' . $this->name; //
//     }
// }

// $a = new Dog();
// $a->name = ', my name is Leo';
// $a->hello(); // JS 裡面是 a.hello()

// $b = new Dog();
// $b->name = ', my name is Boo';
// $b->hello();

// ?>


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

    // setter 專門設定變數
    public function setName($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }
}

$a = new Dog();
$a->setName(', my name is Leo'); // JS 裡面是 a.hello()
$a->hello();
// result=> I am a dog, my name is Leo
$b = new Dog();
$b->setName(', my name is Boo'); // 執行這個的時候 this 就是 b的名稱
$b->hello();
// result=> I am a dog, my name is Boo
?>
