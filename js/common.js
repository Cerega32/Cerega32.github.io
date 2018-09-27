(function(){
var a = document.querySelector('#sidebar'), b = null, P = 0;
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#articles').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})()


$(function(){

	scroll();
	
	//scroll to top
	$(".scroll-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	}); 
 
	//show up-button
	$(document).scroll(function(){
		scroll();
	});
	
	$(".navbar__btn").click(function(){
		$(".navbar__search").removeClass("navbar__search--active");
		$(".navbar__search").focus();
	});
	
	$('.navbar__search').focusout(function(){
		$(".navbar__search").addClass("navbar__search--active");
	});
	
});

function scroll() {
	var y = $(this).scrollTop();
  if (y > getCoords(blog[0]).top) {
			$(".scroll-top").removeClass("scroll-top--hidden");
			$(".navbar").addClass("navbar--fixed");
		} else {
			$(".scroll-top").addClass("scroll-top--hidden");
			$(".navbar").removeClass("navbar--fixed");
		}
}
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset - 50
  };

}
var blog = document.getElementsByClassName("blog");

