const $ = require('jquery');
const ScrollMagic = require('./scroll-magic.js');
const smoothState = require('smoothstate');

$(function() {
    'use strict';
    $('.color-pallette').delay(500).queue(function(next) {
        $(this).addClass('animate');
        next();
    });
    ScrollMagic.addScrollScenes($('.page-wrapper'),'.screenshots img');
    ScrollMagic.addScrollScenes($('.page-wrapper'),'.hover-effects .img-wrapper');

    var options = {
            prefetch: true,
            pageCacheSize: 2,
            onStart: {
                duration: 250, // Duration of our animation 
                render: function($container) {
                    // Add your CSS animation reversing class 
                    $container.addClass('is-exiting');
                    // Restart your animation 
                    smoothState.restartCSSAnimations();
                    $container.find('.color-pallette').delay(500).queue(function(next) {
                        $(this).addClass('animate');
                        next();
                    });
                }
            },
            onReady: {
                duration: 0,
                render: function($container, $newContent) {
                    $newContent.find('.color-pallette').delay(100).queue(function(next) {
                        $(this).addClass('animate');
                        next();
                    });
                    ScrollMagic.addScrollScenes($newContent,'.screenshots img');
                    ScrollMagic.addScrollScenes($newContent,'.hover-effects');

                    // Remove your CSS animation reversing class 
                    $container.removeClass('is-exiting');
                    // Inject the new content 
                    $container.html($newContent);
                }
            }
        },
        smoothState = $('#main').smoothState(options).data('smoothState');
});