<?php

include 'connect.php';

$firstname = $_GET["phpfirstname"];
$lastname = $_GET["phplastname"];
$username = $_GET["phpusername"];
$password = $_GET["phppassword"];

$query = "INSERT INTO student
(student_first_name, student_last_name, student_user_name
)
VALUES
(:firstname, :lastname, :username)";

$statement = $db->prepare($query);

$statement->bindValue(':firstname', $firstname);
$statement->bindValue(':lastname', $lastname);
$statement->bindValue(':username', $username);
$success = $statement->execute();


$query2 = "INSERT INTO user_login
(
 user_login_raw,
 user_login_student_id
)
VALUES
(:pw,
 LAST_INSERT_ID()
)";
$statement2 = $db->prepare($query2);
$statement2->bindValue(':pw', $password);
$success2 = $statement2->execute();

if ($success && $success2) { 
	$count = $db->affected_rows; 
	echo "1";
	
} else { 
	$error_message = $db->errorInfo(); 
	echo " An error occurred: ".$error_message." "; 
}
$statement->closeCursor();

?>
