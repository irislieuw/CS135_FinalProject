<!DOCTYPE html>
<html style="height:100%;">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<title>Edit Profile</title>
<!--Adobe Edge Runtime-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <script type="text/javascript" charset="utf-8" src="edge_includes/edge.5.0.1.min.js"></script>
    <style>
        .edgeLoad-EDGE-1638975088 { visibility:hidden; }
    </style>
    <link href="stylesheet.css" rel="stylesheet" type="text/css">
    <link href="dropstyle.css" rel="stylesheet" type="text/css">
    <link href="profilestyle.css" rel="stylesheet" type="text/css">
<script>
   AdobeEdge.loadComposition('editProfile', 'EDGE-1638975088', {
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
    <?php 
	require_once 'header.php';
	$query="SELECT * FROM profiles WHERE id='$id'";
	$result=mysqli_query($conn,$query);
	if ($result->num_rows!=0){
		while ($row=$result->fetch_row()){
			$id=$row[0];
			$about=$row[1];
			$musicinterest=$row[2];
		}
	}
	
	if ($_SERVER["REQUEST_METHOD"]=="POST"){
		$about=mysql_entities_fix_string($conn,$_POST['about']);
		$musicinterest=mysql_entities_fix_string($conn,$_POST['musicinterst']);
		//********HANDLE FILE UPLOAD SOMEWHERE AROUND HERE*********
	}
	?>
        <div class="editProfile">
            <form style="margin-top:200px" method="post" action="editProfile.php">
            Upload a Profile Picture: <input type="file" name="image" size="14">
            <br>
            About Me:
            <br><textarea name="about" cols="63" rows="8"><?php echo $about ?></textarea>
            <br>
            Music Interest:
            <br><textarea name="musicinterest" cols="63" rows="8"><?php echo $musicinterest ?></textarea>
            <br>
            <input type="submit" value="Update Profile">
            </form>
        </div>
    </div>
</body>
</html>