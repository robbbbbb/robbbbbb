// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
function parallaxScroll(){
	var yoff = window.pageYOffset // get number of pixels document has scrolled vertically
	var parallaxY = "center " + (-yoff * .8) + "px";
	$("body").css("background-position", parallaxY);
}
 
window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(parallaxScroll)
}, false)