'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Module interface.
 */

module.exports = registerTask;

/**
 * Register dev tasks.
 *
 * @param {Grunt} grunt
 */

function registerTask(grunt) {
  grunt.registerTask('dev:init', 'Initialize project for development', function executeTask() {
    // Symlink jshintrc files
    [{ src: 'server', dst: './' }, { src: 'test', dst: './test' }]
    .map(function resolvePaths(data) {
      return {
        src: path.resolve(__dirname, '../../node_modules/lemonde-jshintrc', data.src + '.jshintrc'),
        dst: path.resolve(__dirname, '../../', data.dst, '.jshintrc')
      };
    })
    .forEach(function createSymLink(data) {
      grunt.log.writeln('Symlink %s to %s', data.src, data.dst);
      try {
        fs.symlinkSync(data.src, data.dst);
        grunt.log.ok('done');
      } catch (err) {
        grunt.log.error(err);
      }
    });
  });
}
