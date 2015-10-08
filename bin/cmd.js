var minimist = require('minimist')
var creator = require('../lib/creator')

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
  major: ['status', 'dependencies', 'devDependencies', 'npm', 'version', 'node'],
  full: options,
  minor: ['status', 'version', 'npm'],
}
var argv = minimist(process.argv.slice(2), {
  boolean: options.concat(Object.keys(portfolio)),
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
  },
})

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

if (!info.name) {
  info.name = info.repo
}

if (!info.repo) {
  info.repo = info.name
}

options.forEach(function (opt) {
  if (argv[opt]) {
    if (creator[opt]) {
      console.log(creator[opt](info))
    } else {
      console.warn('WARN:', opt, 'not supported yet')
    }
  }
})


