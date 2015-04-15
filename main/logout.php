<?php
require_once 'login.php';
require_once 'sanitize.php';
session_start();

if(isset($_SESSION['user'])){
	$_SESSION=array();
	if(session_id()!=""||isset($_COOKIE[session_name()])){
		setcookie(session_name(),'',time()-2592000,'/');
	}
	session_unset();
	session_destroy();
    echo"<script>location.href='main.php'</script>";
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Logout</title>
<link href="gsc.css" rel="stylesheet" type="text/css">
<link href="userlogincss.css" rel="stylesheet" type="text/css">
</head>

<body>
</body>
</html>