<?php
require_once 'login.php';
require_once 'sanitize.php';
$conn=new mysqli($hn,$un,$pw,$db);
if($conn->connect_error)die($conn->connect_error);
session_start();
if (isset($_SESSION['user'])){
	$user = $_SESSION['user'];
	$pass = $_SESSION['pass'];
	$name = $_SESSION['name'];	
	$loggedin = TRUE;
	$query = "SELECT id FROM registeredUsers WHERE username='$user'";
	$result = mysqli_query($conn, $query);
	if ($result->num_rows!=0){
		$id="";
		while ($row=$result->fetch_row()){
			$id=$row[0];
		}
	}
?>
	<form align="right" style="margin-right:35px;margin-top:55px">
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
    </form>
<?php
} else {
	$loggedin = FALSE;
}
?>