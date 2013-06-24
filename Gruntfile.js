'use strict'

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: [
          'src/clash.js', 
          'src/app.js', 
        ],
        dest: 'dest/clash.js'
      }
    },
    uglify: {
      main: {
        files: {
          'dest/clash.min.js': ['dest/clash.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
