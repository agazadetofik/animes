let element = document.querySelectorAll('[data-animes]');
let offset = 200;
let translateYOffset = 100; // get it from animate.scss from translateY value
let elementsAnimationDuration = null; // default null is 800ms form transition-duration

document.addEventListener('scroll', animInit);
document.addEventListener('DOMContentLoaded', animInit);


function animInit() {
	for (let i = 0; i < element.length; i++) {
		let elementAttr = element[i].getAttribute('data-animes');
		let elementAttrDuration = element[i].getAttribute('data-animes-duration');
		let scroll = (element[i].getBoundingClientRect().top + offset) - window.innerHeight < 0;
		let scrollTranslateYCheck = (element[i].getBoundingClientRect().top + offset - translateYOffset) - window.innerHeight < 0;
		if (elementsAnimationDuration && elementAttrDuration === null) {
			element[i].style.transitionDuration = elementsAnimationDuration / 1000 + 's';
		}

		if (scroll) {
			switch (elementAttr) {
				case 'fade-right':
					fadeX();
					break;
				case 'fade-left':
					fadeX();
					break;
				case 'fade-in':
					fadeIn();
					break;
				case 'zoom-in':
					zoom();
					break;
				case 'zoom-out':
					zoom();
					break;

			}
		}

		if (scrollTranslateYCheck) {
			switch (elementAttr) {
				case 'fade-up':
					fadeY();
					break;
				case 'fade-down':
					fadeY();
					break;
			}
		}

		function fadeX() {
			element[i].style.transform = 'translateX(0)';
			element[i].style.opacity = '1';
		}

		function fadeY() {
			element[i].style.transform = 'translateY(0)';
			element[i].style.opacity = '1';
		}

		function fadeIn() {
			element[i].style.opacity = '1';
		}

		function zoom() {
			element[i].style.opacity = '1';
			element[i].style.transform = 'scale(1)';
		}
	}
}
