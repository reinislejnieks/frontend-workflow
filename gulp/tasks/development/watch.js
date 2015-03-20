var gulp = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.compass,    ['compass'/*, 'scsslint'*/]);
  gulp.watch(config.scripts, ['scripts'/*, 'jshint'*/]);
  gulp.watch(config.images,  ['images']);
  // gulp.watch(config.svg,     ['copy:fonts']);
  // gulp.watch(config.sprites, ['sprites']);
});