//-------------------------------------------------- 
//----↓ロールオーバーイメージ用↓--------------------
//-------------------------------------------------- 
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-------------------------------------------------- 
// レイヤー表示・非表示 
//-------------------------------------------------- 
function lyrSetVisibility( lyr , visf ) {
	 if ( visf ) {
	 	document.getElementById( lyr ).style.visibility = "visible";
	 } else {
	 	document.getElementById( lyr ).style.visibility = "hidden";
	 	}
	 }
//-------------------------------------------------- 
//ウィンドウ実行 
//-------------------------------------------------- 
function hnywc() {
	lyrSetVisibility( "hnylyr01" , false );
	lyrSetVisibility( "hnylyr02" , false );
}
function hnywo(num) {
	if(num == 1){
	lyrSetVisibility( "hnylyr01" , true );
	lyrSetVisibility( "hnylyr02" , false );
	}
	if(num == 2){
	lyrSetVisibility( "hnylyr01" , false );
	lyrSetVisibility( "hnylyr02" , true );
	}
}
function hnywc2() {
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , false );
}
function hnywo2(num) {
	if(num == 3){
	lyrSetVisibility( "hnylyr03" , true );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , false );
	}
	if(num == 4){
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , true );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , false );
	}
	if(num == 5){
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , true );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , false );
	}
	if(num == 6){
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , true );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , false );
	}
	if(num == 7){
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , true );
	lyrSetVisibility( "hnylyr08" , false );
	}
	if(num == 8){
	lyrSetVisibility( "hnylyr03" , false );
	lyrSetVisibility( "hnylyr04" , false );
	lyrSetVisibility( "hnylyr05" , false );
	lyrSetVisibility( "hnylyr06" , false );
	lyrSetVisibility( "hnylyr07" , false );
	lyrSetVisibility( "hnylyr08" , true );
	}
}
//-------------------------------------------------- 
//FAQ詳細表示用（質問クリックカウント取得）
//--------------------------------------------------
function setUp() {
	var recNewFaqAnswerElmnts=MyClsName (document,"recNewFaqAnswer","dd");
	for(i=0;i<recNewFaqAnswerElmnts.length;i++) {
		recNewFaqAnswerElmnts[i].style.display="none";
		}
}
//--------------
function recNewFaqAnswerOpen(btnMyNodeDrct, c, n) {
	var recNewFaqAnswerElmnts=MyClsName (btnMyNodeDrct.parentNode,"recNewFaqAnswer","dd");
	if(recNewFaqAnswerElmnts[0].style.display=="none"){
		recNewFaqAnswerElmnts[0].style.display="block";
		var url = "../../cgi-bin/recruit/faq/check.cgi@c="+c+"&n="+n;
		timeout_sec = 10;
		httpRequest(url, dummy);
	} else {
		recNewFaqAnswerElmnts[0].style.display="none";
	}
}
//--------------
function httpRequest(target_url, funcitonReference) {
	try {
		if(window.XMLHttpRequest) {
			httpObj = new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			httpObj = new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			httpObj = false;
		}
	} catch(e) {
		httpObj = false;
	}
	if(! httpObj) {
		httpObjGenerateFail();
	}
	timerId = setInterval('timeoutCheck()', 1000);
	httpObj.open("GET", target_url, true);
	httpObj.onreadystatechange = function() {
		if (httpObj.readyState == 4) {
			clearInterval(timerId);
			if (httpObj.status == 200) {
				funcitonReference(httpObj.responseText);
			} else {
				//alert(httpObj.status + ' : ' + httpObj.statusText);
				return false;
			}
		}
	}
	httpObj.send('');
}
function httpObjGenerateFail() {
//	alert('ご利用のブラウザは対応しておりません。');
	return false;
}
function timeoutCheck() {
	timeout_sec --;
	if(timeout_sec <= 0) {
		clearInterval(timerId);
		httpObj.abort();
//		alert('タイムアウトです。');
		return false;
	}
}
function dummy() {
	return false;
}
//--------------
function MyClsName (MyprtName,Mycls,MyTGName) {
	var cElmnts=new Array();
	var elmnts = MyprtName.getElementsByTagName(MyTGName);
	for (i=0;i<elmnts.length;i++) {
		if(elmnts[i].className==Mycls){
			cElmnts.push(elmnts[i]);
		}
	}
	return cElmnts;
}

//-------------------------------------------------- 
//----↓バナーランダム用↓--------------------
//-------------------------------------------------- 
function BannerPattern1() {

MainBanner1='<a href="../monsterhunter/4/index.html"><img src="img_banner/main_l01.jpg" alt="「モンスターハンター4」" width="320" height="180" border="0" /></a>';


MainBanner2='<a href="../basara4/index.html"><img src="img_banner/main_s02.jpg" alt="「戦国BASARA4」" width="150" height="85" border="0" /></a>';


MainBanner3='<a href="../strider/index.html"><img src="img_banner/main_s03.jpg" alt="「ストライダー飛竜」" width="150" height="85" border="0" /></a>';

MainBanner4='<img src="../img_banner/main_s01.jpg" alt="CAPCOM-GAME" width="150" height="85" border="0" />';
}
function BannerPattern2() {

MainBanner1='<a href="../basara4/index.html"><img src="img_banner/main_l02.jpg" alt="「戦国BASARA4」公式サイト" width="320" height="180" border="0" /></a>';


MainBanner2='<a href="../strider/index.html"><img src="img_banner/main_s03.jpg" alt="「ストライダー飛竜」公式サイト" width="150" height="85" border="0" /></a>';


MainBanner3='<a href="../monsterhunter/4/index.html"><img src="img_banner/main_s01.jpg" alt="「モンスターハンター4」公式サイト" width="150" height="85" border="0" /></a>';

MainBanner4='<img src="../img_banner/main_s02.jpg" alt="CAPCOM-GAME" width="150" height="85" border="0" />';
}
function BannerPattern3() {

MainBanner1='<a href="../strider/index.html"><img src="img_banner/main_l03.jpg" alt="「ストライダー飛竜」公式サイト" width="320" height="180" border="0" /></a>';


MainBanner2='<a href="../monsterhunter/4/index.html"><img src="img_banner/main_s01.jpg" alt="「モンスターハンター4」公式サイト" width="150" height="85" border="0" /></a>';


MainBanner3='<a href="../basara4/index.html"><img src="img_banner/main_s02.jpg" alt="「戦国BASARA4」公式サイト" width="150" height="85" border="0" /></a>';

MainBanner4='<img src="../img_banner/main_s03.jpg" alt="CAPCOM-GAME" width="150" height="85" border="0" />';
}
tableNo = Math.floor(Math.random() * 3+1);
if (tableNo==1) {
		BannerPattern1();
	} else if (tableNo==2) {
		BannerPattern2();
	} else if (tableNo==3) {
		BannerPattern3();
	}
//-------------------------------------------------- 
//----FLASH設置用（IE対策）--------------------
//-------------------------------------------------- 
function recdvptop () {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="../../../download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0/#version=6,0,29,0/default.htm" width="777" height="210">\n');
	document.write('<param name="movie" value="img_dvp/mainimg.swf">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<embed src="img_dvp/mainimg.swf" quality="high" pluginspage="../../../www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="777" height="210"></embed>\n');
	document.write('</object>\n');
	}
//-------------------------------------------------- 
//----FLASHクリエイターハンター設置用（IE対策）--------------------
//-------------------------------------------------- 
function recdvpchPL () {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="../../../download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0/#version=6,0,29,0/default.htm" name="aexternal" width="556" height="100%" id="aexternal">\n');
	document.write('<param name="allowScriptAccess" value="always" />\n');
	document.write('<param name="movie" value="../img_ch/ep_pl.swf">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<embed src="../img_ch/ep_pl.swf" quality="high" pluginspage="../../../www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="556" height="100%" name="aexternal"></embed>\n');
	document.write('</object>\n');
	}
function recdvpchDS () {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="../../../download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0/#version=6,0,29,0/default.htm" name="aexternal" width="556" height="100%" id="aexternal">\n');
	document.write('<param name="allowScriptAccess" value="always" />\n');
	document.write('<param name="movie" value="../img_ch/ep_ds.swf">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<embed src="../img_ch/ep_ds.swf" quality="high" pluginspage="../../../www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="556" height="100%" name="aexternal"></embed>\n');
	document.write('</object>\n');
	}
function recdvpchPG () {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="../../../download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0/#version=6,0,29,0/default.htm" name="aexternal" width="556" height="100%" id="aexternal">\n');
	document.write('<param name="allowScriptAccess" value="always" />\n');
	document.write('<param name="movie" value="../img_ch/ep_pg.swf">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<embed src="../img_ch/ep_pg.swf" quality="high" pluginspage="../../../www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="556" height="100%" name="aexternal"></embed>\n');
	document.write('</object>\n');
	}
function recdvpchSD () {
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="../../../download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0/#version=6,0,29,0/default.htm" name="aexternal" width="556" height="100%" id="aexternal">\n');
	document.write('<param name="allowScriptAccess" value="always" />\n');
	document.write('<param name="movie" value="../img_ch/ep_sd.swf">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<embed src="../img_ch/ep_sd.swf" quality="high" pluginspage="../../../www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="556" height="100%" name="aexternal"></embed>\n');
	document.write('</object>\n');
	}
var swfObjH = 450;
var ContainerId = "swfArea";
function getBrowserHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight != 0) {
		return document.documentElement.clientHeight;
	} else if (document.body) {
		return document.body.clientHeight;
	}
	return 0;
}
function setch(ch) {
	swfObjH = ch;
	setSwfObj();
}
function setContainerSize(ch) {
	swfObjH = ch;
	setSwfObj();
}
function setContainerId(nameId) {
	ContainerId = nameId;
}
function setSwfObj() {
	var ContainerElement = document.getElementById(ContainerId);
//縦幅にXHTML側、CSS側で指定がない場合はウィンドウサイズによる最低指定を要する。
//	if (getBrowserHeight()>swfObjH) {
//		ContainerElement.style.height = 400+"px";
//	} else {
		ContainerElement.style.height = swfObjH+"px";
//	}
}
function setscPos(nx,ny){
	window.scrollTo(nx,ny);
}
window.onresize = setSwfObj;

//-------------------------------------------------- 
//----↓スタイルシート変更用↓--------------------
//-------------------------------------------------- 
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet('font_size_s');
setActiveStyleSheet(title);