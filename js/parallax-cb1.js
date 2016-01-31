// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}


var initialOffset = 0; 
$(document).ready(function() {
	initialOffset = parseInt($("body").css("background-position").split(" ")[1].replace("px", ""));
});

function parallaxScroll(){
	// disable all scrolling on cinema displays for performance reasons
	if ($(window).width() > 1200)
		return;

	// setup the inital vars for debugging later
	var yoff = window.pageYOffset // get number of pixels document has scrolled vertically	
	var parallaxMagnitude = 1.0 / 4.0; // 1-in-4 parallax
	var parallaxY = (yoff * parallaxMagnitude + initialOffset) + "px"; // scale the total scrolled amount of the background's position
	$("body").css("background-position", "center " + parallaxY);

	var debug = "yoff: " + yoff + "<br />parallaxY: " + parallaxY + "<br />css: " + $("body").css("background-position");
	$("#debug-box").html(debug);
}
 
window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(parallaxScroll)
}, false)