/*
 * cordova-linter
 * https://github.com/Trott/cordova-linter
 *
 * Copyright (c) 2013 Rich Trott
 */


'use strict';

function CordovaLinter() {
	this.status = Object.freeze({
		OK: 0,
		WARNING: 1,
		ERROR: 2,
	});
    this.findAbsolutePathsInHtml = require('./cordova-linter/findAbsolutePathsInHtml').findAbsolutePathsInHtml;
    this.findProtocolLessPathsInHtml = require('./cordova-linter/findProtocolLessPathsInHtml').findProtocolLessPathsInHtml;
    this.lint = require('./cordova-linter/lint').lint;
    this.version = require('./cordova-linter/version').version;
}

module.exports = CordovaLinter;