<!-- _GET: PHP 幫你準備好的變數
    宣告一個空字串，用 isset 檢查它有沒有被設定
    你可以用 GET 存到你想要的東西
    http://localhost:8080/enter3017sky/index.php?username=admin
-->


<?php
    $username = '';
    if(isset($_POST['username']) && isset($_POST['password']) ){
        $username = $_POST['username'];
        $password = $_POST['password'];
    if ($username === 'admin' && $password === 'admin') {
        echo '登入成功';
    } else {
        echo '登入失敗';
        // header('Location: loginfail.php');
        // 轉址：登入失敗的頁面
    }
}
?>
<form action='/enter3017sky/week5_1_POST的方法示範.php' method='POST'>
    username:<input name='username' />
    password:<input name='password' />
    <input type='submit' />
</form>


