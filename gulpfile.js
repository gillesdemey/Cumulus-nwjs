'use strict';

var gulp  = require('gulp'),
    sass  = require('gulp-sass');


gulp.task('watch', function () {
  gulp.watch('assets/scss/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['sass', 'watch']);