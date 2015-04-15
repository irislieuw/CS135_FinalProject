<?php
function strip($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

function get_post($connection, $var) {
	$var = $connection->real_escape_string($var);
	$var = strip($var);
	return $var;
}

function mysql_fix_string($connection,$string){
	if(get_magic_quotes_gpc())$string = stripslashes($string);
	return $connection->real_escape_string($string);	
}

function mysql_entities_fix_string($connection,$string){
	return htmlentities(mysql_fix_string($connection,$string));
}
?>