const gulp = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const render = require("gulp-nunjucks-render");
const lineec = require("gulp-line-ending-corrector");
const { src, series, parallel, dest, watch } = require("gulp");

// vendor files
let vendorjs = [
  "./src/vendors/js/jquery-1.11.3.min.js",
  "./src/vendors/js/jquery-ui.js",
  "./src/vendors/js/gsap.min.js",
  "./src/vendors/js/ScrollTrigger.min.js",
  "./src/vendors/js/flickity.pkgd.min.js",
  "./src/vendors/js/splittext3.min.js",
];

let vendorcss = [
  "./src/vendors/css/jquery-ui.css",
  "./src/vendors/css/bootstrap.min.css",
  "./src/vendors/css/flickity.css",
];

// path
let cssPath = "./src/sass/**/*.scss";
let jsPath = "./src/js/**/*.js";
let htmlPath = "./src/html/**/*.njk";



function nunjucks() {
  return gulp
    .src("./src/html/pages/**/*.+(njk)")
    .pipe(
      render({
        path: ["./src/html/templates/partials/", "./src/html/templates/macro/"],
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({ stream: true }));
}

// compile scss into css
function style() {
  return gulp
    .src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(lineec())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

// concat vendor css
function concatcss() {
  return gulp
    .src(vendorcss)
    .pipe(concat("vendor.css"))
    .pipe(cleanCSS())
    .pipe(lineec())
    .pipe(gulp.dest("./dist/css"));
}

// compile js
function jstask() {
  return gulp
    .src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(sourcemaps.write("."))
    .pipe(lineec())
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
}

// concat vendor js
function concatjs() {
  return gulp
    .src(vendorjs)
    .pipe(concat("vendor.js"))
    .pipe(sourcemaps.write("."))
    .pipe(uglify())
    .pipe(lineec())
    .pipe(gulp.dest("./dist/js"));
}

// concat vendor js
function fonts() {
  return gulp
    .src("./src/vendors/fonts/fonts/*")
    .pipe(gulp.dest("./dist/fonts"));
}

// compile image
function imagetask() {
  return gulp
    .src("./src/images/**/*.+(png|jpg|jpeg|svg|gif|webp|ico)")
    .pipe(
      cache(
        imagemin({
          progressive: true,
          interlaced: true,
          optimizationLevel: 5,
        })
      )
    )
    .pipe(gulp.dest("./dist/images"));
}

// browsersync and watch

function watchtask() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
  gulp.watch([cssPath, jsPath, htmlPath], parallel(style, jstask, nunjucks));
  gulp.watch("dist/*.html").on("change", browserSync.reload);
}

exports.style = style;
exports.jstask = jstask;
exports.imagetask = imagetask;
// exports.copyHtml = copyHtml;
exports.concatjs = concatjs;
exports.concatcss = concatcss;
exports.fonts = fonts;

exports.default = series(
  parallel(style, jstask, nunjucks, imagetask, concatjs, concatcss, fonts),
  watchtask
);
