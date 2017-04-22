// JavaScript Document
(function($){
  $(window).on("load", function(){
    $.ajax({
     url: "news.json",
     cache: false,
     type: "GET",
     dataType: "json",
     timeout: 10000
    })
    .done(function (data) {
     var description;
     var l = data.news.length;
     for (var i = 0; i < l; i++) {
      if(data.news[i].showTopPage == "true") {
 //        var category = data.news[i].category;
         var date = data.news[i].date;
//         var categoryname = data.news[i].categoryname;
         var text = data.news[i].text;
//         $(".newsList").append('<dl class="' + category + '">' + '<dt>' + date + '<span>' + categoryname + '</span>' + '</dt>' + '<dd>' + text + '</dd>' + '</dl>');
         $(".newsList").append('<dl>' + '<dt>' + date + '</dt>' + '<dd>' + text + '</dd>' + '</dl>');				
       }
     }
    $(".newsList").mCustomScrollbar({
			scrollButtons:{enable:true},
			theme:"light-thick",
			scrollbarPosition:"inside",
			advanced:{updateOnContentResize: true}
		});
    });
  });
})(jQuery);