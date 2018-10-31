<?php
if(isset($_POST['name'])) {
    $name = $var = $_POST['name'];
    $var = sanitizeString($_POST['name']);
} else $name = '(Not entered)';

// echo <<<_END ... _END; 定界符。
echo <<<_END

<html>
    <head>
        <title>Form Test</title>
    </head>
    <body>
        your name is: $name<br>
        <form method="POST" action="formtest.php">
        <label>
        What is your name?
        <input type='text' name='name' /></label>
        <input type="submit" />
        </form>
    </body>
</html>


_END;
?>

<?
function sanitizeString($var) {
    if (get_magic_quotes_gpc()) $var = stripslashes($var);
    $var = htmlentities($var);
    $var = strip_tags($var);
    return $var;
}

function sanitizeMySQL() {
    $var = mysql_real_escape_string($var);
    $var = sanitizeString($var);
    return $var;
}
?>

