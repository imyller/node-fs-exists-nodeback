var fs = require('fs');
if (fs.exists) {
	(function () {

		"use strict";

		var util = require('util');
		var pathModule = require('path');
		var binding = process.binding('fs');
		var constants = require('constants');
		var FSReqWrap = binding.FSReqWrap;

		function nullCheck(path, callback) {
			if (('' + path).indexOf('\u0000') !== -1) {
				var er = new Error('Path must be a string without null bytes');
				er.code = 'ENOENT';
				if (typeof callback !== 'function')
					throw er;
				process.nextTick(callback, er);
				return false;
			}
			return true;
		}

		// Node.js version >= 0.12

		var exists_012 = function (path, callback) {
			if (!nullCheck(path, cb)) return;
			var req = new FSReqWrap();
			req.oncomplete = cb;
			binding.stat(pathModule._makeLong(path), req);
			function cb(err, stats) {
				if (callback) {
					if (callback.length > 1)
						callback(null, err ? false : true);
					else
						callback(err ? false : true);
				}
			}
		};

		// Node.js version < 0.12

		var exists_010 = function (path, callback) {
			if (!nullCheck(path, cb)) return;
			binding.stat(pathModule._makeLong(path), cb);
			function cb(err, stats) {
				if (callback) {
					if (callback.length > 1)
						callback(null, err ? false : true);
					else
						callback(err ? false : true);
				}
			}
		};

		if (FSReqWrap === undefined) {
			fs.exists = exists_010;
		} else {
			fs.exists = exists_012;
		}

	}());
}