<!-- 
    index.php => 簡單表單 => POST form.php => 顯示資料
    PHP 跟 HTML 連接起來的語法：常用。
    前端用 form submit 東西
    後端就可以讀取到。
-->
<?

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mentor_program_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("連接失敗 Connection failed: " . $conn->connect_error);
}
echo "連接成功 Connected successfully" . '<br>';
?>
<?

$sql = "SELECT * FROM comments";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"] . " ,niname: " . $row["user_id"] . "Content: " . $row['content'] . '<br>';
    }
} else {
    echo "0 results";
}

?>


<?
//   $sql = "INSERT INTO comments (user_id, content, parent_id) VALUES ('$user_id', '$content', $parent_id)";
// $sql = "INSERT INTO comments VALUES ('user_id')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

?>

<div>
    <head>留言版</head>
</div>
<div>
<form action='/enter3017sky/login.php' method='POST'>
    username:<input name='username' />
    password:<input name='password' />
    <input type='submit' />
</form>
</div>
<div>
    <footer>enter3017sky MTR02 Homework Week5</footer>
</div>
