/*======================*/
/*====== Requires ======*/
/*======================*/
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var br = require('browser-sync');
var reload = br.reload;

/*======================*/
/*====== Tasks =========*/
/*======================*/
gulp.task('js', function () {
	return gulp.src([
		'js/**/*.js', 
		'!js/**/*.min.js'
		])
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.filesize())
		.pipe(plugins.uglify())
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest('dist'))
		.pipe(plugins.rename('app.min.js'))
		.pipe(plugins.uglify())
        .pipe(plugins.filesize())
		.pipe(gulp.dest('dist'))		
 		.pipe(reload({stream:true}))
		.pipe(plugins.notify({message: "::: scripts ready :::"}));
});

gulp.task('compass', function(){
	return gulp.src([
		'scss/main.scss'
	])
	.pipe(plugins.compass({
		css: 'dist',
		sass: 'scss',
		image: 'dist/img',
		sourcemap: true,
		debug: true

	}))
	.pipe(gulp.dest('dist'))
	.pipe(plugins.rename('main.min.css'))
	.pipe(plugins.minifyCss())
	.pipe(gulp.dest('dist'))
	.pipe(reload({stream:true}))
	.pipe(plugins.notify({message: "::: styles ready :::"}));
});

gulp.task('clean', function () {  
  return gulp.src('dest', {read: false})
    .pipe(plugins.clean());
});

gulp.task('imgs', function () {
    return gulp.src('img/*')
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function () {
	var files = [
		'dist/*.html',
		'dist/*.css',
		'dist/imgs/*.png',
		'dist/imgs/*.jpg',
		'dist/imgs/*.svg',
		'dist/*.js'
	];

	browserSync.init(files, {
		server: {
			baseDir: './dist'
		}
	});
});

/*======================*/
/*====== Task Groups ===*/
/*======================*/
gulp.task('default', ['compass', 'js', 'imgs', 'clean','watch','browser-sync']);
gulp.task('build', ['compass', 'js', 'imgs', 'clean']);

/*======================*/
/*====== Watch =========*/
/*======================*/
gulp.task('watch', function () {
//	var watcher = gulp.watch('templates/*.tmpl.html', ['build']);
	var watcher = gulp.watch('*.html', ['build']);
	watcher.on('change', function (e) {
		console.log('Event type: ' + e.type); // added, changed, or deleted
		console.log('Event path: ' + e.path); // The path of the modified file
	});
   
});

/*======================*/
/*====== Docs ==========*/
/*======================*/

// js/app.js
// Matches the exact file
// js/*.js
// Matches all files ending in .js in the js directory only
// js/**/*.js
// Matches all files ending in .js in the js directory and all child directories
// !js/app.js
// Excludes js/app.js from the match
// *.+(js|css)
// Matches all files in the root directory ending in .js or .css
/*
// Run css task only when js is finished
gulp.task('css', ['js'], function () {
   // Deal with CSS here
});
*/
