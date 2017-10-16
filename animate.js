'use strict'
var current = 0;
var angle = 0;
$('input').click(function(){

	console.log(this);
	if ($(this).prop('checked') == true) {
	        current = current + 1;
                angle = angle + 15;
                $('.arrow').css('transform','rotate('+ angle + 'deg)');
	}else {
	        current = (current > 0) ? current  - 1 : current ;
	        angle = (angle >  0) ? angle - 15 : angle;
                $('.arrow').css('transform','rotate(' + angle + 'deg)');
	}
	$('.result_number').text(angle * 2);
});
