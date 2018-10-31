
<?php
    $username = '';
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        if ($username === 'admin' && password === 'admin') {
?>
        <h1>登入成功</h1>
<?php
        } else {
?>
        <h1>登入失敗</h1>
<?php
        }
    }
?>

<form action='/enter3017sky/index.php' method='POST'>
    username:<input name='username' />
    password:<input name='password' />
</form>