<!-- 
    index.php => 簡單表單 => POST form.php => 顯示資料
    PHP 跟 HTML 連接起來的語法：常用。
-->
<?php
    $username = '';
    if(isset($_POST['username']) && isset($_POST['password']) ){
        $username = $_POST['username'];
        $password = $_POST['password'];
    // if ($username === 'admin' && $password === 'admin') {
    if ($password === 'admin') {
?>
        <h1>登入成功: <? echo $username ?></h1>
<?php
        } else {
        header('Location: index.php');
        }
    }
?>


