// JavaScript Document
/*
document.write('<script type="text/javascript" language="JavaScript" src="../../common/js/jquery.cookie.min.js"></script>');

var cptv_url = '../../cptv/@utm_source=capcom_top&utm_medium=web&utm_campaign=titlesite';
var cptv_title='<span>【カプコンTV!】&nbsp;</span>';
var cptv_txt = '4月19日(水)20時～生放送！&nbsp;『MHダブルクロス』『ウルトラストII』『MHスピリッツ2』特集！ ';

var cptv_html = '';
cptv_html += '<div class="cptvnew" id="cptvbox"><a href="' + cptv_url + '" target="_blank">';
cptv_html += '<div class="titleback">';
cptv_html += '<p class="cptv_play"><img src="../../common/images/cptv_play.png"></p>';
cptv_html += '</div>';
cptv_html += '<div id="s_rear" class="txt"><ul>';
cptv_html += '<li><p>' + cptv_title + '' + cptv_txt + '</p></li>';
cptv_html += '<li><p>' + cptv_title + '' + cptv_txt + '</p></li>';
cptv_html += '</ul></div>';
cptv_html += '<div class="btn"><p><a class="closebtn">×</a></p></div>';
cptv_html += '</a></div>';

document.write(cptv_html);
*/
/*-----------------------
アップロード時に設定
-----------------------*/
/*var
date = new Date();
// cookieの保持期間（24　=　1日 ※一番左の数値のみ修正）
date.setTime( date.getTime() + ( 48 * 60 * 60 * 1000 ));
// cookie名の設定
$cookieName = '20170419',*/
/*--------------------*/

/*
$(function(){

	//初めのCPTVバースクロール表示
	$("#cptvbox").css({bottom:'-300px'});
	
	// [.closebtn]にクリックイベントを設定する
	//これは閉じるボタン
	$('.closebtn').click(function(){

		// [#cptvbox]に[slideToggle()]を実行する
		$("#cptvbox").slideToggle(500, 'linear');
		//cookieをセット
		$.cookie($cookieName, 'close', {expires: date});
	});

	//cookieの設定
	if ($.cookie($cookieName)) {
		// cookie有　=　boxを非表示
		$('#cptvbox').hide;
	} else {
		// cookie無　=　boxを表示
		setTimeout(function(){
			$('#cptvbox').stop().animate({bottom:'0',display:'block'},500);
		},500);
	}
		
	var left_space;
	var slider_w;

	//幅調整
	//これで動かしている
	function ajustTv(){
		$(".cptvnew").css({width:slider_w,left:left_space});
	}
	
	//テキストボックス調整
	function ajustBox(){
		var l_no = 0;

		$('#s_rear ul li a').each(function(){
			var ltr = $(this).text().replace(/\s+/g,'').length;
			if(ltr > l_no){l_no = ltr;}		
		});	

		//スクロール用テキスト幅
		/*$('#s_rear ul').width((l_no + 15 + "em").height($('#s_toe').height());

		
		if($('#s_rear').width() > $('#s_rear ul').width()){
			$('#s_rear ul').width($('#s_rear').width());
		}*/
/*	}


	//調整処理実行
	ajustTv();
	ajustBox();

	$(window).resize(function(){
		ajustTv();
		ajustBox();
	});

	var interval = 14000;
	var slideSpeed = 14000;
	var slideType = 'linear';
	var currentNo = 0;
	var leftPos = "-" + $('#s_rear ul').width() + "px";
	var rightPos = $('#s_rear ul').width() + "px";

	var boxNo = $('.cptvnew ul').children('li').size();
	var prevNo = boxNo - 1;
	var nextNo = currentNo + 1;

	if(nextNo == boxNo){nextNo = 0;}
	if(prevNo < 0){prevNo = nextNo;}


	$('.cptvnew').each(function(){
		var timer;
		var $slider = $('.cptvnew');
		var $item = $slider.find('li');
		var $current_item = $item.eq(currentNo);
		var $prev_item = $item.eq(prevNo);
		var $next_item = $item.eq(nextNo);

		$current_item.css({left:"0"});
		$prev_item.css({left:leftPos});
		$next_item.css({left:rightPos});

		//ボックス移動
		function switchBox(){
			$item.css({zIndex:0});
			$current_item.css({left:0,zIndex:1});
			$prev_item.css({left:leftPos});
			$next_item.css({left:rightPos,zIndex:1});

			$current_item.stop().animate({left:leftPos},{duration:slideSpeed,easing:slideType});
			$next_item.stop().animate({left:0},{duration:slideSpeed,easing:slideType});

			prevNo = currentNo;
			currentNo = nextNo;
			nextNo += 1;
			if(nextNo == boxNo){nextNo = 0;}

			$current_item = $item.eq(currentNo);
			$prev_item = $item.eq(prevNo);
			$next_item = $item.eq(nextNo);
		}//function switchBox

		function startTimer(){timer = setInterval(switchBox,interval);}
		function stopTimer(){clearInterval(timer);}

		//スライダー処理実行
		setTimeout(function(){

			leftPos = "-" + $('#s_rear ul').width() + "px";
			rightPos = $('#s_rear ul').width() + "px";

			if(boxNo >= 2){
				switchBox();
				//$item.hover(stopTimer,startTimer);
				startTimer();
			}else{
				$current_item = $item.eq(0);
				$current_item.css({left:0,zIndex:1});
			}
		},1000);

	});
	

});
*/
//end

