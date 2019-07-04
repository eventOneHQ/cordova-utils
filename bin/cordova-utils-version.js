#!/usr/bin/env node

const program = require('commander')
const clc = require('cli-color')

const CordovaUtils = require('../lib/index')

const cordovaUtils = new CordovaUtils()

program
  .option('-v, --semver <version>', 'Version number to be set.')
  .option('-b, --build <build>', 'Build number to be set. ')
  .option('-c, --config <config>', 'Location of config.xml (e.g. /path/to/config.xml). Defaults to ./config.xml.')
  .action(cmd => {
    cordovaUtils.setVersion(cmd.semver, cmd.build, cmd.config)
      .then(res => {
        console.log(clc.green(res))
      })
      .catch(err => {
        console.log(clc.red(err))
      })
  })
  .parse(process.argv)
