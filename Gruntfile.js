module.exports = function (grunt) {
    'use strict';
    // load npm tasks
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
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
        nodeunit: {
            all: ['test/*.js']
        },
        watch: {
            js: {
                files: [
                    '*.js',
                    'test/*.js'
                ],
                tasks: ['jslint', 'nodeunit']
            }
        }
    });

    grunt.registerTask('watch_js', [
        'jslint',
        'nodeunit',
        'watch:js'
    ]);
    grunt.registerTask('default', [
        'jslint',
        'nodeunit',
        'watch'
    ]);
};
