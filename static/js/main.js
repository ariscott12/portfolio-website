const $ = require('jquery');
const ScrollMagic = require('./scroll-magic.js');
const smoothState = require('smoothstate');
const Slider = require('./slider');
const Navigation = require('./navigation.js');

$(function() {
    'use strict';
    const $body = $('html, body');
    const $wrapper = $('.page-wrapper');
    const $main = $('#main');

    ScrollMagic.addScrollScenes($wrapper,'.screenshots img');
    ScrollMagic.addScrollScenes($wrapper,'.hover-effects .img-wrapper');
    ScrollMagic.addScrollScenes($wrapper,'.lofi-hifi .img-wrapper');
    Slider.addSlider($wrapper);
    Navigation.fixedNav();
    Navigation.navClickEvents($main);

    const options = {
            prefetch: true,
            pageCacheSize: 2,
            onStart: {
                duration: 300, // Duration of our animation 
                render: function($container) {

                    // Add your CSS animation reversing class 
                    $container.addClass('is-exiting');
                    // Restart your animation 
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function($container, $newContent) {

                     $body.animate({
                        scrollTop: 0
                    },0);

                    // Remove your CSS animation reversing class 
                    $container.removeClass('is-exiting');
                    // Inject the new content 
                    $container.html($newContent);  
                   
                    ScrollMagic.addScrollScenes($newContent,'.screenshots img');
                    ScrollMagic.addScrollScenes($newContent,'.hover-effects .img-wrapper');
                    ScrollMagic.addScrollScenes($newContent,'.lofi-hifi .img-wrapper');
                    Slider.addSlider($newContent);
                    Navigation.fixedNav(); 
                    Navigation.navClickEvents($newContent);

                }
            }
        },
        smoothState = $('#main').smoothState(options).data('smoothState');
});