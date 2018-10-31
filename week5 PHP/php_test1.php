<div>
    <div>PHP 語法</div>
    <ul>
        <li>變數要用 $ 開頭</li>
        <li>字串連接用 . </li>
        <li>結尾要 ;</li>
    </ul>
</div>

<?php
// php forloop 0~9
    for($i = 0; $i < 10; $i++) {
        echo $i . '<br>';
    }
?>

<?php
// php forloop 0~9
    echo '<ul>';
    for($i = 0; $i < 10; $i++) {
        echo '<li>'.$i.'</li>';
    }
    echo '</ul>';
?>



<!-- 沒有包在 php 程式碼裡面的東西它都會直接回傳，所以可以改成這樣 -->
<ul>
<?php
    for($i = 0; $i < 10; $i++) {
        echo '<li>'.$i.'</li>';
    }
?>
</ul>