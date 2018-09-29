$('.yacht__sliders').slick();
$('.impressions__sliders').slick();

$('.questions__problem').click(function() {
	$(this).next('.questions__solution').toggleClass("questions__solution--none");
})