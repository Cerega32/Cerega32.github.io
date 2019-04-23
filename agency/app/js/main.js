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
		loop: true,
		pagination: {
			el: '.portfolio__pagination',
			clickable: true,
		},
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
  })

var sliderTeam = new Swiper ('.team__slider', {
    slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.team__btn.swiper-button-next',
			prevEl: '.team__btn.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 0
			}
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

var sliderPlan = new Swiper ('.packages', {
		slidesPerView: 3,		
		spaceBetween: 30,				
		navigation: {
			nextEl: '.packages__btn.swiper-button-next',
			prevEl: '.packages__btn.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView: 'auto',
				spaceBetween: 20,				
				centeredSlides: true,
			}
		}
  })
