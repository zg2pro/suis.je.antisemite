[![build status](https://gitlab.com/zg2pro/suis.je.antisemite/badges/master/build.svg)](https://gitlab.com/zg2pro/suis.je.antisemite/commits/master)

[![coverage](https://gitlab.com/zg2pro/suis.je.antisemite/badges/master/coverage.svg)](https://gitlab.com/zg2pro/suis.je.antisemite/commits/master)

<a href="https://gitlab.com/zg2pro/suis.je.antisemite/commits/master"><img alt="build status" src="https://gitlab.com/zg2pro/suis.je.antisemite/badges/master/build.svg" /></a>

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zg2pro/suis.je.antisemite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

consult it online at http://suis.je.antisemite.free.fr

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
#http://blog.sergemazille.com/serveur-web-node-js-android/

## continuous integration
To sync the project between github and gitlab, import the project in gitlab, then:
- option 1 is to switch git repo on your client, push all to gitlab, and go to settings>repository>"push to a remote repository"
- option 2 is to continue working with github, and go to settings>repository>"pull from a remote repository" to mirror FROM github, 
this will cause a time difference between pushes to github and sync in gitlab (several minutes each time)
either way, you need to import your github_rsa.pub in your gitlab profile
