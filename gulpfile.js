var gulp = require('gulp');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var shell = require('gulp-shell');

// BrowserSync
gulp.task('browserSync', function() {
	browserSync({
		open: false,
		notify: false,
		proxy: 'localhost:3000',
		port: 3001
	});
});

// Linting with JSHint
gulp.task('lint', function() {
	gulp.src(['index.js', 'app/**/*.js', 'updates/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// Run nodemon
gulp.task('run', shell.task('nodemon index.js'));

gulp.task('watch', ['browserSync', 'lint'], function() {
	gulp.watch('public/css/**/*.css', browserSync.reload);
	gulp.watch(['index.js', 'app/**/*.js', 'updates/**/*.js'], ['lint']);
	gulp.watch(['views/**/*.html'], browserSync.reload);
	gulp.watch('public/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['run', 'watch']);
