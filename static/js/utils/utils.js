'use strict';

const $ = require('jquery');
const ScrollMagic = require('scrollmagic');
const controller = new ScrollMagic.Controller();

module.exports = {
    addScenes() {
        $(".screenshots img").each(function(index, elem) {
            const scene = new ScrollMagic.Scene({
                triggerElement: elem, // starting scene, when reaching this element
                duration: 400 // pin the element for a total of 400px
            }).on('start', function(e) {
                if (e.scrollDirection == "FORWARD") {
                	console.log('tester');
                    scene.destroy();
                }
            }).addTo(controller);
        });
    }
}