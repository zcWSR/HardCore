var gulp =  require('gulp');
var gulp_sass  = require('gulp-sass'); 
var gulp_concat = require('gulp-concat');

gulp.task('build', () => {
    // return gulp.src(['./HardCore.scss', './markdown.css'])
    return gulp.src('./HardCore.scss')
    .pipe(gulp_sass().on('error',gulp_sass.logError))
    // .pipe(gulp_concat('HardCore.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    return gulp.watch('./**/*.scss', ['build']);
})