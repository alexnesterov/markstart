import 'core-js';

window.$window = $(window);
window.$document = $(document);
window.$body = $('body');
window.windowWidth = $window.width();
window.windowScroll = 0;
window.windowLastScroll = 0;

$window.on('load', function () {
	$body.addClass('page_loaded');
});

$window.on('load resize', function () {
	windowWidth = $window.width();
});

$window.on('scroll', function () {
	windowScroll = $window.scrollTop();
	if (windowScroll > 40) {
		$body.addClass('page_scrolled');
	} else {
		$body.removeClass('page_scrolled');
	}

	if (windowScroll > 40) {
		if (windowScroll > windowLastScroll) {
			$body.addClass('page_scroll-down');
		} else if (windowScroll < windowLastScroll) {
			$body.removeClass('page_scroll-down');
		}
	}

	windowLastScroll = windowScroll;
});
