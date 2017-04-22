var	isAndroid = (navigator.userAgent.indexOf('Android') > -1),
	isiPhone = (navigator.userAgent.indexOf('iPhone') > -1 ),
	isiPad = (navigator.userAgent.indexOf('iPad') > -1 );


/*--------------------------------------------------------------------------*
	smartRollover
 *--------------------------------------------------------------------------*/
function smartRollover() {
	if(document.getElementsByTagName) {	
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}		

		var images = document.getElementsByTagName("input");
		for(var i=0; i < images.length; i++) {
			if ( !images[i].getAttribute("src") ) { continue; }
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}		
	}
}

if(!(isAndroid || isiPhone || isiPad)){
if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}
}