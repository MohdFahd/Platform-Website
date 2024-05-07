$(document).ready(function () {
let ctrl = new ScrollMagic.Controller();
	[].forEach.call(document.querySelectorAll('.effectImgScroll'), function(e) {
		
		// gsap timeline
		let img_tween = new TimelineMax();
		img_tween.from(e, 1, { xPercent: 100, ease: Expo.easeInOut }, 0);
		img_tween.from(e.querySelector('.img'), 1, { xPercent: -100, ease: Expo.easeInOut }, 0);
		
		// scrollmagic scene
		let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: "onEnter" })
		.setTween(img_tween)
		.addTo(ctrl);
		
	});
	
	
	[].forEach.call(document.querySelectorAll('.effectLineScroll'), function(e) {
		
		// gsap timeline
		let txt_tween = new TimelineMax();
		txt_tween.to(e.querySelector('.barre'), 0.5, { xPercent: -110, ease: Expo.easeInOut })
		.to(e.querySelector('.txt'), 0, { opacity: 1, ease: Expo.easeInOut })
		.to(e.querySelector('.barre'), 0.5, { xPercent: -210, ease: Expo.easeInOut });
		
		// scrollmagic scene
		let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: "onEnter" })
		.setTween(txt_tween)
		.addTo(ctrl);
		
	});
});