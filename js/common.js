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
	$(".appartments--hide")
		.css("display" , "none")
		.animate({opacity: 0, top: '-50px'}, 500);
	$(".appartments__more").css("display" , "inline");
	$(".appartments__less").css("display" , "none");
});

$('[data-fancybox="flat1"]').fancybox({
	infobar: true,
  thumbs : {
    autoStart : false
  }
});

$(".spincrement").spincrement({
    from: 0,                // Стартовое число
    to: 7.5,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    decimalPlaces: 1,       // Сколько знаков оставлять после запятой
    decimalPoint: ",",
    duration: 1000          // Продолжительность анимации в миллисекундах
});

$(".spincrement1").spincrement({
    from: 0,                // Стартовое число
    to: 12,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    decimalPlaces: 0,
    duration: 1000          // Продолжительность анимации в миллисекундах
});

$(".spincrement2").spincrement({
    from: 0,                // Стартовое число
    to: 700,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
    decimalPlaces: 0,
    duration: 1000          // Продолжительность анимации в миллисекундах
});

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
