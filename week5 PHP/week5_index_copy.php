
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
            min-height: 100vh;
            font-family: 'Courier New', Courier, monospace;
            background: rgb(180, 180, 180);
        }

        .main{
            /* display: flex;
            flex-direction: column; 
            align-items:center;
            justify-content: center; */
            max-width: 600px;
            margin: 30px auto;
        }
        .meg__form {
            /* display: flex; */
            /* max-width: 600px; */
            /* margin: 0 auto; */
            background: #909090;
            padding: 20px;
            border-radius: 10px;
            /* box-sizing: border-box; */
        }
        /* 輸入暱稱 */
        .meg__form-top {
            color: white;
            background: #aaa;
            padding: 10px;
            border-radius:8px;
        }
        .meg__form-top > input {
            width: 98%;
        }

        /* 留言板的區塊*/
        .meg__form-textarea { 
            background: #aeaeae;
            border-radius:10px;
            margin-top: 10px;
            display: flex;
        }
        .meg__form-textarea > textarea {
            margin: 20px;
            width: 100%;
            height: 100px;
        }

        .meg__form-submit {
            width: 80px;
            height: 35px;
            margin-top: 15px;
            font-size: 18px;
            border-radius: 5px;
            background: rgb(120, 120, 120);
            transition: all 0.2s ease-in;
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
            border-radius: 10px;
            box-sizing: border-box;
        }
        .meg__subcommnet {  
            background: #777777;
            padding: 10px;
            border-radius: 10px;
            margin: 15px 0 0 20px;
        }
        .meg__subform {
            background: #777777;
            padding: 10px;
            border-radius: 10px;
            margin-top: 20px;
        }
        .meg__commnet-content {
            background: #aeaeae;
            font-size:14pt;
            padding:5px;
            border-radius:10px;
            margin-top: 5px;
            /* 讓PHP 插入的文字可以斷行 */
            word-break: break-all; 
        }
        .meg__commnet-header {
            display: flex;
            justify-content: space-between;
        }
        .meg__commnet-header > div {
            display: inline-block;
            color:white;
            background:#676767;
            padding:10px;
            border-radius:8px;
        }
</style>
</head>
<body class='body__set'>
    <!-- <header class='head'>
        <div class='head__title'>留言版</div>
    </header> -->
    <div class='main'>
        <div class='meg__form'>
            <form method="POST" action="add_comment.php"> <!-- 負責插入留言-->
                <div class='meg__form-input'>
                    <div class='meg__form-top'>
                        <input name='nickname' type='text' placeholder="暱稱" />
                    </div>
                    <!-- <div class='meg__form-top'>2018-09-19 10:45</div> -->
                </div>
                <div class='meg__form-textarea'>
                    <textarea name='content' type='textarea' placeholder="留言內容"></textarea>
                </div>
                <!-- 小技巧 插入一個看不見的東西來拿到資料-->
                <input type='hidden' name='parent_id' value="0" />
                <input class='meg__form-submit' type='submit' value='提交'/>
            </form>
        </div>
        <div class='meg__commnets'>
<?
    require_once('conn.php');
    $sql = "SELECT * FROM comments where parent_id = 0 order by created_at DESC";
    //order by created_at DESC 降冪排序
    //  ASC 代表結果會以由小往大的順序列出
    // 而 DESC 代表結果會以由大往小的順序列出
    $result = $conn->query($sql);
    // output data of each row
    while($row = $result->fetch_assoc()) {
?>
            <div class='meg__commnet'>
                <div class='meg__commnet-header'>
                    <!-- 插入暱稱 以及 留言時間 -->
                    <div class='meg__commnet-author'><? echo $row['nickname'] ?></div> 
                    <div class='meg__commnet-timestmp'><? echo $row['created_at'] ?></div>
                </div>
                <div class="meg__commnet-content">
                    <? echo $row['content'] ?>
                </div>
<?
    // 子留言
    $parent_id = $row['id'];
    // 定義一個新的變數
    $sql_child = "SELECT * FROM comments where parent_id = $parent_id order by created_at DESC";

    $result_child = $conn->query($sql_child);
    // output data of each row
    while ($sub_comment = $result_child->fetch_assoc()) {
        //引入子留言的區塊
        include_once("template_subcomment.php");
    }
?>
                <div class='meg__subform'>
                    <form method="POST" action="add_comment.php">
                        <div class='meg__form-input'>
                            <div class='meg__form-top'>
                                <input name='nickname' type='text' placeholder="暱稱" />
                            </div>
                            <!-- <div class='meg__form-top'>2018-09-19 10:45</div> -->
                        </div>
                        <div class='meg__form-textarea'>
                            <textarea name='content' type='textarea' placeholder="留言內容"></textarea>
                        </div>
                        <input name='parent_id' type='hidden' value="<? echo $row['id'] ?>" />
                        <input class='meg__form-submit' type='submit' value='提交'/>
                    </form>
                </div>
<?
    }
?>
            </div>
        </div>
    </div>
    <!-- <footer class='bottom__footer'>
        <div class='bottom__title'>enter3017sky MTR02 Homework Week5</div>
    </footer> -->
</body>
</html>