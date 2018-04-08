var gulp =  require('gulp');
var gulp_sass  = require('gulp-sass'); 
var gulp_concat = require('gulp-concat');
var path = require('path');

gulp.task('build', () => {
    var dest = path.resolve(__dirname, '../blog-v2.5/src');
    console.log(dest);
    return gulp.src('./HardCore.scss')
    .pipe(gulp_sass().on('error',gulp_sass.logError))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', () => {
    return gulp.watch('./**/*.scss', ['build']);
})