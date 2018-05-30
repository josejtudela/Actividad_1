let gulp = require('gulp'),
browserSync = require('browser-sync'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
cleancss = require('gulp-clean-css');

gulp.task('default',['browser','scripts','css']);

gulp.task('browser',()=>{
  browserSync.init({
    server:{
      baseDir: "./"
      }
  })
});

gulp.task('scripts',()=>{
 return gulp.src(['js/**/*.js','js/**/*.min.js'])
     .pipe(concat('app.js'))
     .pipe(gulp.dest('dist/js'))
     .pipe(rename('app.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist/js'))
});

gulp.task('css',()=>{
 return gulp.src(['css/**/*.css'])
     .pipe(concat('app.css'))
     .pipe(gulp.dest('dist/css'))
     .pipe(rename('app.min.css'))
     .pipe(cleancss())
     .pipe(gulp.dest('dist/css'))
});

gulp.watch(['index.html'])
    .on('change',()=>{
      browserSync.reload();
    });

gulp.watch(['js/**/*.js','js/**/*.min.js'])
    .on('change',()=>{
      return gulp.src(['js/**/*.js','js/**/*.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.watch(['css/**/*.css'])
    .on('change',()=>{
      return gulp.src(['css/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename('app.min.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('dist/css'))
});
