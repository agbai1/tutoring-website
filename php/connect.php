<?php
try{
	$creds = 'mysql:host=localhost;dbname=assignment6';
	$dbuser = 'root';
	$dbpassword = 'Agbai1';
	$db = new PDO($creds, $dbuser, $dbpassword);
	}catch(PDOException $e){
		$error_message = $e->getMessage();
		echo "There was an error connecting: ".$error_message;
	}
?>
