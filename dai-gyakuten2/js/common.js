// JavaScript Document
$(function(){
		var wH = $(window).height();
		var wW = $(window).width();
		if(document.URL.match('/sp/')) {
			var root_in = root + "../sp/";
			var cCount ="'SP'";
		} else{
			var root_in = root + "../";
			var cCount ="'PC'";
		}
	
	/* オンマウス挙動
	--------------------------*/
	
     $('img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
     }, function(){
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
     });
		/*---------------------
			gNavi
		---------------------*/
		$(window).on('load resize', function(){
			var wH = $(window).height();
       var gNavi_html = '<ul class="clearfix serif">';
        gNavi_html += '<li class="top"><a href="'+ root_in +'" title="TOP">トップページ</a></li>';
        gNavi_html += '<li class="introduction"><a href="'+ root_in +'introduction/" title="作品概要">作品概要</a></li>';
        gNavi_html += '<li class="story"><a href="'+ root_in +'story/" title="ストーリー">ストーリー</a></li>';
        gNavi_html += '<li class="character up"><a href="'+ root_in +'character/" title="登場人物">登場人物</a></li>';
        gNavi_html += '<li class="system"><a href="'+ root_in +'system/" title="システム">システム</a></li>';
        gNavi_html += '<li class="movie up"><a href="'+ root_in +'movie/" title="映像">映像</a></li>';
        gNavi_html += '<li class="product"><a href="'+ root_in +'product/" title="商品詳細">商品詳細</a></li>';

				if(document.URL.match('/sp/')) {
        gNavi_html += '<li class="topics"><a href="'+ root_in +'topics/" title="注目情報">注目情報</a></li>';
				} else{
        gNavi_html += '<li class="trial"><a href="'+ root_in +'trial/" onclick="ga(\'send\', \'event\', \'trial_pcside\', \'click\', \'PC\');" title="WEB体験版">WEB体験版<br>公開中！</a></li>';
				}
			
				
        gNavi_html += '</ul>';


				if(document.URL.match('/sp/')) {
					var gNaviBtn_html ='<p id="gNaviBtn" class="">Menu</p>';
					$('#gNavi').html(gNaviBtn_html+gNavi_html);

					// メニュー制御
					$('#gNavi ul').hide();
					$('#gNavi p:not(open)').click(function(){
							$(this).next('ul').fadeToggle().height(wH);
							$(this).toggleClass('open');
							$('#gNavi ul li').height((wH) * 1/9 * 0.9);
					});
					
					//もどるボタン
					var backbtn_html ='<a href="'+ root_in +'">トップページにもどる</a>';
					$('.backbtn').html(backbtn_html);
					
				} else{
					$('#gNavi').html(gNavi_html).height(wH);
					$('#gNavi ul li').height((wH) * 1/8 * 0.9);
					$('#gNavi ul li.top').height((wH) * 0.1625);
					$('#gNavi ul li.trial').height((wH) * 0.1625);					
				}
			
			/*---------------------
				現在地表示
			---------------------*/
			if(document.URL.match('/story/')) {
				$('#gNavi li.story').addClass('active');
			} else if(document.URL.match('/character/')) {
				$('#gNavi li.character').addClass('active');
			} else if(document.URL.match('/system/')) {
				$('#gNavi li.system').addClass('active');
			} else if(document.URL.match('/movie/')) {
				$('#gNavi li.movie').addClass('active');
			} else if(document.URL.match('/introduction/')) {
				$('#gNavi li.introduction').addClass('active');
			} else if(document.URL.match('/product/')) {
				$('#gNavi li.product').addClass('active');
			} else if(document.URL.match('/trial/')) {
				$('#gNavi li.trial').addClass('active');
			} else if(document.URL.match('/')) {
				$('#gNavi li.top').addClass('active');
			}
			
			/*---------------------
				追従
			---------------------*/
		if(document.URL.match('/sp/')) {
		}
			else{
					var naviBox = $('#gNavi').outerHeight() ;
					var footBox = '-' + $('#bnrArea').outerHeight() + 'px' ;
					var wrapBox = $('#wrapper').outerHeight() + $('#bnrArea').outerHeight();			
					//	var inBox01 = $('#story01 article').outerHeight() + 568 ;

					// トグルの表示領域の取得
					$('.storyInner').children('h1').click(function(){
						setTimeout(function(){
							$(window).resize();
						},200);
							$('#gNavi').addClass('fixed').css({'top': 0});
							$('html,body').animate().stop();
							$('html,body').animate({
									scrollTop: 0 + $(this).offset().top
								}, 1000, 'quart');
								return false;
					});

				$(window).scroll(function () {
						if ($(this).scrollTop() > wrapBox - naviBox) {
							$('#gNavi').removeClass('fixed').css({'bottom': footBox});
						} else if ($(this).scrollTop() < 1) {
							$('#gNavi').css({'top': 'auto','bottom': 0});
						} else {
							$('#gNavi').addClass('fixed').css({'top': 'auto','bottom': 0});
						}
					});

				
			}
   });

		/*---------------------
			charaMenu
		---------------------*/
		$(window).on('load resize', function(){
			if(document.URL.match('/character/')) {
					var cNavi_html = '<p class="serif ttl">主な登場人物一覧</p>';
					cNavi_html += '<ul class="clearfix" id="mainChara">';
					cNavi_html += '<li class="naruhodo"><a href="'+ root_in +'character/naruhodo.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '<li class="holmes"><a href="'+ root_in +'character/holmes.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '<li class="ryutaro"><a href="'+ root_in +'character/ryutaro.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '</ul>';
					cNavi_html += '<p class="serif ttl">その他の登場人物</p>';
					cNavi_html += '<ul class="clearfix" id="subChara">';
					cNavi_html += '<li class="haori"><a href="'+ root_in +'character/haori.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '<li class="soseki"><a href="'+ root_in +'character/soseki.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '<li class="hosonaga"><a href="'+ root_in +'character/hosonaga.html"><svg width="70" height="70"><circle cx="35" cy="35" r="32"/></svg></a></li></li>';
					cNavi_html += '</ul>';
					$('#charaMenu').html(cNavi_html);
				
					if(document.URL.match('naruhodo.html')) {
						$('#charaMenu li.naruhodo').addClass('active');
					} else if(document.URL.match('holmes.html')) {
						$('#charaMenu li.holmes').addClass('active');
					} else if(document.URL.match('ryutaro.html')) {
						$('#charaMenu li.ryutaro').addClass('active');
					} else if(document.URL.match('holmes.html')) {
						$('#charaMenu li.holmes').addClass('active');
					} else if(document.URL.match('haori.html')) {
						$('#charaMenu li.haori').addClass('active');
					} else if(document.URL.match('soseki.html')) {
						$('#charaMenu li.soseki').addClass('active');
					} else if(document.URL.match('hosonaga.html')) {
						$('#charaMenu li.hosonaga').addClass('active');
					}

			}
		});
	
		/*---------------------
			banner
		---------------------*/
		var bnrArea = '<ul>';
		bnrArea += '<li><a href="http://www.capcom.co.jp/gyakutensaiban/15th/" target="_blank"><img src="'+ root +'../images/common/bnr_15th.jpg" alt="逆転裁判15周年記念サイト"></li>';
		bnrArea += '<li><a href="http://www.capcom.co.jp/game/gyakutensaiban/" target="_blank"><img src="'+ root +'../images/common/bnr_series.jpg" alt="逆転裁判シリーズサイト"></li>';
		bnrArea += '<li><a href="http://www.capcom.co.jp/game/gyakuten/" target=_blank""><img src="'+ root +'../images/common/bnr_fc.jpg" alt="逆転通信"></li>';
		bnrArea += '<li><a href="https://twitter.com/Gyakuten_capcom" target="_blank"><img src="'+ root +'../images/common/bnr_twitter.jpg" alt="公式ツイッター"></li>';
		bnrArea += '</ul>';
		$('#top #bnrArea').append(bnrArea);
	
		/*---------------------
			banner
		---------------------*/
		var sub_bnrArea = '<ul>';
		sub_bnrArea += '<li class="no_pc"><a href="'+ root_in +'trial/" onclick="ga(\'send\', \'event\', \'trial_spfooter\', \'click\', \'SP\');"><img src="'+ root_in +'images/common/subBnr_trial.png" alt="WEB体験版"></li>';
		sub_bnrArea += '<li><a href="http://www.e-capcom.com/sp/dai-gyakuten2/" target="_blank" onclick="ga(\'send\', \'event\', \'ecap_footer\', \'click\', '+ cCount +');"><img src="'+ root +'../images/common/subBnr_12pack.png" alt="１＆２限定版"></li>';
		sub_bnrArea += '</ul>';
		$('.subpage #bnrArea').append(sub_bnrArea);
	
		/*---------------------
			copywrite
		---------------------*/
		var copywrite = '&copy;CAPCOM CO., LTD. ALL RIGHTS RESERVED.';
		$('#copywrite').append(copywrite);
	

	
	
		/*---------------------
			pagetop
		---------------------*/
		$.easing.quart = function (x, t, b, c, d) {
				return -c * ((t=t/d-1)*t*t*t - 1) + b;
		};

		$(document).ready(function() {

			$("#pagetop").hide();
			$(window).scroll(function () {
				if ($(this).scrollTop() > 800) {
					$('#pagetop').fadeIn();
				} else {
					$('#pagetop').fadeOut();
				}
			});

			$('#pagetop a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 1000, 'quart');
				return false;
			});
		});

	
		/*---------------------
			scroll
		---------------------*/
		var offsetY = -10;
		var time = 500;

		$('a[href^=#]').click(function() {
			var target = $(this.hash);
			if (!target.length) return ;
			var targetY = target.offset().top+offsetY;
			$('html,body').animate({scrollTop: targetY}, time, 'swing');
			window.history.pushState(null, null, this.hash);
			return false;
		});
	
	
});