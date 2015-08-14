var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browsersync = require('browser-sync');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var filesize = require('gulp-filesize');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../../config');
var reload = browsersync.reload;

gulp.task('scripts', function () {


	browsersync.notify('Compiling Scripts');
	var onError = function(err) {
		notify.onError({
			title:    "Gulp Error",
			message:  "Error: <%= error.message %>",
			sound:    "Bottle"
		})(err);
		this.emit('end');
	};
	return gulp.src(config.scripts.src)
		.pipe(plumber(onError))
		/*.pipe(jshint())
		.pipe(jshint.reporter('default'))*/
        .pipe(filesize())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
        .pipe(filesize())
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(reload({stream: true}));
});

