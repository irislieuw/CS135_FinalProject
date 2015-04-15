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
    <link href="profilestyle.css" rel="stylesheet" type="text/css">
<script>
   AdobeEdge.loadComposition('profile', 'EDGE-1638975088', {
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
	if ($result->num_rows!=0){
		$query = ("SELECT * FROM profiles WHERE id='$id'");
		$result = mysqli_query($conn, $query);
		if ($result->num_rows==0){
			// Display blank profile
			$displayview = false;
			include 'blankProfile.php';
			
		} else {
			// Display user's information
			while ($row=$result->fetch_row()){
				$id=$row[0];
				$about=$row[1];
				$musicinterest=$row[2];
				$imgpath=$row[3];
			}
			if ($imgpath == NULL) {
				$displayview = false;
			}
			include 'filledProfile.php';	
		}
	}
	?>
   
    
    </div>

</body>
</html>