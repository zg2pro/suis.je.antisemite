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
            "js-ugly": {
                dest: "dist/js/bundle.min.js",
                src: [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "node_modules/underscore/underscore-min.js",
                    "node_modules/backbone/backbone-min.js",
                    "dist/tmp/sja.min.js"
                ],
            },
            "js-pretty": {
                dest: "dist/js/bundle.min.js",
                src: [
                    "node_modules/jquery/dist/jquery.min.js",
                    "node_modules/bootstrap/dist/js/bootstrap.min.js",
                    "node_modules/underscore/underscore-min.js",
                    "node_modules/backbone/backbone-min.js",
                    "src/js/sja.js"
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('build', [
        'clean:all',
        'copy',
        'uglify',
        'concat:css',
        'concat:js-ugly',
        'clean:tmp'
    ]);
    grunt.registerTask('build:pretty', [
        'clean:all',
        'copy',
        'concat:css',
        'concat:js-pretty',
        'clean:tmp'
    ]);

    grunt.registerTask('default', ['build']);

};
