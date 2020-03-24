const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');
var del = require('del');

const tsProject = ts.createProject('tsconfig.json');

const dirs = {
  dist: ['dist']
};

const compileProd = () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(dirs.dist));
};

const compileTest = () => {
  const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());
  return merge(tsResult, tsResult.js)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dirs.dist));
};

const watch = () => {
  gulp.watch(['src/**/*.ts', 'cli.ts', 'i18n/**/*.json'], buildTest);
};

const delDist = () => {
  return del(['dist/**/*']);
};

const build = gulp.series(delDist, compileProd);
const buildTest = gulp.series(compileTest);
const dev = gulp.series(buildTest, watch);

module.exports = {
  build,
  buildTest,
  dev,
  default: build
};
