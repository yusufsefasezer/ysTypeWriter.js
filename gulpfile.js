const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const lazypipe = require('lazypipe');
const rename = require('gulp-rename');
const header = require('gulp-header');
const watch = require('gulp-watch');
const package = require('./package.json');

// Scripts
const uglify = require('gulp-uglify');

var paths = {
    input: 'src/*',
    output: 'dist/'
}

var banner = {
    full:
        '/*!\n' +
        ' * <%= package.name %> - <%= package.description %>\n' +
        ' * Author: <%= package.author.name %> <<%= package.author.email %>>\n' +
        ' * Version: v<%= package.version %>\n' +
        ' * Url: <%= package.repository.url %>\n' +
        ' * License: <%= package.license %>\n' +
        ' */\n\n',
    min:
        '/*!' +
        ' <%= package.name %> v<%= package.version %>' +
        ' | <%= package.author.name %> <<%= package.author.email %>>' +
        ' | <%= package.license %> License' +
        ' | <%= package.repository.url %>' +
        ' */\n'
};

gulp.task('clean', function () {
    del.sync([paths.output]);
});

gulp.task('build', function () {
    const jsTasks = lazypipe()
        .pipe(header, banner.full, { package: package })
        .pipe(gulp.dest, paths.output)
        .pipe(rename, { suffix: '.min' })
        .pipe(uglify)
        .pipe(header, banner.min, { package: package })
        .pipe(gulp.dest, paths.output)

    return gulp.src(paths.input)
        .pipe(jsTasks());
});

gulp.task('watch', function () {
    gulp.watch(paths.input).on('change', function () {
        gulp.start('default');
    });
});

gulp.task('default', ['clean', 'build']);