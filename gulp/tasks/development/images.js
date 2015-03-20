var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var browsersync = require('browser-sync');
var config = require('../../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {

  browsersync.notify('Working on images');
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest(config.dest));
});