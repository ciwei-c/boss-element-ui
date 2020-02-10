"use strict";

const { series, src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const fs = require("fs");
const themeDirs = fs.readdirSync("./src/theme");

let task = [];
themeDirs.forEach(theme => {
  task.push(() => {
    return src(`./src/theme/${theme}/*.scss`)
      .pipe(sass.sync())
      .pipe(
        autoprefixer({
          browsers: ["ie > 9", "last 2 versions"],
          cascade: false
        })
      )
      .pipe(cssmin())
      .pipe(dest(`./lib/${theme}`));
  });
  task.push(() => {
    return src("./src/fonts/**")
      .pipe(cssmin())
      .pipe(dest(`./lib/${theme}/fonts`));
  });
});

exports.build = series(...task);
