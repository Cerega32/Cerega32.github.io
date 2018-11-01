var markersData = [
	{
		lat: 62.541147,     // Широта
		lng: 113.980685,    // Долгота
		name: "1комнатная кв - 3500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Ленина 23"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.540104,
		lng: 113.988145,
		name: "1комнатная кв - 3000р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Ленина 43"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.543026,
		lng: 113.977408,
		name: "1комнатная кв - 3500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Советская 3"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.541832,
		lng: 113.983377,
		name: "-", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Советская 3"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.546399,
		lng: 113.983133,
		name: "1комнаткная кв - 3500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Тихонова 15/2"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.543129,
		lng: 113.990280,
		name: "1комнаткная кв - 3000р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Тихонова 16а"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.543820,
		lng: 113.977911,
		name: "2комнаткная кв - 4500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Павлова 8"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.541982,
		lng: 113.973978,
		name: "1комнаткная кв - 3500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Ойунского 36"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 62.543572,
		lng: 113.971735,
		name: "2комнаткная кв - 4500р/сутки", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. 50 лет Октября 1"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 66.412468,
		lng: 112.246203,
		name: "-", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Новый город микрорайон 19"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 66.410153,
		lng: 112.244803,
		name: "-", // Произвольное название, которое будем выводить в информационном окне
		address: "ул. Новый город микрорайон 21"   // Адрес, который также будем выводить в информационном окне
	},
	{
		lat: 66.413892,
		lng: 112.242271,
		name: "1комнаткная кв - 3000р/сутки",
		address: "ул. Новый город микрорайон 33"
	}
];
var map, infoWindow;
function initMap() {
    var centerLatLng = new google.maps.LatLng(65.209010, 112.686254);
    var mapOptions = {
        center: centerLatLng,
        zoom: 5,
				gestureHandling: 'greedy'
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();
    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });
    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        // Добавляем маркер с информационным окном
        addMarker(latLng, name, address);
    }
}
// Функция добавления маркера с информационным окном
function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function() {
        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                            '</div>';
        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);
        // Показываем информационное окно
        infoWindow.open(map, marker);
    });
}


$(".appartments__more").click(function() {
	$(".appartments--hide")
		.css("display" , "block")
		.animate({opacity: 1, top: '0'}, 500);
	$(".appartments__more").css("display" , "none");
	$(".appartments__less").css("display" , "inline");
});

$(".appartments__less").click(function() {
	setTimeout(function() {$(".appartments--hide").css("display" , "none")}, 1000);
	$(".appartments--hide").animate({opacity: 0, top: '-100px'}, 1000);
	$(".appartments__more").css("display" , "inline");
	$(".appartments__less").css("display" , "none");
	$('html, body').animate({
		scrollTop: $(".appartments").offset().top
	}, 1000);
});

$('[data-fancybox="flat1"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/kvart-otel-quot-vip-komfort-quot.ru.html">booking.com</a> и <a href="https://www.booking.com/hotel/ru/kvart-otel-quot-vip-komfort-quot.ru.html">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat2"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://mirnii.sutochno.ru/400801">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat3"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/vip-komfort-sovetskaia-3.ru.html">booking.com</a> и <a href="https://mirnii.sutochno.ru/363449">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat5"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/vip-komfort-tikhonova-15-47-2.ru.html">booking.com</a> и <a href="https://mirnii.sutochno.ru/496195">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat6"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://mirnii.sutochno.ru/471853">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat7"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/apartamenty-na-pavlova-8.ru.html">booking.com</a> и <a href="https://mirnii.sutochno.ru/458073">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat8"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/vip-kosfort-oiunskogo-36.ru.html">booking.com</a> и <a href="https://mirnii.sutochno.ru/431813">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat9"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/dvushka-na-50-let-oktiabria.ru.html">booking.com</a> и <a href="https://mirnii.sutochno.ru/543781">суточну.ру</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$('[data-fancybox="flat12"]').fancybox({
	caption : 'Эти апартаменты на <a href="https://www.booking.com/hotel/ru/udachnyi-n-gorod-33.ru.html">booking.com</a>',
	infobar: true,
  thumbs : {
    autoStart : false
  }
});


$(".spincrement").spincrement({
    from: 0,                // Стартовое число
    to: 7.5,
    decimalPlaces: 1,       // Сколько знаков оставлять после запятой
    decimalPoint: ",",
    duration: 1000
});

$(".spincrement1").spincrement({
    from: 0,
    to: 12,
    decimalPlaces: 0,
    duration: 1000
});

$(".spincrement2").spincrement({
    from: 0,
    to: 700,
    decimalPlaces: 0,
    duration: 1000
});

scroll();

$(document).scroll(function(){
	scroll();
});


function scroll() {
	var y = $(this).scrollTop();
	if (y > 100) {
			$(".navbar__logo").addClass("navbar__logo--inactive");
			$(".navbar__logo--active").removeClass("navbar__logo--inactive");
			$(".navbar").addClass("navbar--active");
		} else {
			$(".navbar__logo").removeClass("navbar__logo--inactive");
			$(".navbar__logo--active").addClass("navbar__logo--inactive");
			$(".navbar").removeClass("navbar--active");
		}
}

$('.header__btn, .contacts__btn').click( function(event){ // лoвим клик пo ссылки с id="go"
	event.preventDefault(); // выключaем стaндaртную рoль элементa
	$('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		function(){ // пoсле выпoлнения предъидущей aнимaции
			if (document.documentElement.clientWidth > 768) {
			$('.header__form') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
	} else {
		$('.header__form') 
				.css('display', 'flex') // убирaем у мoдaльнoгo oкнa display: none;
				.animate({opacity: 1}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
	}
	});
});

$(document).keyup(function(e) {
	 if (e.keyCode == 27) { 
		if (document.documentElement.clientWidth > 768) {
		$('.header__form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	} else {
		$('.header__form')
			.animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
		}
	}
});

$('.overlay, .header__form-close').click( function(){ // лoвим клик пo крестику или пoдлoжке
	if (document.documentElement.clientWidth > 768) {
		$('.header__form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	} else {
		$('.header__form')
			.animate({opacity: 0}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('.overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
		}
	});