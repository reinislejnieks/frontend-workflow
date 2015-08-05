var gulp = require('gulp');
var changed = require('gulp-changed');
var browsersync = require('browser-sync');
var config = require('../../config').html;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('html', function() {

  browsersync.notify('Working on html');
  return gulp.src(config.src)
    /*.pipe(changed(config.dest))*/ // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});