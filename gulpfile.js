const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("node-sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const through2 = require("through2");
// 编译脚本文件
// @param {string} babelEnv babel环境变量
// @param {string} destDir 目标目录

const paths = {
  dest: {
    lib: "lib", //commonjs文件存放的目录名，关注
    esm: "esm", //ES module文件存放的目录名，暂时不关心
    dist: "dist", //umd文件存放的目录名,暂时不关心
  },
  styles: "src/**/*.scss", //样式文件路径
  scripts: [
    "src/**/*.{ts,tsx}",
    "!src/**/demo/*.{ts,tsx}",
    "!src/**/__tests__/*.{ts,tsx}",
  ], //脚本路径,glob详细https://www.gulpjs.com.cn/docs/getting-started/explaining-globs/
};
//当前组件样式import './index.less'=>import './index.css'
//依赖的其他组件样式 import "../test-comp/style"=>import "../test-comp/style/css.js"
//依赖的其他组件样式 import '../test-comp/style/index.js'=>import '../test-comp/style/css.js'

function cssInction(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, ".css");
}
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) //使用gulp-babel处理
    .pipe(
      through2.obj(function z(chunk, encoding, next) {
        this.push(chunk.clone());
        //找到style/index.js
        if (chunk.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = chunk.contents.toString(encoding);
          chunk.contents = Buffer.from(cssInction(content)); //文件内容处理
          chunk.path = chunk.path.replace(/index\.js/, "css.js"); //文件重命名
          this.push(chunk); //新增该文件
          next();
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(destDir)); //输出
}
function compileCJS() {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
}
//编译esm
function compileESM() {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
}
//拷贝scss文件
function copyScss() {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}
//生成css文件
function Scss2css() {
  return gulp
    .src(paths.styles)
    .pipe(sass()) //处理scss文件
    .pipe(autoprefixer()) //根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) //压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}
//串行执行编译脚本任务,避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);
//整体并行任务，后续加入样式处理 可以并行处理
const build = gulp.parallel(buildScripts, copyScss, Scss2css);
exports.build = build;
exports.default = build;
