# cordova-utils

[![Build Status](https://api.travis-ci.com/eventOneHQ/cordova-utils.svg?branch=master)](http://travis-ci.com/eventOneHQ/cordova-utils)
[![NPM Version](https://img.shields.io/npm/v/cordova-utils.svg?style=flat)](https://www.npmjs.org/package/cordova-utils)
[![NPM Downloads](https://img.shields.io/npm/dm/cordova-utils.svg?style=flat)](https://www.npmjs.org/package/cordova-utils)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A set of basic utilities for Apache Cordova apps.

## Installing

```bash
npm install -g cordova-utils

# or if you just want to use it locally
npx cordova-utils version -v 1.4.5 -b 445
```

_Note: For a global install of `-g cordova-utils`, OSX/Linux users may need to prefix the command with `sudo` or can setup [proper file permissions on OSX for npm](http://www.johnpapa.net/how-to-use-npm-global-without-sudo-on-osx/) to install without `sudo`._

## Usage:

### Command Line

```bash
cordova-utils version [options] -v <version> -b <build>
```

**Example:**

```bash
cordova-utils version -v 1.4.5 -b 445
```

### Library

**Example:**

```javascript
// CJS
const CordovaUtils = require('cordova-utils')
// or MJS
import CordovaUtils from 'cordova-utils'


const cordovaUtils = new CordovaUtils()

cordovaUtils
  .setVersion(version, build, configFile)
  .then(res => {
    // do something
  })
  .catch(err => {
    // handle error
  })
```
