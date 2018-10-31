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



<?php
    $username = '';
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        if ($username === 'admin' && password = 'admin') {
?>
        <h1>登入成功</h1>
<?php
        } else {
?>
        <h1>登入失敗</h1>
<?php
        }
    }
?>

<form action='/enter3017sky/index.php' method='POST'>
    username:<input name='username' />
    password:<input name='password' />
</form>