$( document ).ready(function() {
	//Init waterpipe
	var smokyBG = $('#wavybg-wrapper').waterpipe();
	$(".home").fadeIn(1000);
	
	document.getElementById("list").onclick = function() {smoothScroll()};
    document.getElementById("bt-res1").onclick = function (){openResModal()}
    document.getElementById("bt-res2").onclick = function (){openResModal()}
    document.getElementById("close").onclick = function () {closeResModal()}
});

window.addEventListener('scroll', function(){
	parallax();
	homeFade();
	headerFade();
});

function parallax(){
	var prxl_lay = document.getElementById('above-fold');
	prxl_lay.style.top = -(window.pageYOffset/4)+'px';
};

function homeFade(){
	var offSet = $(document).scrollTop(), opacity = 1;
	var header = $('.home')
	if(offSet >= $(window).height()){
		opacity = 0;
	}else if(offSet < $(window).height()){
		opacity = 1 - 1.5*(offSet / $(window).height());
	}
	
	header.css('opacity',opacity);
};

function headerFade(){
	var offSet = $(document).scrollTop(), opacity = 0;
	var header = $('header')
	if(offSet >= $(window).height()){
		opacity = 1;
	}else if(offSet < $(window).height()){
		opacity = offSet / $(window).height();
	}
	
	header.css('opacity',opacity);
};

function smoothScroll() {
    $('html,body').animate({
           scrollTop: $(".body").offset().top},
           'slow');
}

function openResModal(){
    document.querySelector('.resume-modal').style.display = 'flex';
}

function closeResModal() {
    document.querySelector('.resume-modal').style.display = 'none';
}



