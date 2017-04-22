// JavaScript Document
$(document).ready(function(){
  $(".mv").colorbox({iframe:true, rel:"movie", innerWidth:901, innerHeight:585, className:"movie"});
  $(".popup").colorbox({inline:true, rel:"pop", innerWidth:1000, innerHeight:500, scrolling:false, returnFocus:false, className:"pop"});
	
/*
var name = "mv01";
	if ($.cookie(name)) {
		return;false;	
	} else {
		$(".mv").click();
		$.cookie(name,1,{expires:1});
	}
*/
	
});


//イントロ
$(function(){
if($.cookie("PLAYED") != "true") {
	$.cookie("PLAYED", "true");
				$(window).load(function(){
						var wX = window.innerWidth;
						var wY = window.innerHeight;
						var delaySpeed = 500;
						var delaySpeedClose = 1500;
						var animeSpeed01 = 500;
						var animeSpeed02 = 1000;
						var animeclose = 200;
						var SpeedAnime03 = 2000;


							//stop
							$('#intro p').show();
							$('#intro p').click(function(){
								$('#intro').stop(false,false).css({'display':'none' , 'z-index':'-1'});
							});

							$('#anime01').css({'opacity':'0','z-index':'0','display':'block'}).animate({'opacity':'1'},animeSpeed01,slide01);
							function slide01(){
								$('#anime01 .item01').delay(delaySpeed).css({'display':'block','margin-left':'100%'}).animate({'margin-left':'0'},animeSpeed01);
								$('#anime01 .item02').delay(delaySpeed).css({'display':'block','margin-left':'100%'}).animate({'margin-left':'0'},animeSpeed02,'easeOutCirc');
								$('#anime01 .item03').delay(delaySpeed).css({'display':'block','top':'-100%'}).animate({'top':'0'},animeSpeed02,'easeOutCirc',slide03);
							}
							function slide03(){
								$('#anime01 .item01').delay(delaySpeedClose).css({'display':'block','margin-left':'0'}).animate({'margin-left':'-100%'},animeclose);
								$('#anime01 .item02').delay(delaySpeedClose).css({'display':'block','margin-left':'0'}).animate({'margin-left':'-100%'},animeclose);
								$('#anime01 .item03').delay(delaySpeedClose).css({'display':'block','top':'0'}).animate({'top':'100%'},animeclose,slide04);
							}
							function slide04(){
								$('#anime01').delay(0).animate({'opacity':'0' , 'z-index':'-1'} ,animeclose,slide05);
							}

							function slide05(){
								$('#anime01').css({'display':'none'});
								$('#anime02').css({'opacity':'0','z-index':'0','display':'block'}).animate({'opacity':'1'},animeSpeed01,slide06);
							}
							function slide06(){
								$('#anime02 .item01').delay(delaySpeed).css({'display':'block','margin-left':'-100%'}).animate({'margin-left':'0'},animeSpeed01);
								$('#anime02 .item02').delay(delaySpeed).css({'display':'block','margin-left':'-100%'}).animate({'margin-left':'0'},animeSpeed02,'easeOutCirc');
								$('#anime02 .item03').delay(delaySpeed).css({'display':'block','top':'-100%'}).animate({'top':'0'},animeSpeed02,'easeOutCirc',slide08);
							}
							function slide08(){
								$('#anime02 .item01').delay(delaySpeedClose).css({'display':'block','margin-left':'0'}).animate({'margin-left':'100%'},animeclose);
								$('#anime02 .item02').delay(delaySpeedClose).css({'display':'block','margin-left':'0'}).animate({'margin-left':'100%'},animeclose);
								$('#anime02 .item03').delay(delaySpeedClose).css({'display':'block','top':'0'}).animate({'top':'100%'},animeclose,slide09);
							}
							function slide09(){
								$('#anime02').delay(0).animate({'opacity':'0' , 'z-index':'-1'} ,animeclose,slide10);
							}	

							function slide10(){
								$('#anime02').css({'display':'none'});
								$('#anime03').css({'opacity':'0','z-index':'0','display':'block'}).animate({'opacity':'1'},animeSpeed01,slide11);
							}
							function slide11(){
								$('#anime03 .item01').delay(delaySpeed).css({'display':'block','opacity':'0'}).animate({'opacity':'1'},SpeedAnime03,slide12);
							}
							function slide12(){
								$('#anime03').delay(SpeedAnime03).animate({'opacity':'0' , 'z-index':'-1'},SpeedAnime03,slide13);
							}			
							function slide13(){
								$('#intro').delay(delaySpeedClose).animate({'opacity':'0' , 'z-index':'-1'} ,slideEnd);
							}
							function slideEnd(){
								$('#intro').css({'display':'none'});
							}
				});

		}
		else{
			$('#intro').css({'display':'none'});
		}
	
});
	

//うさぎ
$(function(){ 
	var mainHeight = $('#main').height();

	$('.sideRight').addClass('fixed');
	$(window).scroll(function () {
		if ($(this).scrollTop() > mainHeight - 500 ) {
			$('.sideRight').removeClass('fixed');
		} else if ($(this).scrollTop() < mainHeight - 500 ) {
			$('.sideRight').addClass('fixed');
		}
	});
	
});
