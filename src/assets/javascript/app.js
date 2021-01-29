import './global/objectFitImages';
import './global/lazy';
import './global/base';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


let loading = () => {
	import(/* webpackChunkName: "components" */ './components').then(() => {
		console.log('Ready!');
	});
}

if (window.addEventListener)
	window.addEventListener('load', loading, false);
else if (window.attachEvent) window.attachEvent('onload', loading);
else window.onload = loading;
