var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    babel = require('gulp-babel'),
    react = require('gulp-react')

gulp.task('jsx', function() {
  return gulp.src('jsx/*.jsx')
  .pipe(plumber())
  .pipe(react({
    harmony: false, es6module: true
  }))
  .pipe(gulp.dest('source/javascripts'));
});

gulp.task('watch', function() {
  gulp.watch('jsx/*', ['jsx']);
});

gulp.task('default', ['jsx', 'watch']);
gulp.task('buildProd', ['jsx']);
