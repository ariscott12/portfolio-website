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
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'static/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'static/css',
                    ext: '.min.css'
                }]
            }
        },
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
         uglify: {
          options: {
            banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
          },
          build: {
            src: 'static/js/build/main.js',
            dest: 'static/js/build/main.min.js'
          }
        },
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 1
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'static/img/',
                    src: ['**/**/*.png'],
                    // Could also match cwd line above. i.e. project-directory/img/
                    dest: 'static/img/compressed',
                    ext: '.png'
                }]
            }
        },
        watch: {
            sass: {
                files: ['static/sass/*.scss'],
                tasks: "sass"
            },
            browserify: {
                files: ['static/js/*.js', '!static/js/build/*.js'],
                tasks: 'browserify'
            },
            css: {
                files: ['static/css/*.css', '!static/css/*.min.css'],
                tasks: 'cssmin'
            }
        }
    });
    //Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask('imagemin', ['imagemin']);
    grunt.registerTask('uglify', ['uglify']);
};