
<?php
    $username = 'student2nd';
    $password = 'mentorstudent123';
    if(isset($_POST['username']) && isset($_POST['password']) ){
        $username = $_POST['username'];
        $password = $_POST['password'];
    if ($username === 'student2nd' && $password === 'mentorstudent123') {
        echo '登入成功';
    } else {
        echo '登入失敗';
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="week5_index.css" />
</head>
<body class='body__set'>
    <header class='head__main'>
        <div class='head__title'>留言版</div>
    </header>
    <div class='login__mian'>
        <form class='login__form' action='/enter3017sky/login.php' method='POST'>
        <!-- required="required" 提交之前填寫輸入字段的提示 -->
            <label class='input__user input' name='nickname'>nickname: <input name='username' required="required" /></label>
            <!-- <label class='input__pass input' name='password'>password: <input name='password' required="required" /></label> -->
            <div id='btn'>
                <button class='btn' name='submit' type='submit' action='/enter3017sky/week5_signup.php'>註冊</button>
                <!-- <button class='btn' name='submit' type='submit'>登入</button> -->
            </div>
        </form>
    </div>
    <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>
