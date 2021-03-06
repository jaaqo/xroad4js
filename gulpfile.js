var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
 
gulp.task('test', ['lint'], function () {
  return gulp.src('./test/index.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('lint', function () {
  return gulp.src(['./index.js', './lib/*.js', './test/*.js'])
    .pipe(eslint({rulePaths: ['./']}))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('default', ['lint', 'test'], function () {
  gulp.watch(['./index.js', './lib/*.js', './test/*.js'], ['test']);
});
