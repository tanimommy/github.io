// JavaScript Document

$(".menu>li") .mouseover(function(){
	
	$(this) .children(".submenu") .stop() .fadeIn(300);
	
});

$(".menu>li") .mouseleave(function(){
	
	$(this) .children(".submenu") .stop() .fadeOut(300);
	
});

var swiper = new Swiper(' .main .swiper-container', {
	spaceBetween:0,
	centeredslides:true,
	autoplay:{delay:2500, disableOnInteraction:false,},
	pagination:{el:'.main .swiper-pagination', clickable:true,}
});

$(window) .scroll(function(){
	if($(this) .scrollTop()>30){
		
		$(".header") .css({"background-color":"rgba(255,255,255,0.8)", "border-bottom":"1px solid #999"})
		$(".menu>li>a").css({"color":"#333"})
		$(".topbtn") .fadeIn()
		
		}else{
			$(".header") .css({"background":"none", "border-bottom":"none"})
			$(".menu>li>a").css({"color":"#fff"})
			$(".topbtn") .fadeOut()
		}
		
	
});

$(".topbtn>button").click(function(){
	
	$("html").animate({scrollTop:0},500)


});
/**/
$(".con1_box:nth-child(1)") .fadeThis({speed:300, distance:100, offset:0, reverse:false});
$(".con1_box:nth-child(2)") .fadeThis({speed:700, distance:100, offset:0, reverse:false});
$(".con1_box:nth-child(3)") .fadeThis({speed:1100, distance:100, offset:0, reverse:false});

$(".con2box_s") .fadeThis({speed:500,  reverse:false});
$(".con2box_center") .fadeThis({speed:500,  reverse:false});

