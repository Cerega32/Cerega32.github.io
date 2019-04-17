'use strict';
$(document).ready(function() {
	let searchBtn = $(".header__btn");
	let searchField = $(".header__search");
	let navLink = $(".nav-link");
	let navWithDrop = $(".nav-item__dropdown");
	let dropMenu = $(".dropdown-menu");
	let d = new Date();
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	searchBtn.on("click", function(e){
		console.log(1);
		e.preventDefault();
	})

	searchField.on("focusout", function(){
		searchField.stop()
	})

	//navLink.on({
	//    mouseenter: function () {
	//				navLink.next().stop().css("display", "block").animate({
	//				top: "48px",
	//				opacity: 1
	//			}, 300)
	//    },
	//    mouseleave: function () {
	//       	navLink.next().stop().animate({
	//				top: 0,
	//				opacity: 0
	//			}, 300)
	//    }
	//})

	//$('.popular-slider').owlCarousel({
	//		items: 1,
	//    loop: true,
	//		autoplay: true
	//})

	navWithDrop.on("click", function(e){
		e.preventDefault();
		$(this).parent(navWithDrop).find(".sidebar__dropdown-menu:first").toggleClass("dropdown-menu--active");
	//	setTimeout($(this).parent(navWithDrop).find(".sidebar__dropdown-menu:first").toggleClass("dropdown-menu--active"), 300)
		;
	})


	$('.best__posts').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 4,
		dots: false
	})

	$('.popular-slider').slick({
//		autoplay: true,
		infinite: true,
		arrows: false, 
		dots: true
	})

	$('.grid-slider').slick({
		draggable: true,
		autoplay: true,
		infinite: true,
		dots: false,
		fade: true,
		speed: 500,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100
	})

	$('.footer-slider').slick({
		arrows: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 11,
		centerPadding: "0px"
	})




	$('.block-masonry').masonry({
		itemSelector: '.vertical-post',
		columnWidth: 350,
		gutter: 30
	});


	 $('.sidebar').stickySidebar({
		 topSpacing: 120,
		 bottomSpacing: 40
	 });

	$('.subheader__today').html(months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());

	scroll();

	$(document).scroll(function(){
		scroll();
	});

	function scroll() {
		if ($(document).width() > 768)  {
			let y = $(document).scrollTop();
			if ($(".header").hasClass("header--subheader")) {
				if (y > 130) {
					$(".header").addClass("header--active");
				} else {
					$(".header").removeClass("header--active");
				}
			} else {
				if (y > 50) {
					$(".header").addClass("header--active");
				} else {
					$(".header").removeClass("header--active");
				}
			}
		}
	}

	$(document).on("click", ".video__info", function() {
			let numberIndex = $(this).index();

			if (!$(this).is("video__info--active")) {
					$(".video__info").removeClass("video__info--active");
					$(".video__preview").removeClass("video__preview--active");
					console.log($(".video__preview").eq(numberIndex));
					$(this).addClass("video__info--active");
					$('.video').find(".video__preview").eq(numberIndex).addClass("video__preview--active");
			}
	});


	$(window).on("load",function(){
		$(".videos__info").mCustomScrollbar();
	});

	//function modalWindow(form, event) {
	//	event.preventDefault();
	//	$('.overlay').stop().fadeIn(400,	function(){
	//		if (document.documentElement.clientWidth > 768) {
	//			form.css('display', 'block').stop().animate({opacity: 1, top: '50%'}, 200);
	//		} else {
	//			form.css('display', 'block').stop().animate({opacity: 1}, 200);
	//		}
	//	});
	//	$(document).keyup(function(e) {
	//		if (e.keyCode == 27) { 
	//			if (document.documentElement.clientWidth > 768) {
	//			form.animate({opacity: 0, top: '45%'}, 200,  function(){
	//				$(this).css('display', 'none');
	//				$('.overlay').stop().fadeOut(400);
	//				});
	//			} else {
	//				$('.header__form').animate({opacity: 0}, 200, function(){ 
	//					$(this).css('display', 'none');
	//					$('.overlay').stop().fadeOut(400);
	//				});
	//			}
	//		}
	//	});
	//	$('.overlay, .overlay__close').on("click", function(){
	//		if (document.documentElement.clientWidth > 768) {
	//			form.stop().animate({opacity: 0, top: '45%'}, 200, function(){
	//				$(this).css('display', 'none');
	//				$('.overlay').stop().fadeOut(400);
	//			});
	//		} else {
	//			form.stop().animate({opacity: 0}, 200, function(){
	//				$(this).css('display', 'none');
	//				$('.overlay').stop().fadeOut(400);
	//			});
	//		}
	//	});
	//}


//	function Modal() {
////		this.modal = $(options.modal);
//		let popup_overlay = document.querySelector('.overlay');
//		let popup = this;
//		
//		Modal.prototype.open = function(modal){
//			let modalWindow = document.querySelector(modal)
//			$('.overlay').stop().fadeIn(400,	function(){
//				if (document.documentElement.clientWidth > 768) {
//					modalWindow.style.display = "block";
//					modalWindow.addClass("footer__form--active")
//					//					').stop().animate({opacity: 1}, 200);
//				} else {
//					modalWindow[0].css('display', 'block').stop().animate({opacity: 1}, 200);
//				}
//			});
//		}
//		Modal.prototype.close = function(){
//			if (document.documentElement.clientWidth > 768) {
//				popup.modal.stop().animate({opacity: 0, opt}, 200, function(){
//					$(this).css('display', 'none');
//					$('.overlay').stop().fadeOut(400);
//				});
//			} else {
//				popup.modal.stop().animate({opacity: 0}, 200, function(){
//					$(this).css('display', 'none');
//					$('.overlay').stop().fadeOut(400);
//				});
//			}
//		}	
//		
//		popup_overlay.onclick = this.close;
//
//		$(document).keyup(function(e) {
//			if (e.keyCode == 27) { 
//				if (document.documentElement.clientWidth > 768) {
//				popup.modal.animate({opacity: 0, opt}, 200,  function(){
//					$(this).css('display', 'none');
//					$('.overlay').stop().fadeOut(400);
//					});
//				} else {
//					$('.header__form').animate({opacity: 0}, 200, function(){ 
//						$(this).css('display', 'none');
//						$('.overlay').stop().fadeOut(400);
//					});
//				}
//			}
//		});
//
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	function popup(modal) {
		let modalWindow = $("." + modal);
		console.log(modalWindow);
		$('.overlay').stop().fadeIn(400,	function(){
			modalWindow.addClass(modal + "--active")				
		})
	}
	
	function close(modal) {
		let modalWindow = $("." + modal);
		modalWindow.removeClass(modal + "--active");
		setTimeout(function(){
			$('.overlay').stop().fadeOut(400)
		}, 400);
	}

	$('.subscribe__btn').on("click", function(event) {
		popup("footer__form");		
	})
	
	$('.header__btn').on("click", function(event) {
		popup("header__form");		
	})
	
	$('.header__btn-bars').on("click", function(event) {
		popup("header-sidebar");		
	})
	
	$('.overlay, .header-sidebar__close').on("click", function(event) {
		close("footer__form");		
		close("header__form");		
		close("header-sidebar");		
	})
	
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			close("footer__form");
			close("header__form");		
			close("header-sidebar");
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	
//	let modal1 = new Modal({
//		modal: ".header-sidebar"
//	});
//
//	$('.header__btn-bars').on("click", function(event) {
//		modal1.open();
//	})
//	
//	
//	let modal2 = new Modal({
//		modal: ".header__form"
//	});
//
//	$('.header__btn').on("click", function(event) {
//		modal2.open();
//	})
	
	

	//modal.open();



	//$('.subscribe__btn').on("click", function(event) {
	//	modalWindow($(".footer__form"), event)
	//})
	//
	//$('.header__btn').on("click", function(event) {
	//	modalWindow($(".header__form"), event)
	//})
	//
	//$('.header__btn-bars').on("click", function(event) {
	//	modalWindow($(".header-sidebar"), event)
	//})
})



