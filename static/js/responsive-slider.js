'use strict';
const $ = require('jquery');
const img_length = $('.slideshow-inner img').length;

$('.pagers li').eq(0).addClass('selected');
//set slideshow inner wrapper width
$('.slideshow-inner').css({
    width: img_length * 100 + '%'
});

//move slider when pager is clicked
$('.pagers li').click(function() {
    let index = $(this).index();
    $('.slideshow-inner').animate({
        marginLeft: -100 * index + '%'
    });
    $(this).addClass('selected').siblings().removeClass('selected');
});