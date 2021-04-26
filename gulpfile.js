var gulp = require('gulp'),
  compass = require('gulp-compass'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  ejs = require('gulp-ejs'),
  browserSync = require('browser-sync'),
  fs = require('fs'),
  rename = require('gulp-rename');


gulp.task('js', function () {
  gulp.src('./js/**/*.js')
    .pipe(plumber())
    .pipe(gulp.dest('public/js/'));
});


gulp.task('compass', function () {
  gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      comments: false,
      css: 'public/css/',
      sass: 'scss/'
    }))
    .pipe(browserSync.reload({ stream: true }));
});

// Sass
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('ejs', function () {
  gulp.src(['./ejs/**/*.ejs', '!' + './ejs/**/_*.ejs'])
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: ["public/", "public/"],
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload({ stream: true });
});
// watch
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['compass', 'bs-reload']);
  gulp.watch('ejs/**/*.ejs', ['ejs', 'bs-reload']);
  gulp.watch('js/**/*.js', ['js', 'bs-reload']);
  gulp.watch('/public/*.html', ['bs-reload']);
  gulp.watch('/public/*/*.html', ['bs-reload']);
});

gulp.task('default', ['browser-sync', 'watch']);