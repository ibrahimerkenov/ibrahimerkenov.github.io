var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		imagemin = require('gulp-imagemin'),
		plumber = require('gulp-plumber');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./built"
				},
				browser: 'chrome',
				notify: false
		});
});

gulp.task('styles', function() {
	return gulp.src('src/assets/styles/*.sass')
	.pipe(sass({}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('built/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src('src/assets/scripts/*.js')
	.pipe(plumber())
	.pipe(uglify().on('error', console.error))
	.pipe(gulp.dest('built/js'));
});

gulp.task('imagemin', function() {
	gulp.src('src/assets/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('built/img'));
});

gulp.task('watch', function () {
	gulp.watch('src/assets/styles/*.sass', ['styles']);
	gulp.watch('src/assets/scripts/*.js', ['scripts']);
	gulp.watch('src/assets/images/*', ['imagemin']);
	gulp.watch('src/assets/scripts/*.js').on("change", browserSync.reload);
	gulp.watch('built/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch', 'imagemin']);