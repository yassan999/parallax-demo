(function ($) {
    
	'use strict';
    
    let scrollPosi = 0;
	$(window).scroll(function () {
		scrollPosi = $(document).scrollTop();
        $('#para1').css('background-position-x', -scrollPosi + 'px');
	});

})(jQuery);