/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const gulp = require('gulp');
const vinyl = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const gutil = require('gulp-util');
const prettyHrtime = require('pretty-hrtime');
const notify = require('gulp-notify');
const mocha = require('gulp-mocha');
const mochaPhantomJS = require('gulp-mocha-phantomjs');
const template = require('gulp-lodash-template');
const rimraf = require('rimraf');

let startTime = null;
const logger = {
  start() {
    startTime = process.hrtime();
    return gutil.log('Running', gutil.colors.green("'bundle'") + '...');
  },
  end() {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    return gutil.log('Finished', gutil.colors.green("'bundle'"), 'in', gutil.colors.magenta(prettyTime));
  }
};

const handleErrors = function() {
  notify.onError({
    title: 'Compile error',
    message: '<%= error.message %>'}).apply(this, arguments);
  return this.emit('end');
};

const build = function(test) {
  const [output, entry, options] = Array.from(test ?
    ['tests.js', './test/index', {debug: true}]
  :
    ['html-docx.js', './src/api', {standalone: 'html-docx'}]);

  const bundleMethod = global.isWatching ? watchify : browserify;
  const bundler = bundleMethod({
    entries: [entry],
    extensions: ['.js', '.tpl']});

  const bundle = function() {
    logger.start();
    return bundler
      .transform('jstify', {engine: 'lodash-micro', minifierOpts: false})
      .bundle(options)
      .on('error', handleErrors)
      .pipe(vinyl(output))
      .pipe(gulp.dest('./build'))
      .on('end', logger.end);
  };

  if (global.isWatching) {
    bundler.on('update', bundle);
  }

  return bundle();
};

async function clean() {
  rimraf('build');
}

gulp.task('clean', clean);
gulp.task('setWatch', () => global.isWatching = true);
gulp.task('build', () => build());

const buildNode = function() {
  logger.start();
  const stream1 = gulp.src('src/**/*', {base: 'src'}).pipe(gulp.dest('build'));
  const stream2 = gulp.src('src/templates/*.tpl').pipe(template({commonjs: true})).pipe(gulp.dest('build/templates'));
  return Promise.all([stream1, stream2]).then(() => logger.end());
};

gulp.task('build-node', buildNode);