fs-exists-nodeback
==================
[![Build Status](https://travis-ci.org/imyller/node-fs-exists-nodeback.svg)](https://travis-ci.org/imyller/node-fs-exists-nodeback)
[![npm version](https://badge.fury.io/js/fs-exists-nodeback.svg)](http://badge.fury.io/js/fs-exists-nodeback)

[![NPM](https://nodei.co/npm/fs-exists-nodeback.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fs-exists-nodeback/)
[![NPM](https://nodei.co/npm-dl/fs-exists-nodeback.png?months=6&height=3)](https://nodei.co/npm-dl/fs-exists-nodeback/)

This Node.js module adds support for nodeback-style callbacks to `fs.exists` without breaking backward compatibility.

The “error-first” callback (also known as an "nodeback", “errorback”, “errback”, or “node-style callback”) has become 
the standard for Node.js callbacks. One unfortunate exception to this is `fs.exists(path, callback)` function provided by Node.js core library.
 
The `fs-exist-nodeback` module polyfills `fs.exists` so that it remains backward compatible with the original Node.js callback
style while simultaneously adding transparent support for nodeback-style callback functions. 

Internal system level features or functionality of `fs.exists` are not modified in any way.

## Installation

```sh
$ npm install fs-exists-nodeback
```

## Usage

```js      
require('fs-exists-nodeback');
```

That's it! Now `fs.exists` supports nodeback-style callbacks while still remaining backward compatible with existing code.

Nodeback-style is supported:
```js
var fs = require('fs');

fs.exists('./', function (err, exists) {
	if (err) return console.err(err);
	console.log('exists: ' + exists);
});
```

Node.js original callback style is supported:
```js
var fs = require('fs');

fs.exists('./', function (exists) {
	console.log('exists: ' + exists);
});
```

## Compatibility

`fs-exists-nodeback` is compatible with Node.js and io.js version `0.8` or newer. 

Travis CI tests are run for all released versions of Node.js.

## Testing

```sh
$ npm test
```

## Contributing

You can find the repository at:
https://github.com/imyller/node-fs-exists-nodeback

Issues/Feature Requests can be submitted at:
https://github.com/imyller/node-fs-exists-nodeback/issues

I'd really like to hear your feedback, and I'd love to receive your pull-requests!

## Copyright

Copyright 2016 Ilkka Myller. This software is licensed under the MIT License, see `LICENSE` for details.
