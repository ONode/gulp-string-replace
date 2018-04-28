/**
 * Gulp String Replace
 * https://github.com/tomaszczechowski/gulp-string-replace
 *
 * Copyright by Tomasz Czechowski
 * MIT license.
 */
'use strict';
const jsEditor = require ("./src/json_edit");
const versionPump = require ("./src/version_pump");
const replace = require ("./src/replace");
module.exports = {
    jsEditor,
    versionPump,
    replace
};
