import './global/objectFitImages';
import './global/lazy';
import './global/base';

let loading = () => {
	import(/* webpackChunkName: "components" */ './components').then(() => {
		console.log('Ready!');
	});
};

if (window.addEventListener) window.addEventListener('load', loading, false);
else if (window.attachEvent) window.attachEvent('onload', loading);
else window.onload = loading;
