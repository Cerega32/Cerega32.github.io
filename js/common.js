$(function(){

	scroll();
	
	//scroll to top
	$('.scroll-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	}); 
 
	//show up-button
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		if (y > 770) {
			$('.scroll-top').removeClass('scroll-top--hidden');
		} else {
			$('.scroll-top').addClass('scroll-top--hidden');
		}
	});
 
});

function scroll() {
	var y = $(this).scrollTop();
  if (y > 770) {
			$('.scroll-top').removeClass('scroll-top--hidden');
		} else {
			$('.scroll-top').addClass('scroll-top--hidden');
		}
}