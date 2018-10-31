<!-- 子留言的部分 -->
<div class='meg__subcommnet'>
    <div class='meg__commnet-header'>
        <div class='meg__commnet-author'><? echo $sub_comment['nickname'] ?></div>
        <div class='meg__commnet-timestmp'><? echo $sub_comment['created_at'] ?></div>
    </div>
    <div class="meg__commnet-content">
        <? echo htmlspecialchars($sub_comment['content'], ENT_QUOTES, 'UTF-8') ?>
    </div>
</div>