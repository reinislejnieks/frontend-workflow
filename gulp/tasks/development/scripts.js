var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browsersync = require('browser-sync');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var filesize = require('gulp-filesize');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../../config');

gulp.task('scripts', function () {


	browsersync.notify('Compiling Scripts');
	return gulp.src(config.scripts.src)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
        .pipe(filesize())
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
        .pipe(filesize())
		.pipe(gulp.dest(config.scripts.dest));
});