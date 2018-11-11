var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	fileinclude = require('gulp-file-include');
var babel  = require('gulp-babel');
var browserify = require('gulp-browserify');
var vueify = require('gulp-vueify');


gulp.task('sass', function () {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(rename({
			suffix: '.min',
			prefix: ''
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'))
		/*.pipe(reload({
			stream: true
		}));*/
});

gulp.task('headersass', function () {

	return gulp.src('assets/scss/header.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(rename({
			suffix: '.min',
			prefix: ''
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'))
	/*	.pipe(reload({
			stream: true
		}));*/
});

gulp.task('js', function () {
	return gulp.src([
			'assets/js/main.js'
		])
		//	.pipe(uglify())
		//.pipe(concat('main.min.js'))
		/*.pipe(babel({
			//presets: ['@babel/env'],
			presets: ['es2015'],
			//plugins: ["transform-es2015-modules-commonjs"]
		}))*/
		.pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
		
		//.pipe(uglify())
		.pipe(gulp.dest('js'))
		/*.pipe(reload({
			stream: true
		}));*/
});


gulp.task('vueify', function () {
  return gulp.src('assets/js/components/**/*.vue')
    .pipe(vueify())
	/*.pipe(browserify({
      insertGlobals : true,
      debug : true
    }))
	.pipe(babel({
		//presets: ['@babel/env'],
		presets: ['es2015'],
		//plugins: ["transform-es2015-modules-commonjs"]
	}))*/
	//.pipe(concat('components.js'))
    .pipe(gulp.dest('assets/js/components'));
});



gulp.task('watch', ['sass','vueify','js',], function () {
	gulp.watch('assets/scss/header.scss', ['headersass']);
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch('assets/js/**/*.js', ['js']);
	gulp.watch('assets/js/components/**/*.vue', ['vueify']);
});

gulp.task('default', ['watch']);