'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dist: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js', 'lib/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/*.js']
      }
    },
    gluejs: {
      dist: {
        src: 'lib/',
        dest: 'dist/<%= pkg.name %>.js',
        options: {
          umd: true,
          global: 'GetSet'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= gluejs.dist.dest %>']
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('./grunt/dev');
  grunt.loadNpmTasks('grunt-glue-js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('build', ['jshint:dist', 'gluejs:dist', 'uglify']);
};
