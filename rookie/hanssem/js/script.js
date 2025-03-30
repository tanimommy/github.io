// JavaScript Document
$(".m_btn").click(function(){
	$(".m_nav").fadeIn()	
});

$(".m_close").click(function(){
	$(".m_nav").fadeOut()	
});

var swiper = new Swiper('.main .swiper-container', {
	
	spaceBetween:0,
	loop:true,
	autoplay: {delay:2500, disableOnInteraction:false},
	pagination: {el: '.main .swiper-pagination', clickable: true}
	
});

var swiper = new Swiper('.contents_slide .swiper-container', {
	
	spaceBetween:0,
	loop:true,
	autoplay: {delay:2500, disableOnInteraction:false},
	pagination: {el: '.contents_slide .swiper-pagination', clickable: true}
	
});

$(window) .scroll(function(){
	if ($('html') .scrollTop()>200){
		$(".nav") .css({"position":"fixed", "left":0, "top":0})
		
	}else{
		$(".nav") .css({"position":"static"})
		
		}
	
});