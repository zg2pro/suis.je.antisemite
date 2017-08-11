module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist/**'],
            tmp: ['dist/tmp/**']
        },
        copy: {
            html: {
                expand: true,
                cwd: "src/html",
                src: "**",
                dest: "dist/"
            },
            data: {
                expand: true,
                cwd: "src/data",
                src: "questions.json",
                dest: "dist/data/"
            },
            fonts: {
                expand: true,
                cwd: "src/fonts",
                src: "**",
                dest: "dist/fonts/"
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/tmp/sja.min.js': ['src/js/sja.js']
                }
            }
        },
        concat: {
            js: {
                dest: "dist/js/bundle.min.js",
                src: [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "node_modules/underscore/underscore-min.js",
                    "node_modules/backbone/backbone-min.js",
                    "dist/tmp/sja.min.js"
                ],
            },
            css: {
                dest: "dist/css/sja.min.css",
                src: [
                    "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
                    "node_modules/bootstrap/dist/css/bootstrap.min.css",
                    "src/css/sja.css"
                ]
            }
        },
        karma: {
            display: {
                unit: {
                    configFile: 'karma.conf.js',
                    singleRun: false,
                    browsers: ['Chrome'],
                    logLevel: 'DEBUG'
                }
            },
            headless: {
                unit: {
                    configFile: 'karma.conf.js'
                }
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ftpperso.free.fr',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'dist/',
                dest: '/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('build', [
        'clean:all',
        'copy',
        'uglify',
        'concat',
        'clean:tmp'
    ]);

    grunt.registerTask('test', [
        'karma:headless'
    ]);

    grunt.registerTask('serve', [
        'ftp-deploy:build'
    ]);

    grunt.registerTask('default', ['build', 'serve']);

};
