"use strict";

var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('fs-exists-nodeback (required)', function () {

	it('module should load', function (done) {
		var mod = require(path.join(__dirname, '..', 'exists.js'));
		assert(mod !== undefined, 'module is not undefined');
		assert(mod !== null, 'module is not null');
		done();
	});

	it('fs.exists should support non-nodeback style', function (done) {
		fs.exists(".", function (exists) {
			assert(typeof exists === 'boolean', 'exists is boolean');
			assert(exists === true, 'exists is true');
			done();
		});
	});

	it('fs.exists should support nodeback style', function (done) {
		fs.exists(".", function (err, exists) {
			assert(typeof err === 'object', 'err is an object');
			assert(err == undefined, 'err is undefined');
			assert(typeof exists === 'boolean', 'exists is boolean');
			assert(exists === true, 'exists is true');
			done();
		});
	});

});