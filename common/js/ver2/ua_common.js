//スマホとタブレットを/sp/にリダイレクト

/*-------------------------------------------------
以下タイトルディレクトリのみ有効
http://www.capcom.co.jp/○○○/
http://www.capcom.co.jp/monsterhunter/○○○/
http://www.capcom.co.jp/gyakutensaiban/○○○/
http://www.capcom.co.jp/basara/○○○/

-------------------------------------------------
■スマートフォンUA 201507
iPhone
iPod
Android OS Mobile
Windows OS Phone
Firefox OS Mobile
BlackBerry

■タブレットUA
iPad
Kindle
Android OS
Firefox OS Tablet
BlackBerry OS PlayBook

■winタブレットUA
Windows OS Touch
---------------------------------------------------*/
var hostname = 'www.capcom.co.jp';
var nowhost = window.location.hostname;
var p = (window.location.pathname).substr(1);
var pArray = p.split('/');
var pa0 = '';
if(pArray[0] == 'web_dvp'){
	pa0 = pArray[0];
	pArray.splice(0,1);
}
var _ua = (function(u){
  return {
    WinTablet:(u.indexOf('windows') != -1 && u.indexOf('touch') != -1),
    Tablet:u.indexOf('ipad') != -1
      || (u.indexOf('android') != -1 && u.indexOf('mobile') == -1)
      || (u.indexOf('firefox') != -1 && u.indexOf('tablet') != -1)
      || u.indexOf('kindle') != -1
      || u.indexOf('silk') != -1
      || u.indexOf('playbook') != -1,
    Mobile:(u.indexOf('windows') != -1 && u.indexOf('phone') != -1)
      || u.indexOf('iphone') != -1
      || u.indexOf('ipod') != -1
      || (u.indexOf('android') != -1 && u.indexOf('mobile') != -1)
      || (u.indexOf('firefox') != -1 && u.indexOf('mobile') != -1)
      || u.indexOf('blackberry') != -1
  }
})(window.navigator.userAgent.toLowerCase());
//スマホ/タブレット
if(_ua.Mobile || _ua.Tablet){
	switch(pArray[0]){
		case 'monsterhunter':
			divSplice(2);
		break;
		case 'gyakutensaiban':
			divSplice(2);
		break;
		case 'basara':
			divSplice(2);
		break;
		default:
			if(nowhost.indexOf(hostname) != -1){
				divSplice(1);
			} else if(pa0 != ''){
				divSplice(1);
			} else {
				divSplice(0);
			}
		break;
	}
}
//windowsタブレット
if(_ua.WinTablet && (typeof window.orientation) != 'undefined'){
	switch(pArray[0]){
		case 'monsterhunter':
			divSplice(2);
		break;
		case 'gyakutensaiban':
			divSplice(2);
		break;
		case 'basara':
			divSplice(2);
		break;
		default:
			if(nowhost.indexOf(hostname) != -1){
				divSplice(1);
			} else if(pa0 != ''){
				divSplice(1);
			} else {
				divSplice(0);
			}
		break;
	}
}
function divSplice(dir){
	pArray.splice(dir,0,'sp');
	if(pa0 != ''){
		pArray.unshift(pa0);
	}
	url = 'http://' + nowhost + '/' + pArray.join('/') + location.search;
//	url = 'http://' + nowhost + '/' + pArray.join('/');

  if (document.referrer) {
    var referrer = 'referrer=' + encodeURIComponent(document.referrer);
    url = url + (location.search ? '&' : '?') + referrer;
  }

	window.location.href=url;
}