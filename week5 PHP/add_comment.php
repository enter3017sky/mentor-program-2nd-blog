<?
    // 伺服器執行 add_comment.php 前，執行引入的 conn.php
    require_once('conn.php');

    // $nickname = $_POST['nickname'];
    $content = $_POST['content'];
    $parent_id = $_POST['parent_id'];
    $user_id = $_COOKIE['user_id'];
    // 在 comments 資料表中 的 user_id, content, parent_id 
    $sql = "INSERT INTO comments (user_id, content, parent_id) VALUES ($user_id, '$content', $parent_id)";

    
    if ($conn->query($sql) === TRUE) {
        header('Location: week5_index.php');
    } else {
        echo 
        "<h1>留言失敗</h1>" . "<br><h4>" . "Error: <br>" . $sql . "</h4><br>" . $conn->error;
    }

    $conn->close();
    ?>
