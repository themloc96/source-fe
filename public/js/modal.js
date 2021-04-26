(function () {
	/* Opening modal window function */
	function openModal() {
		/* Get trigger element */
		var modalTrigger = document.getElementsByClassName('btn-modal');

		/* Set onclick event handler for all trigger elements */
		for (var i = 0; i < modalTrigger.length; i++) {
			modalTrigger[i].onclick = function () {
				var target = this.getAttribute('href').substr(1);
				var modalWindow = document.getElementById(target);
				var modalSetting = this.closest(".contents-pages");

				modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';

				// Add clas active for parent
				modalSetting.classList.add('active');
			}
		}
		console.clear();
	}

	function closeModal() {
		/* Get close button */
		var closeButton = document.querySelectorAll(".btn-close span")
		var closeOverlay = document.getElementsByClassName('bg-fixed');


		/* Set onclick event handler for close buttons */
		for (var i = 0; i < closeButton.length; i++) {
			closeButton[i].onclick = function () {
				var modalWindow = this.closest(".container-modal");
				var modalSetting = this.closest(".contents-pages");

				modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				modalSetting.classList.remove('active');
				
				console.clear();
			}
		}
		
		console.clear();

		/* Set onclick event handler for modal overlay */
		for (var i = 0; i < closeOverlay.length; i++) {
			closeOverlay[i].onclick = function () {
				var modalWindow = this.parentNode;
				var modalSetting = this.closest(".contents-pages");

				modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

				modalSetting.classList.remove('active');
			}
		}
	}

	/* Handling domready event IE9+ */
	function ready(fn) {
		if (document.readyState != 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	/* Triggering modal window function after dom ready */
	ready(openModal);
	ready(closeModal);
}());