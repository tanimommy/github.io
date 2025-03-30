// JavaScript Document
$(".m_btn").click(function(){
		$(".m_lnb").slideToggle()
	});
	
	
	
var swiper = new Swiper('.main .swiper-container', {
	
	spaceBetween:0,
	centeredSlides:true,
	autoplay: {delay:2500, disableOnInteraction:false},
	pagination: {el:'.main .swiper-pagination', clickable:true}
});



$(".return-top").hide();
		
		$(function(){
			$(window).scroll(function(){
				if($(this).scrollTop()>120){
					$(".return-top").fadeIn();
				}else{
					$(".return-top").fadeOut();
				}
			});
			
			$(".return-top").click(function(){
				$("body, html").animate({scrollTop:0}, 800);
				return false;
			});
		});
