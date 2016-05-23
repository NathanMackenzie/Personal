$( document ).ready(function() {
	//Init waterpipe
	var smokyBG = $('#wavybg-wrapper').waterpipe();
	$(".home").fadeIn(1000);
});

function parallax(){
	var prxl_lay = document.getElementById('above-fold');
	prxl_lay.style.top = -(window.pageYOffset/4)+'px';
};

window.addEventListener("scroll", parallax);

$(window).on('scroll', function(){
	var offSet = $(document).scrollTop(), opacity = 0;
	var header = $('header')
	if(offSet >= $(window).height()){
		opacity = 1;
	}else if(offSet < $(window).height()){
		opacity = offSet / $(window).height();
	}
	
	header.css('opacity',opacity);
});

$(window).on('scroll', function(){
	var offSet = $(document).scrollTop(), opacity = 1;
	var header = $('.home')
	if(offSet >= $(window).height()){
		opacity = 0;
	}else if(offSet < $(window).height()){
		opacity = 1 - 1.5*(offSet / $(window).height());
	}
	
	header.css('opacity',opacity);
});