
var gulp = require('gulp'),
    sass = require('gulp-sass')
    connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./app/stylesheets/app.scss')
    .pipe(sass({
      includePaths: ['./app/jspm_packages/github/twbs/bootstrap-sass@3.3.5/assets/stylesheets/bootstrap/']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./app/stylesheets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/stylesheets/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);