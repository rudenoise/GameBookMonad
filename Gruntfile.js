module.exports = function (grunt) {
    'use strict';
    // load npm tasks
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // config
    grunt.initConfig({
        jslint: {
            gbMon: {
                src: [
                    '*.js',
                    'test/*.js'
                ],
                directives: {
                    node: true,
                    browser: false,
                    predef: [
                        'exports',
                        'require',
                        'module'
                    ]
                }
            }
        },
        watch: {
            js: {
                files: [
                    '*.js',
                    'test/*.js'
                ],
                tasks: 'jslint'
            }
        }
    });

    grunt.registerTask('watch_js', [
        'jslint',
        'watch:js'
    ]);
    grunt.registerTask('default', [
        'jslint',
        'watch'
    ]);
};
