'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    symlink: {
      options: {
        overwrite: true
      },
      dev: {
        files: [
          {
            src: 'node_modules/lemonde-jshintrc/server.jshintrc',
            dest: '.jshintrc'
          },
          {
            src: 'node_modules/lemonde-jshintrc/test.jshintrc',
            dest: 'test/.jshintrc'
          }
        ]
      }
    },
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
          export: 'GetSet',
          main: 'lib/index.js'
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

  grunt.loadNpmTasks('grunt-glue-js');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.registerTask('dev:init', ['symlink:dev']);
  grunt.registerTask('build', ['jshint:dist', 'gluejs:dist', 'uglify']);
  grunt.registerTask('default', ['build']);
};
