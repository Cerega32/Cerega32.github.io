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
  if (y > 770) {
			$(".scroll-top").removeClass("scroll-top--hidden");
		} else {
			$(".scroll-top").addClass("scroll-top--hidden");
		}
}
