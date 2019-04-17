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
			el: '.swiper-pagination',
			clickable: true,
		}   
  })

var sliderTeam = new Swiper ('.team__slider', {
    slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}   
  })

var sliderReview = new Swiper ('.review__slider', {
    slidesPerView: 1,
		loop: true,
		effect: 'cube',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}  
  })