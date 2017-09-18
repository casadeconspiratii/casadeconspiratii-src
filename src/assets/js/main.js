$(document).ready(function() {

	if ($(window).width() >= 768) {
		$('html, body').mousewheel(function(e, delta) {
			this.scrollLeft -= (delta);
			e.preventDefault();
		});
	}
	else {
		return false;
	}

});