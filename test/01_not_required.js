"use strict";

var fs = require('fs');
var assert = require('assert');

describe('fs-exists-nodeback (not required)', function () {

	it('fs.exists should support non-nodeback style', function (done) {
		fs.exists(".", function (exists) {
			assert(typeof exists === 'boolean', 'exists is boolean');
			assert(exists === true, 'exists is true');
			done();
		});
	});

	it('fs.exists should not support nodeback style', function (done) {
		fs.exists(".", function (err, exists) {
			assert(typeof err === 'boolean', 'err is a boolean');
			assert(err === true, 'err is true');
			assert(exists === undefined, 'exists is undefined');
			done();
		});
	});

});