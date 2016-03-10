'use strict';

const $ = require('jquery');


module.exports = {
    addSlider($container) {

    	const $pagers = $container.find('.pagers li');
    	const $slideshow = $container.find('.slideshow-inner');
    	const img_length = $slideshow.find('img').length;
        
        $pagers.eq(0).addClass('selected');
        $slideshow.find('img').css({
            width: 100 / img_length + '%'
        })

        //set slideshow inner wrapper width
       	$slideshow.css({
            width: img_length * 100 + '%'
        });
        
        //move slider when pager is clicked
        $pagers.click(function() {
            let index = $(this).index();
            $('.slideshow-inner').animate({
                marginLeft: -100 * index + '%'
            });
            $(this).addClass('selected').siblings().removeClass('selected');
        });
    }
}