// JavaScript Document

var root;
var dir = document.getElementsByTagName('script');
var i = dir.length;
		
while (i--) {
	var match = dir[i].src.match(/(^|.*\/)include\.js$/);
	if (match) {
		root = match[1]		
		break;
	}
}
		
document.write('<script src="'+ root +'common.js"></script>'); 
