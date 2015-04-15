<?php
require_once 'login.php';
require_once 'sanitize.php';
$conn=new mysqli($hn,$un,$pw,$db);
if($conn->connect_error)die($conn->connect_error);
session_start();
$invalid="";
$loggedin=false;
if($_SERVER["REQUEST_METHOD"]=="POST"){
	$user=mysql_entities_fix_string($conn,$_POST['user']);
	$pass=mysql_entities_fix_string($conn,$_POST['pass']);
	$query="SELECT name FROM registeredUsers WHERE username='$user' AND password='$pass'";
	$result=mysqli_query($conn,$query);
	if($result->num_rows==0){
		$invalid="Invalid username and/or password combination.";	
	}else{
		// Take user to music listening page
		$name="";
		while ($row=$result->fetch_row()){
			$name=$row[0];
		}
		$_SESSION['name']=$name;
		$_SESSION['user']=$user;
		$_SESSION['pass']=$pass;
		$loggedin = true;
	}
}
?>

<!DOCTYPE html>
<html style="height:100%;">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<title>Home</title>
<!--Adobe Edge Runtime-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <script type="text/javascript" charset="utf-8" src="edge_includes/edge.5.0.1.min.js"></script>
    <style>
        .edgeLoad-EDGE-1638975088 { visibility:hidden; }
    </style>
    <link href="stylesheet.css" rel="stylesheet" type="text/css">
    <link href="dropstyle.css" rel="stylesheet" type="text/css">
    <script src="functions.js"> </script>
<script>
   AdobeEdge.loadComposition('main', 'EDGE-1638975088', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0",
    maxW: "undefined",
    width: "100%",
    height: "100%"
}, {dom: [ ]}, {dom: [ ]});
    </script>
<!--Adobe Edge Runtime End-->

</head>
<body style="margin:0;padding:0;height:100%;">
	<div id="Stage" class="EDGE-1638975088">
    <form align="right" style="margin-right:35px;margin-top:55px">
    	<?php 
		if ($loggedin==false){
		?>
        <input type="button" value="Login" onClick="overlay(1)">
        <input type="button" value="Register" onClick="overlay(2)">
        <?php
		}else{
		?> 
        <div class="menu-wrap">
        	<nav class="menu">
            	<ul class="clearfix">
                    <li>
                    	<a href="#"><?php echo $name." " ?><span class="arrow">&#9660;</span></a>
                        <ul class="sub-menu">
                        	<li><a href="profile.php">My Profile</a></li>
                            <li><a href="logout.php">Logout</a></li>
                       	</ul>
                   	</li>
              	</ul>
          	</nav>
        </div>
    	<?php
		}
		?>
    </form>
    </div>
    
    
    <!-- Login popup PUT ACTION!!!!!!!!!!!!!!!!-->
    <div id="overlay_1">
        <div>
        <form action="main.php" method="post">
        	<h3> Please Login! </h3>
        	<input type="email" name="user" placeholder="Email">
            <input type="password" name="pass" placeholder="Password">
            <br>
            <input type="submit" value="Login"><br>
            <h6 style="color:#FFFFFF">Not a registered user? <a href="#" onClick="overlay(2);overlay(1)"> Sign-up.</a></h6>
        </form>
        </div>
    </div>
    <!-- Register popup PUT ACTION!!!!!!!!!!!!-->
    <div id="overlay_2">
        <div>
        <form action="userRegister.php" method="post">
        	<h3> Please Register! </h3>
            <input type="text" name="name" placeholder="Full Name">
            <br>
        	<input type="email" name="user" placeholder="Email">
            <br>
            <input type="password" name="pass" placeholder="Password">
            <br>
            <input type="submit" value="Register"><br>
            <h6 style="color:#FFFFFF">Already a registered user? <a href="#" onClick="overlay(1);overlay(2)"> Login.</a></h6>
        </form>
        </div>
    </div>
</body>
</html>