module.exports = function(grunt) {
    //  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    "static/css/styles.css": "static/sass/main.scss",
                },
                options: { // Target options
                    includePaths: require("node-neat").includePaths,
                    style: "compact"
                }
            }
        },
        // browserify: {
        //     client: {
        //         src: ['static/js/mile-high-classics.js', 'static/js/main.js'],
        //         dest: 'static/js/build/common.js',
        //         options: {
        //             transform: [
        //                 ["babelify", {
        //                     presets: ["es2015"]
        //                 }]
        //             ],
        //             plugin: [
        //                 ['factor-bundle', {
        //                     outputs: ['static/js/build/mile-high-classics.js', 'static/js/build/main.js']
        //                 }]
        //             ],
        //             browserifyOptions: {
        //                 debug: true
        //             },
        //         }
        //     }
        // },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            presets: ["es2015"]
                        }]
                    ],
                    browserifyOptions: {
                        debug: true
                    },
                },
                files: {
                    'static/js/build/main.js': ['static/js/*.js']
                },
            }
        },
        watch: {
            sass: {
                files: ["static/sass/*.scss"],
                tasks: "sass"
            },
            browserify: {
                files: ["static/js/*.js", "!static/js/build/*.js"],
                tasks: "browserify"
            }
        }
    });
    //Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-browserify');
    //Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("default", ["watch"]);
};