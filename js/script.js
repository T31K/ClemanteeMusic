(function ($) {
	"use strict";

  // Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(200).fadeOut(500)
    }
  }

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_header = $('.main-header .sticky-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated fadeInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated fadeInDown");
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();
	
	let d = new Date
	$('.copyright').text(`Copyright © ${d.getFullYear()} Clemante Music | All Rights Reserved`)
	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	//Search Popup
	if($('#search-popup').length){

		//Show Popup
		$('.search-box-btn').on('click', function() {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
	            $('#search-popup').removeClass('popup-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	//Mobile Menu Toggler
	if($('.navbar-toggler').length){
		$('.navbar-toggler').on('click', function(e) {
			e.preventDefault();
			var headerHeight = $('.main-header').height();
			var windwoHeight = $(window).height();
			$('.nav-outer .main-menu .navigation').css('height',windwoHeight-headerHeight);
			$('body').toggleClass('menu-collapsed');
		});
	}


	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-5').length){
		var scene = $('.parallax-scene-5').get(0);
		var parallaxInstance = new Parallax(scene);
	}


	// Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 700,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});
	}

	// Testimonials Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-next-1"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				764:{
					items:1
				},
				1024:{
					items:2
				}
			}
		});
	}

	// Testimonials Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="flaticon-next-1"></span>', '<span class="flaticon-next-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				764:{
					items:3
				},
				1024:{
					items:4
				},
				1280:{
					items:5
				}
			}
		});
	}

	// Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},
				1024:{
					items:5
				}
			}
		});
	}

	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}

    //Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	//Event Countdown Timer
	if($('.time-countdown').length){
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
		});
	 });
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(0);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	let teachers = {
		name: ["Mr. Wong Khye Mun", "Ms. Tee Ying Yi", "Ms Frances Tsen", "Ms. Rachel Wee", "Mr. Hor Yee Cheng", "Mr. Foo Han Tee "],
		text_1: ["Khye Mun stays true to his vision as an educator – ‘teaching music differently’ to provide the highest quality of music education. He focuses on creating memorable experiences which includes: service, communication, and environment.",
						 "We have a saying here at Clemantee Music: “No one handles kids as well as Ying Yi does”. It is no surprise then, for a gentle and caring educator with over a decade of teaching experience to be able to do what she does.",
						 "Hailing from Sabah, Frances is the lead vocalist for the all girl band, Crinkle Cut. Their latest album ‘Sweet Nothings’ redefines the sound of Malaysian indie music.",
						 "The newest addition to the family, Rachel is a graduate from UPM with a Bachelor’s Degree in Contemporary Music. She hopes to inspire students to be a well-rounded pianist through her knowledge in both classical and contemporary piano.",
						 "Yee Cheng is the youngest educator here at Clemantee Music, he graduated from The Malaysian Institute of Arts with a Diploma in Music Performance. He furthered his studies at Mahidol University in Thailand. ",
						 "There is no one more passionate about violin than Foo Han. He earned his Bachelor’s Degree from The Central Conservatory of Music in Beijing in 2011 under the tutelage of the renowned Professor Liu Pei Yan."],
		text_2: ["Khye Mun graduated from UCSI University with a Bachelor in Contemporary Music. With a teaching experience of over 9 years, he is capable of handling students of any sort. Before making the decision to be a full time educator, Khye Mun was an active music producer.",
						 "Ying Yi holds a Bachelor’s Degree in Classical Music from UCSI University. On top of that, she is also a certified Musikgarten educator, responsible for kick starting the musical journey for students as young as 2 months old!",
						 "Yet another graduate of UCSI University in our team, Frances holds a Bachelor’s Degree in Contemporary Music, majoring in Vocals. Apart from teaching, she is an active session musician in the industry, fronting as a lead vocalist in the KL International Jazz Festival in 2013 being one of her notable performances.",
		         "Besides having 6 years of teaching experience, Rachel has been actively organising competitions and recitals for students, giving them an opportunity to perform.",
						 "Armed with the knowledge of both classical and electric guitar, Yee Cheng can teach you how to play your favourite pop tunes just by listening, lead a band as a lead guitarist, and also make reading classical pieces easy.",
						 "After graduating from the Conservatory, Foo Han devoted the next decade guiding students with a desire to help them overcome difficulties in learning such a technical demanding instrument. Thus, eliminating them to toil through a long and uninteresting violin learning journey while maintaining the same quality outcome. "],
		text_3: ["Khye Mun is a busy man running day-to-day operation at Clemantee Music. However, don’t be afraid to approach him for any enquiries or just a friendly chat!",
						 "An educator full of joy and positivity, it is no wonder kids go home with a smile on their faces after every lesson.",
						 "Frances holds the record for ‘The Most Punctual Teacher’. She hopes to use her vast experiences in both teaching and performing to pass on the knowledge of singing and showmanship.",
						 "With a cheerful and easy going personality, her classes are always enjoyable and effective at the same time. Need a friendly piece of advise or someone to lend an ear? Rachel is here!",
						 "Equipped with recording and video editing skills, Yee Cheng gave students a glimpse of what it takes to post music related contents on Youtube. Besides playing the guitar, he is an avid choir member performing at various countries, which includes performing at the Bartok Music Festival in Hungary. ",
						 "As long as you are willing to learn, Foo Han will teach you without any hesitation, enabling you to benefit the most throughout your journey. "],
		instruments: [
						"Piano | Music Production",
						"Piano | Musikgarten",
						"Piano | Keyboard",
						"Vocal | Piano",
						"Electric/Acoustic/Classical Guitar",
						"Violin | Piano"],
		src: ["images/teachers/0.png",
		 			"images/teachers/1.png",
					"images/teachers/2.png",
					"images/teachers/3.png",
					"images/teachers/4.png",
					"images/teachers/5.png",]
	}

	$(".teachers").on({
		"mouseover" : function() {
			this.src = `${this.src.substring(0,this.src.length-4)}_hover.svg`
			$('#tutor_name').text(`${teachers.name[this.id]}`)
			$('#tutor_text_1').text(`${teachers.text_1[this.id]}`)
			$('#tutor_text_2').text(`${teachers.text_2[this.id]}`)
			$('#tutor_text_3').text(`${teachers.text_3[this.id]}`)
			$('#tutor_instruments').text(`${teachers.instruments[this.id]}`)
			$('#teacher_a_img').attr("href", `${teachers.src[this.id]}` )
			$('#teacher_img').attr("src", `${teachers.src[this.id]}` )
		},
		"mouseout" : function() {
			this.src= `${this.src.substring(0,this.src.length-10)}.svg`
		}
	});




	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);

		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);
