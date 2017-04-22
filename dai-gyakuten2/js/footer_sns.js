// JavaScript Document

var url_in = '../';
var url_in_goo = '../../../https@goo.gl/RHwjBY';
var txt_in_tw = 'CAPCOM%ef%bc%9a%e5%a4%a7%e9%80%86%e8%bb%a2%e8%a3%81%e5%88%a4%ef%bc%92%20%e5%85%ac%e5%bc%8f%e3%82%b5%e3%82%a4%e3%83%88%20https%3a%2f%2fgoo%2egl%2f7hyfhr';

var sns_r_html = '<script type="text/javascript" src="../../common/js/google.plusone.js"></script>\n';

/*--------------------------------------SNS------------------------------------------*/
sns_r_html += '<div id="footer_sns"><ul>';

//LINE
sns_r_html += '<li><div class="line-it-button" style="display: none;" data-type="share-d" data-lang="ja" alt"LINE"></div><script src="../../../scdn.line-apps.com/n/line_it/thirdparty/loader.min.js" async="async"　defer="defer"></script></li>';

//twitter
sns_r_html += '<li><a href="../../../twitter.com/intent/tweet@text=' + txt_in_tw + '" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;tw&#39;, &#39;share&#39;)"><img src="../../common/logo/tmp/twitter_c.png" alt="twitter" width="40" height="40"></a></li>';

//facebook
sns_r_html += '<li><a href="../../../www.facebook.com/share.php@u=' + url_in + '" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;fb&#39;, &#39;share&#39;)"><img src="../../common/logo/tmp/facebook_c.png" alt="facebook" width="40" height="40"></a></li>';

//google+
sns_r_html += '<li><a href="../../../https@plus.google.com/share@url=' + url_in_goo + '" target="_blank" onclick="ga(&#39;send&#39;, &#39;event&#39;, &#39;goo&#39;, &#39;share&#39;)"><img src="../../common/logo/tmp/googleplus_c.png" alt="Share on Google+" width="40" height="40"></a></li>';

sns_r_html += '</ul></div>';

document.write(sns_r_html);