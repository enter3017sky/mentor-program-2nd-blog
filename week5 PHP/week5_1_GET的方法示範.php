<!-- _GET: PHP 幫你準備好的變數
    宣告一個空字串，用 isset 檢查它有沒有被設定
    你可以用 GET 存到你想要的東西
    http://localhost:8080/enter3017sky/index.php?username=admin
-->
<?php
    $username = '';
    if(isset($_GET['username'])){
        $username = $_GET['username'];
    }
    // 把 username 印出來。用 . 連接字串。
    echo 'usename:' . $username . '<br>';
    if ($username === 'admin') {
        echo 'hello world!';
    } else {
        echo 'fail!';
    }
?>
<form action='/enter3017sky/index.php' method='POST'>
    username:<input name='username' />
    password:<input name='password' />
    <input type='submit' />
</form>