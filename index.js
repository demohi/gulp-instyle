/**
 * gulp-instyle - index.js
 * Created by mds on 15/6/4.
 */

'use strict';

var through = require('through2');
var instyle = require('instyle');

module.exports = function (options) {
    return through.obj(function (file, enc, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        var contents = file.contents.toString();
        file.contents = new Buffer(instyle(contents), "binary");
        callback(null, file);
    })
};
