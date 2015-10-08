#!/usr/bin/env node

var minimist = require('minimist')
var create = require('..')
var fs = require('fs')
var resolve = require('resolve')

var options = [
  'dependencies',
  'devDependencies',
  'status',
  'downloads',
  'version',
  'npm',
  'license',
  'node',
]

var portfolio = {
  major: ['status', 'dependencies', 'devDependencies', 'npm', 'version'],
  full: options,
  minor: ['status', 'version', 'npm'],
}
var argv = minimist(process.argv.slice(2), {
  boolean: ['help'].concat(options, Object.keys(portfolio)),
  string: ['user', 'repo'],
  alias: {
    d: 'dependencies',
    D: 'devDependencies',
    s: 'status',
    o: 'downloads',
    p: 'npm',
    l: 'license',
    n: 'node',
    v: 'version',

    U: 'user',
    R: 'repo',
    h: 'help',
  },
})

;(function () {
  if (argv.help) {
    fs.createReadStream(__dirname + '/help.txt')
      .pipe(process.stdout)
      .on('close', function () {
        process.exit(1)
      })
    return
  }

  if (argv.major) {
    portfolio.major.forEach(function (i) {
      argv[i] = true
    })
  } else if (argv.minor) {
    portfolio.minor.forEach(function (i) {
      argv[i] = true
    })
  } else if (argv.full) {
    portfolio.full.forEach(function (i) {
      argv[i] = true
    })
  }

  var info = {
    name: argv._[0],
    user: argv.user,
    repo: argv.repo,
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

    options.forEach(function (opt) {
      if (argv[opt]) {
        var o = create(opt, info)
        if (o) {
          return console.log(o.link)
        }
        if (options.indexOf(opt) === -1) {
          return console.warn('WARN: `' + opt + '`not supported yet')
        }
        console.warn('Cannot create badge for `' + opt + '`')
        console.warn('Please make sure you are running the command where package.json lies, or user name, repo name, package name are provided properly in the command line')
      }
    })

  })

})()


