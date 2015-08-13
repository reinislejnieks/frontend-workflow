var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var jade =  require('gulp-jade');
var config = require('../../config').html;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('html', function() {
	var YOUR_LOCALS = {};

	browsersync.notify('Compiling jade');
	var onError = function(err) {
		notify.onError({
			title:    "Gulp Error",
			message:  "Error: <%= error.message %>",
			sound:    "Bottle"
		})(err);
		this.emit('end');
	};
	return gulp.src(config.src)
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(jade({
		locals: YOUR_LOCALS,
		pretty:true
	}))
	.pipe(gulp.dest(config.dest));
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
gulp.task('jade-watch', ['html'], reload);