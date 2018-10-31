<!-- 登入的頁面 -->
<?
    require_once('conn.php');

    $error_megssage = '';

    if(!empty($_POST['username'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        // step1. 準備好query
    $stmt = $conn->prepare("SELECT * FROM users WHERE username=? and password=?");

        // step2 bind_param 加進去
    $stmt->bind_param("ss", $username, $password);
        // step3 執行
    $stmt->execute();
    $result = $stmt->get_result();

    // echo mysql_error($conn);

    if ($result->num_rows > 0) { // 代表有找到資料 登入成功
        $row = $result->fetch_assoc();
        setcookie("user_id", $row['id'], time()+3600*24);
        header('Location: week5_index.php');
    } else {
        // echo '登入失敗';
        // header('Location: loginfail.php');
        // 轉址：登入失敗的頁面
        $error_megssage = '帳號或密碼錯誤';
        // 如果登入失敗，訊息顯示在登入框裡面
    }

}

$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>登入</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="week5_index.css" />
</head>
<body class='body__set'>
    <header class='head__main'>
        <div class='head__title'>留言版</div>
    </header>
    <div class='login__mian'>
        <form class='login__form' action='week5_login-2.php' method='POST'>
        <!-- required="required" 提交之前填寫輸入字段的提示 -->
            <div>User Login</div>
            <label class='input__user input' name='username'>
                username: <input name='username' type="username" required="required" placeholder="輸入您的帳號"/>
            </label>
            <label class='input__pass input' name='password'>
                password: <input name='password' type='password' required="required" placeholder="輸入您的密碼" />
            </label>
            <!-- <label class='input__nickname input' name='nickname'>
                nickname: <input name='nickname' value="admin" required="required" />
            </label> -->
            <?  
                if($error_megssage !== '') {
                    echo $error_megssage;
                }
            ?>
            <div id='btn'>
                <button class='btn' name='submit' type='submit'>登入</button>
                <button class='btn'><a href='week5_register.php' role="a_btn">註冊</a></button>
            </div>
        </form>
    </div>
    <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>
