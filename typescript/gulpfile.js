const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge-stream');
var del = require('del');

const tsProject = ts.createProject('tsconfig.json');

const dirs = {
  dist: ['dist']
};

const movePackage = () => {
  return gulp.src('package.json')
    .pipe(gulp.dest(dirs.dist));
};

const moveReadme = () => {
  return gulp.src('readme.md')
    .pipe(gulp.dest(dirs.dist));
};

const compileProd = () => {
  const tsResult = tsProject.src()
    .pipe(tsProject())
  return merge(tsResult, tsResult.js, tsResult.dts)
    .pipe(gulp.dest(dirs.dist))
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
  gulp.watch(['src/**/*.ts', 'index.ts'], buildTest);
};

const delDist = () => {
  return del(['dist/**/*']);
};

const buildMeta = gulp.parallel(movePackage, moveReadme)
const build = gulp.series(delDist, compileProd, buildMeta);
const buildTest = gulp.series(compileTest);
const dev = gulp.series(buildTest, watch);

module.exports = {
  build,
  buildTest,
  dev,
  default: build
};
