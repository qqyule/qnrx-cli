#!/usr/bin/env node
const program = require('commander')
const init = require('./lib/init')

program.version(require('./package.json').version)

program.command('init').action(init)

program.parse(process.argv)
