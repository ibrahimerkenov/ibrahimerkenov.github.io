$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(function(){
	var link = $('.menu-link'),
			link_active = $('.menu-link_active'),
			menu = $('.menu'),
			btn_top = $('.btn-top');
			menu_link_a = $('.menu ul li a')


	link.click(function(){
		link.toggleClass('menu-link_active');
		$('body').toggleClass('overflow-scroll')
		menu.toggleClass('menu-active');
	});

	link_active.click(function(){
		link.removeClass('menu-link_active');
		$('body').removeClass('overflow-scroll');
	});

	menu_link_a.click(function(){
		menu.removeClass('menu-active');
		link.removeClass('menu-link_active');
		$('body').removeClass('overflow-scroll');
	});

 	$(window).on("scroll", function (){
 		if ($(window).scrollTop() > $('.header-top').height()) {
 			$('.header-top').css({background: 'rgba(34, 34, 34, .9)'});
 		} else {
 			$('.header-top').css({background: 'none'});
 		}
 	});

 	$(window).on("scroll", function(){
 		if ($(window).scrollTop() >= 1200) {
 			btn_top.addClass('d-active');
 		}
 		else {
 			btn_top.removeClass('d-active');
 		}
 	});

 	btn_top.on("click", function(){
 		$("html, body").animate({scrollTop:0}, 900)
 	});

 	$('a[href^="#"]').on('click.smoothscroll', function(){
 		var target = $(this).attr('href'),
 			bl_top = $(target).offset().top - 92;
 		$('body, html').animate({scrollTop: bl_top}, 700);
 		return false;
 	});

});
