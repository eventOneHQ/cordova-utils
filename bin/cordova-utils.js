#!/usr/bin/env node

const program = require('commander')

const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('version', 'set the version in the config.xml file')
  .parse(process.argv)
