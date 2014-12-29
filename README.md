# newrelic-fibers

Support for fibers in New Relic using [cls-fibers](https://github.com/goodeggs/cls-fibers)

[![NPM version](http://img.shields.io/npm/v/newrelic-fibers.svg?style=flat-square)](https://www.npmjs.org/package/newrelic-fibers)
[![Build Status](http://img.shields.io/travis/goodeggs/newrelic-fibers.svg?style=flat-square)](https://travis-ci.org/goodeggs/newrelic-fibers)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/goodeggs/newrelic-fibers/blob/master/LICENSE.md)

## Usage

```
npm install newrelic-fibers
```

`newrelic-fibers` exports a function that takes a callback.

```javascript
// Instead of require('newrelic') ...
require('newrelic-fibers')(function(err) {
  if (err) {
    console.error(err);
  }
});
```

## Contributing

Please follow our [Code of Conduct](https://github.com/goodeggs/mongoose-webdriver/blob/master/CODE_OF_CONDUCT.md)
when contributing to this project.

```
$ git clone https://github.com/goodeggs/newrelic-fibers && cd newrelic-fibers
$ npm install
$ npm test
```

_Module scaffold generated by [generator-goodeggs-npm](https://github.com/goodeggs/generator-goodeggs-npm)._
