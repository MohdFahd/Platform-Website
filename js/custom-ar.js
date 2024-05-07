$(document).ready(function () {

    "use strict";
    
	// PRELOADER
    loader()
    function loader(_success) {
        var obj = document.querySelector('.preloader'),
        inner = document.querySelector('.inner .percentage'),
        page = document.querySelector('body');
        obj.classList.remove('page-loaded');
        page.classList.add('page-loaded');
        var w = 0,
            t = setInterval(function() {
                w = w + 1;
                inner.textContent = w;
                if (w === 100){
                    obj.classList.add('page-loaded');
                    page.classList.remove('page-loaded');
                    clearInterval(t);
                    w = 0;
                    if (_success){
                        return _success();
                    }
                }
            }, 40);
    }

    /* __________ Smooth Scroll __________ */
    $("a.smooth-scroll").on("click", function (event) {
      var $anchor = $(this);
	  if($('.navbar-button').hasClass('open')) {
		  $('.navbar-button').click();
	  }
      $("html, body").stop().animate({
        scrollTop: $($anchor.attr("href")).offset().top
      }, {
        duration: 1000,
        specialEasing: {
          width: "linear",
          height: "easeInOutCubic"
        }
      });
      event.preventDefault();
    });


    /* __________ Link Div-Box __________ */
    $(".linkDiv").click(function () {
      window.location = $(this).find("a").attr("href");
      return false;
    });


    /* __________ Header Navigation __________ */
    function navigation() {
      var a = $(window).scrollTop(),
        b = $('#hero').outerHeight() - 40;
      if (a > b) {
        $('.header-animated').addClass('scroll');
      } else {
        $('.header-animated').removeClass('scroll');
      }
      ;
    }

    navigation();
    $(window).on("scroll", navigation);
    $(window).on("resize", navigation);
    $('.navbar-button').on("click", function () {
      if ($('#sidebar').is(':hidden')) {
        $('#sidebar').slideDown();
        $('.navbar-button').addClass('open');
      } else {
        $('#sidebar').slideUp();
        $('.navbar-button').removeClass('open');
      }
    });


    /* __________ Hero Slider __________ */
    if ($("#hero-slider").length) {
      $("#hero-slider").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        mouseDrag: false
      });
    }

    /* __________ Background Youtube __________ */
    // shows Video only for Desktop
    if ($('#hero-youtube').length) {
      $('#hero-youtube').YTPlayer({
        fitToBackground: false,
        videoId: $('#hero-youtube').data("video-id"),
        playerVars: {
          modestbranding: 1,
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 0,
          start: 0
        }
      });
    }

    /* __________ Typewriter __________ */
    if ($(".element").length) {
      $(function () {
        $(".element").typed({
          strings: ["مرحباً,", "نحن<br>بلاتفورم", "شغف.<br>تصميم.<br>بناء."],
          typeSpeed: 100,
          loop: true,
          backDelay: 2000
        });
      });
    }

    /* __________ Progressbar __________ */
    if ($('.progress-bar').length) {
      var o = $('.progress-bar');

      $(window).on('scroll', function () {
        var elemPos = o.offset().top,
          elemPosBottom = o.offset().top + o.height(),
          winHeight = $(window).height(),
          scrollToElem = elemPos - winHeight,
          winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
          if (elemPosBottom > winScrollTop) {
            $('.progress-bar').css("width",
              function () {
                return $(this).attr("aria-valuenow") + "%";
              }
            )
          }
        } else {
          $('.progress-bar').css("width", "0%")
        }
      });
    }

    /* __________ Bootstrap Fix: IE10 in Win 8 & Win Phone 8 _____________________________________ */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style")
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      )
      document.querySelector("head").appendChild(msViewportStyle)
    }
    
	// scrollmagic init
	/*let ctrl = new ScrollMagic.Controller();
	[].forEach.call(document.querySelectorAll('.effectImgScroll'), function(e) {
		
		// gsap timeline
		let img_tween = new TimelineMax();
		img_tween.from(e, 1, { xPercent: -100, ease: Expo.easeInOut }, 0);
		img_tween.from(e.querySelector('.img'), 1, { xPercent: 100, ease: Expo.easeInOut }, 0);
		
		// scrollmagic scene
		let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .6 })
		.setTween(img_tween)
		.addTo(ctrl);
		
	});
	
	
	[].forEach.call(document.querySelectorAll('.effectLineScroll'), function(e) {
		
		// gsap timeline
		let txt_tween = new TimelineMax();
		txt_tween.to(e.querySelector('.barre'), 0.5, { xPercent: 110, ease: Expo.easeInOut })
		.to(e.querySelector('.txt'), 0, { opacity: 1, ease: Expo.easeInOut })
		.to(e.querySelector('.barre'), 0.5, { xPercent: 210, ease: Expo.easeInOut });
		
		// scrollmagic scene
		let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .6 })
		.setTween(txt_tween)
		.addTo(ctrl);
		
	});*/

  }
);

