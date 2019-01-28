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
    //$(".resume-modal").fadeIn();
}

function closeResModal() {
    document.querySelector('.resume-modal').style.display = 'none';
    //$(".resume-modal").fadeOut();
}

var $engineer = $('#engineer');
var $programmer = $('#programmer');
var $web = $('#web-dev');

$engineer.waypoint(function (direction) {
    if (direction == 'down'){
        document.getElementById("engin").style.color = '#3070AC';
        document.getElementById("program").style.color = 'gray';
        document.getElementById("web_dev").style.color = 'gray';
    }
}, {offset: '70%'})

$engineer.waypoint(function (direction) {
    if (direction == 'up'){
        document.getElementById("engin").style.color = '#3070AC';
        document.getElementById("program").style.color = 'gray';
        document.getElementById("web_dev").style.color = 'gray';
    }
}, {offset: '-70%'})


$programmer.waypoint(function (direction) {
    if (direction == 'down'){
        document.getElementById("engin").style.color = 'gray';
        document.getElementById("program").style.color = '#3070AC';
        document.getElementById("web_dev").style.color = 'gray';
    }
}, {offset: '70%'})

$programmer.waypoint(function (direction) {
    if (direction == 'up'){
        document.getElementById("engin").style.color = 'gray';
        document.getElementById("program").style.color = '#3070AC';
        document.getElementById("web_dev").style.color = 'gray';
    }
}, {offset: '-70%'})


$web.waypoint(function (direction) {
    if (direction == 'down'){
        document.getElementById("engin").style.color = 'gray';
        document.getElementById("program").style.color = 'gray';
        document.getElementById("web_dev").style.color = '#3070AC';
    }
}, {offset: '70%'})
