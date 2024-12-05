// Simple Gruntfile.js to start with
module.exports = function(grunt) {
    grunt.initConfig({
      // Basic file copy task
      copy: {
        main: {
          files: [
            {expand: true, src: ['index.html'], dest: 'build/'}
          ]
        }
      },
      cssmin: {
        target: {
          files:{
            'build/css/style.min.css':['css/style.css']
          }
        }
      },
      htmlmin: {                                     // Task
        dist: {
        files: [{
            src: 'index.html',
            dest: 'build/index.html'
            }],
          options: {
            removeComments: true,
            collapseWhitespace: true,
            sortAttributes: true,
            sortClassName: true,
          }
        }
      },
    });
  

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['cssmin', 'htmlmin']);
  };