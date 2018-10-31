<?    // 登入機制
    $is_login = false;
    $user_id = '';
    $nickname = '';
    // 有時候 isset 的判斷可能會跟我們想像中的不一樣，所以在加上 !empty 的判斷
    if(isset($_COOKIE["user_id"]) && !empty($_COOKIE["user_id"])) {
        $is_login = true; 
        $user_id = $_COOKIE["user_id"];
    } else {

    }

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Message Board</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .body__set {
            margin: 0;
            min-height: 100vh;
            font-family: 'Courier New', Courier, monospace;
            background: rgb(214, 217, 220);
        }
        .main{
            /* display: flex;
            flex-direction: column; 
            align-items:center;
            justify-content: center; */
            position: relative;
            top: 60px;
            max-width: 600px;
            margin: 30px auto;
        }
        .head__main {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1;
            display: flex; 
            flex: 0;
            height: 60px;
            justify-content: center;
            align-items: center;
            background: rgb(100, 100, 100);
        }
        .bottom__footer {
            display: flex; 
            position: fixed;
            bottom: 0;
            width: 100%;
            justify-content: center;
            align-items: center;
            z-index: 1;
            background: rgb(100, 100, 100);

            flex-direction: column;
        }
        .bottom__title {
            font-size: 12px;
            color:rgb(160, 160, 160);
        }
        .head__title {
            /* font-family:'Microsoft JhengHei'; */
            font-size: 40px;
            display: flex;
            justify-content: center; 
            align-items: center; 
            margin:0 auto;
        }
        .head__logout {
            position: relative;
            right: 20px;
            padding: 0 15px;
            height: 30px;
            font-size: 18px;
            color: #303030;
            text-decoration: none;
            border-radius: 5px;
            background: rgb(120, 120, 120);
            display: flex;
            align-items: center;

            transition: all 0.2s ease-in;
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
        }
        .head__logout + .head__logout {
            margin-left: 10px;
        }
        .head__logout:hover {
            cursor: pointer;
            background: rgb(160, 160, 160);
            box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.5);
        }
        body > div > div.meg__form > form {
            margin-bottom: -0;;
        }
        .meg__form {
            /* display: flex; */
            /* max-width: 600px; */
            /* margin: 0 auto; */
            background: #909090;
            padding: 15px;
            border-radius: 10px;
            transition: all 0.2s ease-in;
            box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.7);
        }
        /* .form__wrap:hover, */
        /* .meg__form-top:hover,
        .meg__form-textarea:hover, */
        .meg__form:hover {
            cursor: pointer;
            /* filter: brightness(1.1); */
            /* transition: all 0.2s ease-in; */
            box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.7);
        }
        /* 輸入暱稱 */
        .meg__form-top {
            color: white;
            background: #aaa;
            padding: 10px;
            border-radius:8px;
            /* transition: all 0.2s ease-in; */
        }
        .meg__form-top > input {
            width: 98%;
            border-radius:3px;
            background: #F5F5F5;
            border: none;
        }

        /* 留言板的區塊*/
        .meg__form-textarea { 
            background: #aeaeae;
            border-radius: 8px;
            /* margin-top: 10px; */
            display: flex;
            transition: all 0.2s ease-in;
        }
        .meg__form-textarea > textarea {
            margin: 20px;
            width: 100%;
            height: 60px;
            border-radius:3px;
            background: #F5F5F5;
            border: none;
        }
        .meg__form-submit {
            /* width: 80px; */ /* 不要設寬度，默認寬度 */
            padding: 0 15px; /* 按鈕文字左右的留白 */
            height: 35px;
            margin-top: 15px;
            font-size: 18px;
            border-radius: 6px;
            background: rgb(120, 120, 120);
            transition: all 0.2s ease-in;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
        .meg__form-submit:hover {
            cursor: pointer;
            background: rgb(160, 160, 160);
        }

        .meg__commnet {
            /* max-width: 500px; */
            background: #909090;
            padding: 15px;
            margin-top: 20px ;
            border-radius: 8px;
            box-sizing: border-box;
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
        }
        .meg__subcommnet {  
            background: #777777;
            padding: 10px;
            border-radius: 8px;
            margin: 15px 0 0 20px;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
        }
        .meg__wrap {  /* 包裹每個留言框 */
            background: #777777;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.5);
        }
        .form__wrap { /* 包裹每個留言區塊 */
            background: #777777;
            padding: 10px;
            border-radius: 8px;
            margin-top: 15px;
            transition: all 0.2s ease-in;
        }
        .meg__commnet-content {
            /* text-align: start; */
            background: #aeaeae;
            font-size: 14pt;
            padding: 5px;
            border-radius: 8px;
            margin-top: 5px;
            /* 讓PHP 插入的文字可以換行 */
            word-break: break-all; 
        }
        

        .meg__commnet-header { 
            display: flex;
            justify-content: space-between;
        }
        .meg__commnet-header > div { /* 包裹暱稱、時間的樣式 */
            color: #E3E3E3;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            padding: 1px 6px 0px;
            display: flex;
            align-items: center;
            /* display: inline-block;
            background:#676767;
            border: 2px solid #a1a1a1;  */
        }
        .meg__page-bar {
            display: flex;
            width: 300px;
            box-sizing: border-box;
            justify-content: space-around;
            padding-inline-start: 0px;
            list-style: none;
            /* align-content: space-between; */
            margin: 5px auto; 
            /* padding: none; */
        }
        .meg__page > a {
            text-decoration: none;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Courier New', Courier, monospace;
            color: #909090;
        }
        .meg__page {
            display: flex;
            align-content: flex-start;
            /* border: 1px solid black; */
            padding: 0 1rem;
            cursor: pointer;
            border-radius: 0.2rem;
            transition: all 0.2s ease-in;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
        }
        .meg__page:hover {
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
        }
        .meg__page + .meg__page {
            margin-left: 1rem;
        }
        /* .meg__commnet-author {
            margin-left: 10px;
        } */
</style>
</head>
<body class='body__set'>
    <header class='head__main'>
        <div class='head__title'>Message Board</div>
<?
    if (!$is_login) {  // 如果沒登入顯示註冊、登入的按鈕
?>   
    <a class='head__logout' href="week5_register.php" id="logout">註冊</a>
    <a class='head__logout' href="week5_login-2.php" id="logout">登入</a>
<?  } else {        // 如果有登入的話顯示登出的按鈕
?>
    <a class='head__logout' href="week5_logout.php" id="logout">登出</a>
<?  }
?>
    </header>
    <div class='main'>
        <div class='meg__form'>
            <form method="POST" action="/enter3017sky/add_comment.php"> <!--負責插入留言-->
                <!--這個表單會以 POST 的方式送給 add_comment.php 這個檔案進行處理 -->
                <div class='meg__form-input'>
                    <label name='nickname'>
                        <!-- <div class='meg__form-top'> -->
    <!-- // 插入暱稱
    // while($row_dis = $result_display_nickname->fetch_assoc()) {
    //     include('display_nickname.php');
    // } -->

                            <!-- <input name='nickname' type='text' placeholder="暱稱" /> -->
                        <!-- </div> -->
                    </label>
                </div>
                <label name="content">
                    <div class='meg__form-textarea'>
                        <textarea name='content' type='textarea' placeholder="留言內容"></textarea>
                    </div>
                </label>
                
                <!-- 小技巧 插入一個看不見的東西來拿到資料-->
                <input type='hidden' name='parent_id' value="0" />
        <?
            if ($is_login) {
                echo "<input class='meg__form-submit' type='submit' value='提交' />";
            } else {
                echo "<input class='meg__form-submit' type='submit' value='請先登入' disabled />";
            }
        ?>
            </form>
        </div>
        <div class='meg__commnets'>
<?
     require_once('conn.php');

    // 選擇 comments資料表中的 id content created_id 以及 users 資料表的 nickname
    $sql = "SELECT comments.id, comments.content, comments.created_at, users.nickname FROM comments 
    LEFT JOIN users ON comments.user_id = users.id WHERE parent_id = 0 ORDER BY created_at DESC"; //order by created_at DESC 降冪排序
    $result = $conn->query($sql);
    
    // echo $result;
    while($row = $result->fetch_assoc()) {    // output data of each row
        require('template_comment.php'); // 插入留言、子留言
    }
    // $conn->close();

?>
        </div>
    </div>
    <footer class='bottom__footer'>
        <ul class='meg__page-bar'>
            <li class='meg__page'><a>&#60;</a></li>
            <li class='meg__page'><a href="#">1</a></li>
            <li class='meg__page'><a href="#">2</a></li>
            <li class='meg__page'><a>3</a></li>
            <li class='meg__page'><a>4</a></li>
            <li class='meg__page'><a>5</a></li>
            <li class='meg__page'><a>6</a></li>
            <li class='meg__page'><a>7</a></li>
            <li class='meg__page'><a>&#62;</a></li>
        </ul>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer>
</body>
</html>