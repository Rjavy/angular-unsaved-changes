var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var pump   = require('pump');

gulp.task('minjs', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});