import lazySizes from 'lazysizes';
// import a plugin
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks.js';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

lazySizes.cfg.lazyClass = 'lazy';
lazySizes.cfg.preloadClass = '_preload';
lazySizes.cfg.loadingClass = '_is-loading';
lazySizes.cfg.loadedClass = '_is-loaded';
lazySizes.cfg.expand = 1000;
lazySizes.cfg.throttleDelay = 200;
lazySizes.cfg.customMedia = {
	'mobile': '(max-width: 576px)',
};
