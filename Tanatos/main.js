$(document).ready (function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var button_hire_us = $('.button-hire-us, .submit-form');
	var popup_close = $('.popup-close');
	var btn_top = $('.btn-top');

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu-active');
	});

	link_active.click(function(){
		link.removeClass('menu-link_active');
	});

	button_hire_us.click(function(){
		$('.overlay').fadeIn();
	});

	popup_close.click (function(){
		$('.overlay').fadeOut();
	});

	$('.overlay').click (function(e){
    if (e.target == this) $(".overlay").fadeOut();
    });

	$('a[data-target^="anchor"]').on('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false;
	});

 	$(".owl-carousel").owlCarousel({
 		items: 1,
 		nav: true,
 		navText: ["<img src=\"img/arrow_left.png\">","<img src=\"img/arrow_right.png\">"],
 		rewind: true,
 		smartSpeed: 700,
 		scrollPerPage: false
 	});

 	$(window).on("scroll", function(){
 		if ($(window).scrollTop() >= 2000) {
 			btn_top.fadeIn();
 		}
 		else {
 			btn_top.fadeOut();
 		}
 	});

 	btn_top.on("click", function(){
 		$("html, body").animate({scrollTop:0}, 900)
 	});

});
