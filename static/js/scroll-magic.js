'use strict';
const $ = require('jquery');
const ScrollMagic = require('scrollmagic');
const controller = new ScrollMagic.Controller();
module.exports = {
    addScrollScenes(obj, $container) {
        if ($container.find(obj).length) {
            $container.find(obj).each(function(index, elem) {

                const scene = new ScrollMagic.Scene({
                    triggerElement: elem, // starting scene, when reaching this element
                    duration: 400 // pin the element for a total of 400px
                }).on('start', function(e) {
                    if (e.scrollDirection == "FORWARD") {
                        $(elem).addClass('animate');
                        scene.destroy();
                    }
                }).addTo(controller);
            });
        }
    }
}