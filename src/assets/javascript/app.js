// import here
import svg4everybody from 'svg4everybody';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;

window.$window = $(window);
window.$document = $(document);
window.$body = $('body');
window.windowWidth = $window.width();
window.windowScroll = 0;
window.windowLastScroll = 0;

$window.on('load', function () {
	$body.addClass('page_loaded');
	svg4everybody();
});

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

console.log('Ready!');
