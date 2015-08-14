var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 *//*
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.compass,    ['compass']);
  gulp.watch(config.scripts, ['scripts']);
  gulp.watch(config.images,  ['images']);
  gulp.watch(config.html,  ['jade-watch']);
  // gulp.watch(config.svg,     ['copy:fonts']);
  // gulp.watch(config.sprites, ['sprites']);
});
*/
// gulp.task('watch', ['browsersync'], function() {
gulp.task('watch', ['browsersync'], function() {

  watch(config.compass, function () {
    gulp.start('compass');
  });
  watch(config.scripts, function () {
    gulp.start('scripts');
  });
  watch(config.images, function () {
    gulp.start('images');
  });
  watch(config.html, function () {
    gulp.start('jade-watch');
  });

});