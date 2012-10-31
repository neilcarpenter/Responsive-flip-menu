$(function() {

	// cache selectors
	var $container = $('.flip-holder'),
		$flipButton = $('.flip-menu');

	$flipButton.click(function (e) {
		e.preventDefault();

		$(this).toggleClass('on');
		
		// add flipping to toggle scale animation, then remove
		// so will work when flip back, should use transitionEnd
		$container.addClass('flipping');
		setTimeout(function() {
			$container.removeClass('flipping');
		}, 650);

		// the 3D flip bit handled by this
		$container.toggleClass('flipped');
	});

	// if window resized to big while menu open, reset
	$(window).on('resize', function() {
		if ($container.hasClass('flipped') && $flipButton.css('display') == 'none') {
			$flipButton.trigger('click');
		}
	});

});