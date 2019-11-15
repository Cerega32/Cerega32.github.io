var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  orientation: 'down',
	overflow: true
});

var image2 = document.getElementsByClassName('thumbnail__bottom');
new simpleParallax(image2, {
  orientation: 'up',
	overflow: true
});

new WOW().init();

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});
});

//$.parallax('../img/parallax.png', { 
//    bgWidth : '200%', 
//    enableHorizontal : true 
//});