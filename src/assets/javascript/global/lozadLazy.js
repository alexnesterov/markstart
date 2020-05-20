import 'intersection-observer';
import lozad from 'lozad';

const observer = lozad('.lazy', {
	loaded: function(el) {
		el.onload = function() {
			el.classList.add('_is-loaded');
		}
	},
});
observer.observe();
