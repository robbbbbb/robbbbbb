// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
function parallaxScroll(){
	if ($(window).width() > 1200)
		return;
	var yoff = window.pageYOffset // get number of pixels document has scrolled vertically
	var parallaxY = "center " + (-yoff * .75 + 150) + "px";
	$("body").css("background-position", parallaxY);
}
 
window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(parallaxScroll)
}, false)