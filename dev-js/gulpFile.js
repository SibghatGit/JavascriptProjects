// require gulps
var gulp = require('gulp');
var jshint = require('gulp-jshint');
 var watch = require('gulp-watch');

// Lint Task
gulp.task('lint', function() {
  debugger;
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'copy-folder']);

});
gulp.task('copy-folder', function() {
  debugger;
  gulp.src('js/*.js')
    .pipe(gulp.dest('../js/'));
});


gulp.task('default',['lint','watch']);
