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
	if ($(window).width() > 1200)
		return;

	var yoff = window.pageYOffset // get number of pixels document has scrolled vertically
	var parallaxY = "center " + (-yoff * .8 + initialOffset) + "px";
	$("body").css("background-position", parallaxY);
}
 
window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(parallaxScroll)
}, false)