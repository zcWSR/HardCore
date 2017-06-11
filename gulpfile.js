var gulp =  require('gulp');
var gulp_sass  = require('gulp-sass'); 

gulp.task('build', () => {
    return gulp.src('./HardCore.scss')
    .pipe(gulp_sass().on('error',gulp_sass.logError))
    .pipe(gulp.dest('./build'));
});