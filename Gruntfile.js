module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist/**']
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
        concat: {
            js: {
                dest: "dist/js/sja.min.js",
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('build', [
        'clean:all',
        'copy',
        'concat'
    ]);

    grunt.registerTask('serve', [
        'ftp-deploy:build'
    ]);

    grunt.registerTask('default', ['build', 'serve']);

};
