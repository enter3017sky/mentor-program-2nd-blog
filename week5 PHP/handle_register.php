<?
// Create connection 建立連接資料庫
require_once('conn.php');

$username = $_POST['username'];
$password = $_POST['password'];
$nickname = $_POST['nickname'];

$sql = "INSERT INTO users (username, password, nickname)
VALUES ('$username', '$password', '$nickname')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}



?>