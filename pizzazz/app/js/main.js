const mySlider = $('.main-slider');

mySlider.slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  verticalSwiping: true,
  fade: true,
  dots: true,
  draggable: false
})

mySlider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});


$('.screen__works-slider').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  adaptiveHeight: true,
  nextArrow: $('.slider-works__btn--next'),
  prevArrow: $('.slider-works__btn--prev'),
  asNavFor: '.slider-works__pictures',
  draggable: false
})


$('.slider-works__pictures').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  fade: true,
  arrows: false,
  asNavFor: '.screen__works-slider',
  draggable: false
})

const pricingRadio = document.querySelectorAll('.pricing__radio-btn')
const contactRadio = document.querySelectorAll('.contact__field-radio')
const pricingName = document.querySelector('.pricing__project-name')



pricingRadio.forEach(item => {
  item.addEventListener('change', e => {
    pricingName.innerHTML = item.value;
    contactRadio.forEach(i => {
      if (i.value === item.value) {
        i.checked = true;
      }
    })    
  })
})