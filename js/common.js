(function(){
	var a = document.querySelector('#sidebar'), b = null, P = 0;
	var blog = document.getElementsByClassName("blog");
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
	$('.header__articles').slick({
		asNavFor: '.header__sliders--right, .header__panel-slider, .header__panel-wrapper',
		arrows: false
	});
	$('.header__sliders--right').slick({
		asNavFor: '.header__articles, .header__panel-slider, .header__panel-wrapper',		
		arrows: false
	});
	$('.header__panel-wrapper').slick({
		asNavFor: '.header__articles, .header__panel-slider, .header__sliders--right',
		arrows: false
	});
	$('.header__panel-slider').slick({
		asNavFor: '.header__sliders--right, .header__articles, .header__panel-wrapper', 		
		speed: 500,
		variableWidth: true,
		prevArrow: '<a(href="#" class="header__panel-reference header__panel-reference--prev")> PREV</a>',
		nextArrow: '<a(href="#" class="header__panel-reference header__panel-reference--next")> NEXT</a>'
	});
	
	var paddingRight = parseInt($(".header__right").css("margin-right"));	
	($(".header__sliders--right").css("width", 380 + paddingRight));
	($(".header__panel-sliders").css("width", 380 + paddingRight));
	($(".header__reference").css("width", 730 + paddingRight));
	var widthImg;
	for(var i = 0; i < $('.header__slider-img').length; i++) {
		if($('.header__slider-img').width()>$('.header__sliders--right').width()) {
			widthImg = $('.header__slider-img').width()/2;
		} else {
			widthImg = $('.header__sliders--right').width()/2;
		}
		$('.header__slider-img:eq(' + i + ')').css( "margin-left", -widthImg + "px" );
	}
	
})()



