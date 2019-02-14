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


	link.click(function(){
		link.toggleClass('menu-link_active');
		$('body').toggleClass('overflow-scroll')
		menu.toggleClass('menu-active');
	});

	link_active.click(function(){
		link.removeClass('menu-link_active');
		$('body').removeClass('overflow-scroll');
	});

	$('a[data-target^="anchor"]').on('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 1000);
		return false;
	});

 	$(window).on("scroll", function (){
 		if ($(window).scrollTop() > $('.header-top').height() + 30) {
 			$('.header-top').css({position: 'fixed', top: '0px', left: '0px', right: '0px', background: 'rgba(34, 34, 34, .9)', padding: '9px 15px'});
 		} else {
 			$('.header-top').css({position: 'static', padding: '22px 0', background: 'none'});
 		}
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
