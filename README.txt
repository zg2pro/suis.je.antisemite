to kickstart a jquery/bootstrap project
 - install npm on operating system
 - npm install -g grunt-cli
 - npm init (creates package.json file)
 - manually create Gruntfile.js with minimal content: 
 module.exports = function(grunt) {
	grunt.initConfig({
             pkg: grunt.file.readJSON('package.json')
        })
	grunt.registerTask('default', '') 
}
 - add to package.json : 
"dependencies": {
    "jquery"  : "3.1.1"
  }
 - npm install grunt --save-dev
 - npm install grunt-contrib-clean --save-dev
 - npm install grunt-contrib-copy --save-dev
 - create src/index.html
 - in Netbeans : go to Tools > options > Miscellaneous > Files and add "node_modules" to ignored folders (git ignore before if you use netbeans git client)
 - report a build task to the Gruntfile :
 grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist/**']
        },
        copy: {
            html: {
                expand: true, 
                src: "src/html/**", 
                dest: "dist/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean:all', 'copy:html']);

- then you can run grunt and it will make your first build


and now when wanting to add jquery to your project :
- npm install jquery --save-dev
- and json2 and backbone
- npm install grunt-contrib-concat --save-dev
- concatenate libs un gruntfile
