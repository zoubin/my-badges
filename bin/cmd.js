#!/usr/bin/env node

var Command = require('commander').Command

var program = new Command('mybadges')

program
  .version(require('../package.json').version)
  .option('-c, --coverage', 'coverage')
  .option('-d, --dependencies', 'dependencies')
  .option('-D, --dev', 'devDependencies')
  .option('-v, --vers', 'package version')
  .option('-s, --status', 'travis build status')
  .option('--downloads', 'downloads from npm')
  .option('--npm', 'info on npm')
  .option('--licence', 'license')
  .option('--license', 'license')
  .option('--node', 'engines: node version support')
  .option('--user <string>', 'GitHub username')
  .option('--repo <string>', 'GitHub repository')
  .option('--minor', '-vs')
  .option('--major', '-vscdD --node')
  .parse(process.argv)

var create = require('..')
var resolve = require('resolve')

var options = [
  'vers',
  'status',
  'coverage',
  'dependencies',
  'devDependencies',
  'node',
  'downloads',
  'license',
  'licence',
  'npm',
]

var major = ['vers', 'status', 'coverage', 'dependencies', 'devDependencies', 'node']
var minor = ['vers', 'status']

var badges = []
if (program.major) {
  badges = major
} else if (program.minor) {
  badges = minor
} else {
  options.forEach(function (b) {
    if (program[b]) {
      badges.push(b)
    }
  })
}

var info = {
  name: program.args[0],
  user: program.user,
  repo: program.repo,
}

resolve('./package.json', {
  basedir: process.cwd(),
  pathFilter: function () {
    return 'package.json'
  },
}, function (err, file, pkg) {
  var url = pkg && pkg.repository && pkg.repository.url
  if (url) {
    var parts = url.split('/').slice(-2)
    info.user = info.user || parts[0]
    info.repo = info.repo || parts[1].slice(0, -4)
    info.name = info.name || pkg.name
  }

  if (!info.repo) {
    info.repo = info.name
  }

  if (!info.name) {
    info.name = info.repo
  }

  badges.forEach(function (name) {
    console.log(create(name, info).link)
  })
})

