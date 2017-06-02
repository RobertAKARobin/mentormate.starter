$(document).ready(function(){
	var $colorInput = $('#color');
	var $background = $('html');
	$colorInput.on('keyup', function(){
		$background.css('backgroundColor', $colorInput.val());
	});
});
