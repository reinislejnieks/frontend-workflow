var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browsersync = require('browser-sync');
var compass = require('gulp-compass');
var gulpFilter = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gutil = require('gulp-util');
var config = require('../../config');

gulp.task('compass', function(){

	var filter = gulpFilter(['*.css', '!*.map']);
	browsersync.notify('Compiling Sass');
	var onError = function(err) {
		notify.onError({
			title:    "Gulp Error",
			message:  "Error: <%= error.message %>",
			sound:    "Bottle"
		})(err);
		this.emit('end');
	};
	return gulp.src(config.compass.src)
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(compass(config.compass.options))
	// .pipe(sourcemaps.init())
	.pipe(autoprefixer(config.autoprefixer))
	// .pipe(filter)
	// .pipe(sourcemaps.write('.',{includeContent: false}))
	// .pipe(filter.restore())
	.pipe(gulp.dest(config.compass.dest))
	.pipe(rename('main.min.css'))
	.pipe(minifyCss())
	.pipe(gulp.dest(config.compass.dest));
});