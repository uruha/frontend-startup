const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const ejs = require('gulp-ejs');

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './public',
            open: 'local'
        }
    });
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('ejs', () => {
    return gulp
        .src('./src/ejs/**/*.ejs')
        .pipe(ejs({}, {}, { ext: '.html' }))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['serve'], () => {
    gulp.watch('./src/ejs/**/*.ejs', ['ejs']);
    gulp.watch('./public/**/*.html', ['reload']);
});
