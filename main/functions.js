// JavaScript Document
function overlay(id) {
	if(id==1){
		el = document.getElementById("overlay_1");
	}else{
		el = document.getElementById("overlay_2");
	}
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}