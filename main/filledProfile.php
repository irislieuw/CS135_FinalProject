<div class="profile">
    <div class="profileimage">
        <img src="images_profile/default.jpg" alt="No image found."/>
    </div> 
    <h2> <?php echo $name ?>
    <?php
	if ($displayview==false){
	?>
    <img style="height:15px;width=15px" src="images/edit.jpg" onClick="location.href='editProfile.php'">
    <?php
	}
	?>
    </h2>
    <br>
    <div class="about">
        <h3> About Me </h3>
        <span><?php echo $about ?></span>
    </div>
    
    <br><br>
    <div class="musicInterest">
        <h3> Music Interest </h3>
        <span><?php echo $musicinterest ?></span>
    </div>
</div>