<?php
require_once 'login.php';
require_once 'sanitize.php';

$conn=new mysqli($hn,$un,$pw,$db);
if($conn->connect_error) die($conn->connect_error);
session_start();
if (isset($_SESSION['user'])){
	$user = $_SESSION['user'];
	$loggedin=TRUE;
	$userstr="($user)";
}else{
	$loggedin=FALSE;
}
$invalid = "";

?>
<script>
function checkUser(user){
	if(user.value ==''){
		replace('info').innerHTML=''
		return
	}
	params = "user= " + user.value
	request = new ajaxRequest()
	request.open("POST","checkuser.php",true)
	request.setRequestHeader("Content-type","applicatoin/x-www-form-erlencoded")
	request.setRequestHeader("Content-length",params.length)
	request.setRequestHeader("Connection","close")
	request.onreadystatechange=function(){
		if(this.readyState==4){
			if(this.status==200){
				if(this.responsText != null){
					replace('info').innerHTML = this.responseText
				}
			}
		}
	}
	request.send(params)
}
	
function ajaxRequest() {
  try {
	var request = new XMLHttpRequest()
  }
  catch(e1) {
	try {
	  request = new ActiveXObject("Msxml2.XMLHTTP")
	}
	catch(e2) {
	  try {
		request = new ActiveXObject("Microsoft.XMLHTTP")
	  }
	  catch(e3) {
		request = false
	  }
	}
  }
  return request
}

function replace(i){
	return typeof i=='object' ? i:document.getElementById(i)
}
</script>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Register</title>
<link href="gsc.css" rel="stylesheet" type="text/css">
<link href="userlogincss.css" rel="stylesheet" type="text/css">
</head>

<body>
<?php 
$error=$name="";
$user="Email";
$pass="Password";
if(isset($_SESSION['user'])){
	$_SESSION=array();
	if(session_id()!=""||isset($_COOKIE[session_name()])){
		setcookie(session_name(),'',time()-2592000,'/');
	}
	session_destroy();
}
if(isset($_POST['user'])){
	$user=strip($_POST['user']);
	$pass=strip($_POST['pass']);
	$name=strip($_POST['name']);
	$query="SELECT * FROM registeredUsers WHERE username='$user'";
	$result=$conn->query($query);
	if(!$result)die($conn->error);
	if($result->num_rows){
		$error="That username/email already exists!<br><br>";
	}else{
		$query="INSERT INTO registeredUsers(username,password,name) VALUES('$user','$pass','$name')";
		$result=$conn->query($query);
		if(!$result)die($conn->error);
		header('Location: main.php');

	}
}
?>
</body>
</html>