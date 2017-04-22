// JavaScript Document
$(function(){
  //ニュース
 $.ajax({
    url: "topics.json",
    cache: false,
    type: "GET",
    dataType: "json",
    timeout: 10000
  })
  .done(function (data) {
//    var description;
    var length = data.topics.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
      if(count < 8) {
        if(data.topics[i].showTopPage == "true") {
          var date = data.topics[i].date;
          var panelSize = data.topics[i].panelSize;
 //         var category = data.topics[i].category;
//          var categoryName = data.topics[i].categoryName;
          var img = "";
          var text = data.topics[i].text;
          var linkType = data.topics[i].linkType;
          var link = data.topics[i].link;
          var ga = data.topics[i].ga;
          var newClass = "";

          if(data.topics[i].img.length > 0) {
            img = 'style="background-image: url(images/topics/' + data.topics[i].img + ');"';
          }
          if(data.topics[i].new == "true") {
            newClass = 'new';
          }
          var topic = '<dt class="img" ' + img + '></dt>' + 
                  '<dd class="text">' + text + '</dd>' + 
                  '<dd class="date">' + date + '</dd>';
            if(ga === undefined) {
              topic = '<a href="' + link + '" target="' + linkType + '">' + topic + '</a>';
            }
            else if(link !== "") {
              topic = '<a href="' + link + '" target="' + linkType + '" onclick="'+ ga +'">' + topic + '</a>';
            }
            topic = '<dl class="' + newClass + ' ' + panelSize + '">' + topic + '</dl>';
          $(".topics_area").append(topic);
          count++;
				  $('.topics_area dl dd.text').matchHeight();
        }
      }
    }
  });
});
