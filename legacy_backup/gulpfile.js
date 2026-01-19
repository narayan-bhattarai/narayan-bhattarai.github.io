'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

function styles() {
  return gulp.src('scss/resume.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src('js/resume.js')
    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
}

function minifyCss() {
  return gulp.src('css/resume.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}

function copyBootstrap() {
  return gulp.src([
    'node_modules/bootstrap/dist/**/*',
    '!**/npm.js',
    '!**/bootstrap-theme.*',
    '!**/*.map'
  ])
    .pipe(gulp.dest('vendor/bootstrap'));
}

function copyJquery() {
  return gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('vendor/jquery'));
}

function copyJqueryEasing() {
  return gulp.src(['node_modules/jquery.easing/*.js'])
    .pipe(gulp.dest('vendor/jquery-easing'));
}

function copyFontAwesome() {
  return gulp.src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ])
    .pipe(gulp.dest('vendor/font-awesome'));
}

function copyDevIcons() {
  return gulp.src([
    'node_modules/devicons/**/*',
    '!node_modules/devicons/*.json',
    '!node_modules/devicons/*.md',
    '!node_modules/devicons/!PNG',
    '!node_modules/devicons/!PNG/**/*',
    '!node_modules/devicons/!SVG',
    '!node_modules/devicons/!SVG/**/*'
  ])
    .pipe(gulp.dest('vendor/devicons'));
}

function copySimpleLineIcons() {
  return gulp.src(['node_modules/simple-line-icons/**/*', '!node_modules/simple-line-icons/*.json', '!node_modules/simple-line-icons/*.md'])
    .pipe(gulp.dest('vendor/simple-line-icons'));
}

const copy = gulp.parallel(copyBootstrap, copyJquery, copyJqueryEasing, copyFontAwesome, copyDevIcons, copySimpleLineIcons);

function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });

  gulp.watch('scss/*.scss', gulp.series(styles, minifyCss));
  gulp.watch('js/*.js', scripts);
  gulp.watch('*.html').on('change', browserSync.reload);
}

const build = gulp.series(copy, styles, minifyCss, scripts);
const dev = gulp.series(build, serve);

exports.copy = copy;
exports.styles = styles;
exports.scripts = scripts;
exports.default = build;
exports.dev = dev;
