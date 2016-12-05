$(document).ready(function(){

// LANDING PAGE
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
	var bgTxt = $('.bg-txt');
	var section = $('section');
	var portTitle = $('.port-title');
	var landingTl = new TimelineMax();

	landingTl
		.to(bgTxt, 3, {css: {color: '#fff'}, ease: Power0.easeIn, onStart: onStart})
		.to(portTitle, 3, {top: '0', ease: Power0.easeIn}, '-=3')
		.add(scrollRe, '+=1');
		//.fromTo(section, 5, {autoAlpha: 0}, {autoAlpha: 1, ease: Power0.easeIn}, '-=5')

	function onStart() {

		$('body').css({'overflow':'hidden'});
  		$(document).bind('scroll', function () { 
       		window.scrollTo(0,0); 
  		});

	}

	function scrollRe() {

  		$('body').css({'overflow':'visible'});
  		$(document).unbind('scroll');

	// SCROLLING BROWSER
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
		$(window).on("scroll", function(){

			var scroll = $(this).scrollTop();

			$("section article").stop().animate({"left": -scroll}, 1);

		});


	// BG-INTERACTIVE-TEXT-SHADOW
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

	// Mousemover Text Shadow:
		var bgTxt = $('.bg-txt');

		$("body").mousemove(function(event) {
	    var x = event.pageX - bgTxt.offset().left - bgTxt.width() / 2;
	    var y = event.pageY - bgTxt.offset().top - bgTxt.height() / 2;

	    $(".bg-txt").css({
	      "text-shadow": x/70+"px "+y/70+"px 10px rgba(0,0,0,0.2)",
	    });

	  });


	// SCROLL MAGIC
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

	// Interactive Background Change:
		// var controller;

		// Init ScrollMagic Controller
		// controller = new ScrollMagic.Controller();

		// Scene 01: 
		// var bgColorTl01 = new TimelineMax(),
		// 	body = $('body'),
		// 	bgTxt = $('.bg-txt'),
		// 	portTitle = $('.port-title'),
		// 	portTitleChar1 = $('.portitle').children('.char1'),
		// 	portTitleChar2 = $('.portitle').children('.char2');

		// bgColorTl01
		// 	.fromTo(body, 1, {css: {backgroundColor: '#fff'}}, {css: {backgroundColor: 'blue'}})
		// 	.fromTo(bgTxt, 1, {css: {color: '#fff'}}, {css: {color: 'blue'}}, '-=1')
		// 	.fromTo(portTitle, 1, {css: {color: '#000'}}, {css: {color: '#fff'}}, '-=1')
		// 	.to(portTitleChar1, 1, {css: {color: '#000'}}, '-=1')
		// 	.to(portTitleChar2, 1, {css: {color: '#000'}}, '-=1');

		// var sceneTl01 = new ScrollMagic.Scene({
		// 	triggerElement: 'body',
		// 	duration: '700%',
		// 	triggerHook: 0
		// })
		// .setTween(bgColorTl01)
		// .addTo(controller);


	// MODAL TRIGGER
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

	//listen to the click on the modal trigger buttons
		var modalTrigger = $('.morph-btn');
		var modalWindow = $('.morph-modal');

		modalTrigger.on('click', function(event){

			event.preventDefault();
			var selectedModalTrigger = $(this);
			//retrieve the href of trigger
			var modalId = selectedModalTrigger.attr('href');
			var selectedModalWindow = modalWindow.filter(modalId);
			var modalContent = selectedModalWindow.children('.modal-content');
			var modalClose = selectedModalWindow.children('.close-modal');
			var body = $('body');
			var section = $('section');
			var modalTl = new TimelineMax();
			//show the modal window 
			//selectedModalWindow.addClass('open-modal');

			modalTl
				.to(section, 0.25, {autoAlpha: 0, ease: Power0.easeIn})
				.to(body, 0.1, {css: {height: '0'}})
				.to(selectedModalWindow, 0.1, {css: {display: 'block'}})
				.to(section, 0.1, {css: {display: 'none'}})
				.to(modalContent, 0.25, {autoAlpha: 1, ease: Power0.easeIn})
				.to(modalClose, 0.25, {autoAlpha: 1, ease: Power0.easeIn});

			// body.css({'height': '0'});
			// section.css({'display': 'none'});
			// selectedModalWindow.addClass('modal-visible');
		});


	// MODAL TRIGGER
	// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

		// var modalTrigger = $('.morph-btn');
		// var modalWindow = $('.morph-modal');

		// function getElementPosition(trigger) {
		// 	var top = trigger.offset().top - $(window).scrollTop();
		// 	var left = trigger.offset().left;

		// 	return [top, left];
		// }

		// function evaluateScale(element, position) {
		// 	var scaleY = scaleValue(position[0], element.innerHeight(), $(window).height());
		// 	var scaleX = scaleValue(position[1], element.innerWidth(), $(window).width());

		// 	return [scaleY, scaleX];
		// }

		// function scaleValue(firstCoordinate, elementDimension, windowDimension) {
		// 	var secondCoordinate = windowDimension - firstCoordinate - elementDimension;
		// 	var maxCoordinate = Math.max(firstCoordinate, secondCoordinate);
		// 	var scaleValue = (maxCoordinate*2 + elementDimension)/elementDimension;
			
		// 	return Math.ceil(scaleValue);
		// }

		//listen to the click on the modal trigger buttons
		// modalTrigger.on('click', function(event){

		// 	event.preventDefault();
		// 	var selectedModalTrigger = $(this);
		// 	//retrieve the href of trigger
		// 	var modalId = selectedModalTrigger.attr('href');
		// 	var selectedModalWindow = modalWindow.filter(modalId);
		// 	var selectedMorphBg = selectedModalWindow.children('.morph-background');
		// 	var section = $('section');
		// 	var body = $('body');
		// 	//show the modal window 
		// 	selectedModalWindow.css({'display': 'block'}).addClass('open-modal');

		// 	//retrieve the trigger position
		// 	var triggerPosition = getElementPosition(selectedModalTrigger);

		// 	//retrieve scale value
		// 	var scaleValues = evaluateScale(selectedMorphBg, triggerPosition);
		// 	//move and scale selectedMorphBg
		// 	selectedMorphBg.css({
		// 		'top': triggerPosition[0]+'px',
		// 		'left': triggerPosition[1]+'px',
		// 		'transform': 'scaleX(' + scaleValues[1] +') scaleY(' + scaleValues[0] +')',
		// 	}).one('transitionend', function(){
		// 		//wait for the transition to be over -> show modal content
		// 		selectedModalWindow.addClass('modal-visible');
		// 	});

		// 	//section.css({'display': 'none'});
		// 	body.css({'height': '0'}).scrollTop(0);
		// });

		//listen to the click on the close-modal buttons
		// modalWindow.on('click', '.close-modal', function(event){

		// 	//get the modal window and morphing background
		// 	var selectedModalWindow = $(this).parent('.morph-modal'); // remeber: this refers to the element we just clicked (close-modal)
		// 	var selectedMorphingBackground = selectedModalWindow.children('.morph-background');

		// 	//hide the modal content
		// 	modalWindow.removeClass('modal-visible');

		// 	body.css({'height': '800vh'}).scrollTop(0);
		// 	//scaleDown morphing background
		// 	selectedMorphingBackground.css({
		// 		'transform': 'scaleX(1) scaleY(1)' //remeber 1 is the default value for the css scale tranfrom
		// 	}).one('transitionend', function(){
		// 		//wait for the transition to be over -> hide modal window
		// 		selectedModalWindow.removeClass('open-modal');
		// 		modalWindow.css({'display': 'none'});
		// 	});

		// });

	} // GSAP onComplete callback function

}); // APP.JS




