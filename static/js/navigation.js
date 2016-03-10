const $ = require('jquery');
module.exports = {
    fixedNav() {
        const target = 200;
        const $navigation = $('.navigation')
        const height = $navigation.height();
        const $wrapper = $('.page-wrapper');
        const $navlinks = $('.nav-links');
        const pagnatorWidth = $('.pagnation').width();

        let rt = ($(window).width() - ($navlinks.offset().left + $navlinks.outerWidth()));
        let passed = false;


        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= target && !passed) {
                $wrapper.css({
                    paddingTop: height
                });
                $navigation.addClass('fixed').delay(10).queue(function(next) {
                    $(this).addClass('animate');
                    next();
                });
                $navigation.addClass('fixed');

                if(rt < pagnatorWidth) {
                    $navlinks.animate({
                        marginRight: pagnatorWidth-rt + 'px'
                    });
                }

                passed = true;
            }
            if ($(window).scrollTop() == 0 && passed) {
                $wrapper.css({
                    paddingTop: '0px'
                });
                $navigation.removeClass('fixed animate');
                $navlinks.animate({
                        marginRight: '0px'
                });
                passed = false;
            }
        });
    },
    navClickEvents($container) {
    	let navHeight = $('.navigation').height();

        $container.find('.work').click(function() {
            $('html,body').animate({
                scrollTop: $container.find('.project-grid').offset().top - navHeight
            });
        })
        $container.find('.hamburger').click(function() {
            $container.find('.nav-links').toggleClass('show');  
        })
    }
}