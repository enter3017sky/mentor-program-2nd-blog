<!-- 登入失敗的頁面 -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .body__set {
        margin: 0;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        font-family: 'Courier New', Courier, monospace;
    }
    .head__main,
    .bottom__footer {
        display: flex;
        flex: 0;
        height: 60px;
        justify-content: center;
        align-items: center;
        background: rgb(100, 100, 100);
    }
    .head__title{
        font-family:'Microsoft JhengHei';
        font-size: 40px;
    }
    .bottom__title {
        font-size: 12px;
        color:rgb(160, 160, 160);
    }
    .head__title {
        display: flex;
        font-size: 30px;
    }
    .login__mian {
        display: flex;
        flex: 1;
        background: rgb(180, 180, 180);
        justify-content: center;
        align-items: center;
    }
    .login__info-box {
        display: flex;
        /* justify-content: space-around; */
        align-items: center;
        flex-direction: column; /* input btn 排列方向 */
        width: 300px; 
        height: 200px;
        font-size: 24px;
        background: rgb(90, 90, 90);
        border-radius: 8px;
        text-transform: uppercase;
        transition: all 0.2s ease-in;
    }
    .login__info:hover {
        filter: brightness(1.2);
        box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.9); 
    }
    .login__info {
        margin: 30px 0 ;
    }
    .input:hover {
        cursor: pointer;
    }
    .btn {
        width: 100px;
        height: 40px;
        font-size: 18px;
        border-radius: 5px;
        background: rgb(120, 120, 120);
        transition: all 0.2s ease-in;
    }
    .btn:hover {
        cursor: pointer;
        background: rgb(160, 160, 160);
    }
    </style>
</head>
<body class='body__set'>
    <header class='head__main'>
        <div class='head__title'>留言版</div>
    </header>
    <div class='login__mian'>
        <form class='login__info-box' action='/enter3017sky/week5_login.php' method='POST'>
            <h1 class='login__info'>登入失敗</h1>
            <div id='btn'>
                <button class='btn' name='submit' type='submit'>回上一頁</button>
            </div>
        </form>
    </div>
    <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>
