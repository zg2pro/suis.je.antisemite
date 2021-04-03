# suis.je.antisemite

[![Build](https://travis-ci.com/zg2pro/suis.je.antisemite.svg?branch=master)](https://travis-ci.com/zg2pro/suis.je.antisemite)
[![BCH compliance](https://bettercodehub.com/edge/badge/zg2pro/suis.je.antisemite?branch=master)](https://bettercodehub.com/)


consult it online at https://zg2pro.github.io/suis.je.antisemite/

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
 - npm install grunt --save-dev
 - npm install grunt-contrib-clean --save-dev
 - npm install grunt-contrib-copy --save-dev
 - etc etc with all the dependencies of the grunfile or the js/css dependencies of the project 
 - create src/index.html
 - in Netbeans : go to Tools > options > Miscellaneous > Files and add "node_modules" to ignored folders (git ignore before if you use netbeans git client)
 - create your grunt targets regarding your needs
 - then you can run grunt and it will make your first build


 - if you clone this projet, just create a .ftppass file and run "npm install ; grunt"


If you want to make you html/css/js app a mobile app run by Node.js:
 - npm install cordova -g
 - npm install jxc -g (git must be in your path)
 - cordova create suis.je.antisemite and copy the folders (this being the name of the server/app you want to run on android)

# http://blog.sergemazille.com/serveur-web-node-js-android/ (dead link)
# https://auth0.com/blog/converting-your-web-app-to-mobile/

## continuous integration and deployments
all managed by travis and github-pages

# a few notes about gitpod.io

This is awesome !!!
Open the workspace with gitpod.io#https://github.com/zg2pro/suis.je.antisemite.git or you maybe already have a gitpod button in your github project
the terminal is a linux emulator, AND it memorizes all your history and setup, for this project for instance:
I did a "npm install -g grunt-cli", I added the grunt-serve to my dev dependencies and when I ran grunt serve it worked immediately, 
I could see the result on a webpage ! It can of course work with live-reload vue or angular cli serve commands !
