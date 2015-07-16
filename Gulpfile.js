'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var accord = require('gulp-accord');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('stylus', function () {
    var postcss_processors = [
        autoprefixer({
            browsers: ['last 2 versions', 'last 2 android versions', 'last 1 ios_saf version']
        })
    ];

    return gulp.src('./src/efGrid.styl')
        .pipe(sourcemaps.init())
        .pipe(accord('stylus'))
        .pipe(postcss(postcss_processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('release'));
});

gulp.task('default', ['stylus'], function () {

});
