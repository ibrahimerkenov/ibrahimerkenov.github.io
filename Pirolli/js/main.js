$(document).ready(function(){$(".menu-link").click(function(){$(this).toggleClass("menu-link_active"),$(".menu-dropdown").toggleClass("menu-active")}),$(".slider-reviews__block").slick({dots:!0,arrows:!1,autoplay:!0}),$(".slider-single").slick({prevArrow:$(".prevArrow"),nextArrow:$(".nextArrow")});var o=$(".btn-top");$(window).on("scroll",function(){700<=$(window).scrollTop()?o.addClass("d-active"):o.removeClass("d-active")}),o.on("click",function(){$("html, body").animate({scrollTop:0},900)}),$('a[href^="#"]').on("click.smoothscroll",function(){var o=$(this).attr("href"),l=$(o).offset().top;return $("body, html").animate({scrollTop:l},900),!1})});