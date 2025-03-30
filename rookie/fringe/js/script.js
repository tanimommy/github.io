// JavaScript Document

$(".menu>li") .mouseover(function(){
	
	$(this) .children(".submenu")  .stop() .fadeIn();
	
	});
	
$(".menu>li") .mouseleave(function(){
	
	$(this) .children(".submenu") .stop() .fadeOut();
	
});

 var swiper = new Swiper(' .main .swiper-container', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ' .main .swiper-pagination',
        clickable: true,
      }
    });