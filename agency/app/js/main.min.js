'use strict';

//$(".portfolio__items").slick({
//	infinite: true,
//	slidesToShow: 3,
//	slidesToScroll: 3,
//	dots: true
//});
//
//$(".review__slider").slick({
//	infinite: true,
//	dots: false,
//	arrow: true
//});


var sliderPortfolio = new Swiper ('.portfolio__items', {
    slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		initialSlide: 3,
		pagination: {
			el: '.portfolio__pagination',
			clickable: true
		}   
  })

var sliderTeam = new Swiper ('.team__slider', {
    slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.team__btn.swiper-button-next',
			prevEl: '.team__btn.swiper-button-prev',
		}
  })

var sliderReview = new Swiper ('.review__slider', {
    slidesPerView: 1,
		loop: true,
		effect: 'cube',
		navigation: {
			nextEl: '.review__btn.swiper-button-next',
			prevEl: '.review__btn.swiper-button-prev',
		}  
  })