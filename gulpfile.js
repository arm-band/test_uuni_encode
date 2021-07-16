/**
 * gulp task
 *
 * @author    アルム＝バンド
 * @copyright Copyright (c) アルム＝バンド
 */
/* require
*************************************** */
const { series, parallel } = require('gulp');
const browsersync          = require('./gulp/tasks/browsersync');
const ejs                  = require('./gulp/tasks/ejs');
const js                   = require('./gulp/tasks/js');
const sass                 = require('./gulp/tasks/sass');

//Scss
exports.sass = sass;
//ejs
exports.ejs = ejs;
//js
exports.js = js;

//ビルド
const taskBuild = parallel(sass, ejs, js);

//ビルドなし
const taskServer = browsersync;
exports.server = taskServer;

//gulpのデフォルトタスクで諸々を動かす
exports.default = series(taskBuild, taskServer);
