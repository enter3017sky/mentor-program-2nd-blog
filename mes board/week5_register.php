<!-- 註冊的頁面 -->
<?

// Create connection 建立連接資料庫
require_once('conn.php');
if (!empty($_POST['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $nickname = $_POST['nickname'];
    $sql = "INSERT INTO users (username, password, nickname)
    VALUES ('$username', '$password', '$nickname')";
    $result = $conn->query($sql);

        // 註冊之後直接 setcookie ，用戶是登入狀態，就可以直接留言了
    if ($result) {
        $last_id = $conn->insert_id;
        setcookie("user_id", $last_id, time()+3600*24, "/");
    }
        $conn->close();
        header('Location: week5_index.php');
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
        <form class='login__form' action='/enter3017sky/week5_register.php' method='POST'>
        <!-- required="required" 提交之前填寫輸入字段的提示 -->
            <div>User Register</div>
            <label name='username'>username: <input name='username'  type="text" required="required" placeholder="輸入您的帳號"/></label>
            <label name='password'>password: <input name='password' type='password' required="required" placeholder="輸入您的密碼" /></label>
            <label>nickname: <input name='nickname' required="required" placeholder="輸入您的暱稱" /></label>
            <div id='btn'>
                <button class='btn' name='submit' type='submit'>註冊</button>
            </div>
            <a href='/enter3017sky/week5_login-2.php' style="color:gray; text-decoration: none; font-size: 16px; ">已有帳號？點我登入！<a>
        </form>
    </div>
    <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>
