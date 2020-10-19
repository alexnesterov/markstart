import 'intersection-observer';
import lozad from 'lozad';

window.lazy = lozad('.lazy', {
	loaded: function(el) {
		el.onload = function() {
			el.classList.add('_is-loaded');
		}
	},
});
lazy.observe();

lazy.loadImages = (selector) => {
	const imagesAll = document.querySelectorAll(
		selector
	);

	for (
		let index = 0;
		index < imagesAll.length;
		index++
	) {
		const image = imagesAll[index];
		lazy.triggerLoad(image);
	}
};
