'use strict';


$('.portfolio__items').slick({
 	infinite: true,
	slidesToShow: 3,
	arrows: false,
	dots: true,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.team__slider').slick({
 	infinite: true,
	slidesToShow: 3,
	responsive: [
		{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.review__slider').slick({
 	infinite: true,
	fade: true,
  cssEase: 'linear'
});


$('.packages').slick({
	centerPadding: '60px',
	slidesToShow: 3,
	swipe: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
				infinite: false,
				swipe: true
      }
    }
  ]
});

