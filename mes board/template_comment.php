<!-- 插入留言(comment)及子留言(subcomment) -->

<div class='meg__commnet'>
    <div class='meg__wrap'>
        <div class='meg__commnet-header'>
            <!-- 插入暱稱 以及 留言時間 -->
            <div class='meg__commnet-author'><? echo $row['nickname'] ?></div> 
            <div class='meg__commnet-timestmp'><? echo $row['created_at'] ?></div>
        </div>
        <div class="meg__commnet-content">  <!-- 使用 htmlspecialchars 函式轉換字元 -->
            <? echo htmlspecialchars($row['content'], ENT_QUOTES, 'UTF-8') ?>
        </div>
    </div>

<?
    $parent_id = $row['id'];    // 子留言
    // 定義一個新的變數
    $sql_child = "SELECT comments.*, users.nickname FROM comments left join users on user_id = comments.user_id WHERE parent_id = $parent_id ORDER BY created_at DESC";
    $result_child = $conn->query($sql_child);
    while ($sub_comment = $result_child->fetch_assoc()) {    // output data of each row
        require("template_subcomment.php");        //引入子留言的區塊
    }
?>

    <div class='form__wrap'>
        <form method="POST" action="/enter3017sky/add_comment.php">
            <label name="content">
                <div class='meg__form-textarea'>
                    <textarea name='content' type='textarea' placeholder="留言內容"></textarea>
                </div>
            </label>
            <input name='parent_id' type='hidden' value="<? echo $row['id'] ?>" />
            <?
                if ($is_login) {
                    echo "<input class='meg__form-submit' type='submit' value='提交' />";
                } else {
                    echo "<input class='meg__form-submit' type='submit' value='請先登入' disabled />";
                }
            ?>
        </form>
    </div>
</div>