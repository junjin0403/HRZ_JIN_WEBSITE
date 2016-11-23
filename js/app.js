$(document).ready(function(){

// SCROLLING BROWSER
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

	$(window).on("scroll", function(){

		var scroll = $(this).scrollTop();

		$("section article").stop().animate({"left": -scroll}, 1);

	});


// LETTERING JS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// Logo Element
	$('.logo-el').lettering();

// Background Text
	$('.bg-txt').lettering();

// Portfolio Title
	$('.port-title').lettering();

// Portfolio Title 01
	$('.port-title-01').lettering();

// Portfolio Title 02
	$('.port-title-02').lettering();

// Portfolio Title 03
	$('.port-title-03').lettering();

// Portfolio Title 04
	$('.port-title-04').lettering();

// Portfolio Title 05
	$('.port-title-05').lettering();

// Portfolio Title 06
	$('.port-title-06').lettering();

// Portfolio Title 07
	$('.port-title-07').lettering();

// Portfolio Title 08
	$('.port-title-08').lettering();


// BG-INTERACTIVE-TEXT-SHADOW
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

// Track this element:
  var bgTxt = $('.bg-txt');

//Handler:
  $("body").mousemove(function(event) {
    var x = event.pageX - bgTxt.offset().left - bgTxt.width() / 2;
    var y = event.pageY - bgTxt.offset().top - bgTxt.height() / 2;

//Apply effect:
    $(".bg-txt").css({
      "text-shadow": x/70+"px "+y/70+"px 10px rgba(0,0,0,0.2)",
    });

  });

}); // APP.JS