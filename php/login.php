<?php

include 'connect.php';

$username = $_GET["username1"];
$password = $_GET["password1"];

$query = "SELECT * 
FROM student join user_login
ON student.student_id = user_login.user_login_student_id
WHERE student_user_name = :un
AND user_login_raw = :pw";

$statement = $db->prepare($query);

$statement->bindValue(':un', $username);
$statement->bindValue(':pw', $password);

$statement->execute();
$result = $statement->fetch();

$db_username = $result["student_user_name"];
$db_password = $result["user_login_raw"];



if ( empty($result) ){
	echo "Sorry, username or password is incorrect. Please try again";
	}else{
		$response = "1";
		echo $response;
	}
$statement->closeCursor();

?>
