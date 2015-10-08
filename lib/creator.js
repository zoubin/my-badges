
exports.status = function (opts) {
  var user = opts.user
  var repo = opts.repo
  if (!user || !repo) {
    throw new Error('github user and repo name must be provided for build status')
  }
  return '[![status](https://travis-ci.org/' + user + '/' + repo + '.svg?branch=master)](https://travis-ci.org/' + user + '/' + repo + ')'
}
exports.dependencies = function (opts) {
  var user = opts.user
  var repo = opts.repo
  if (!user || !repo) {
    throw new Error('github user and repo name must be provided for dependencies')
  }
  return '[![dependencies](https://david-dm.org/' + user + '/' + repo + '.svg)](https://david-dm.org/' + user + '/' + repo + ')'
}
exports.devDependencies = function (opts) {
  var user = opts.user
  var repo = opts.repo
  if (!user || !repo) {
    throw new Error('github user and repo name must be provided for devDependencies')
  }
  return '[![devDependencies](https://david-dm.org/' + user + '/' + repo + '/dev-status.svg)](https://david-dm.org/' + user + '/' + repo + '#info=devDependencies)'
}
exports.downloads = function (opts) {
  var name = opts.name
  if (!name) {
    throw new Error('package name must be provided for downloads')
  }
  return '[![downloads](https://img.shields.io/npm/dm/' + name + '.svg)](https://www.npmjs.org/package/' + name + ')'
}
exports.version = function (opts) {
  var name = opts.name
  if (!name) {
    throw new Error('package name must be provided for version')
  }
  return '[![version](https://img.shields.io/npm/v/' + name + '.svg)](https://www.npmjs.org/package/' + name + ')'
}
exports.npm = function (opts) {
  var name = opts.name
  if (!name) {
    throw new Error('package name must be provided for npm link')
  }
  return '[![npm](https://nodei.co/npm/' + name + '.png)](https://www.npmjs.org/package/' + name + ')'
}
exports.license = function (opts) {
  var name = opts.name
  if (!name) {
    throw new Error('package name must be provided for license')
  }
  return '[![license](https://img.shields.io/npm/l/' + name + '.svg)](https://www.npmjs.org/package/' + name + ')'
}
exports.node = function (opts) {
  var name = opts.name
  if (!name) {
    throw new Error('package name must be provided for node support')
  }
  return '[![node](https://img.shields.io/node/v/' + name + '.svg)](https://www.npmjs.org/package/' + name + ')'
}

exports.coverage = creator.bind(null, 'coveralls'/* , user, repo, branch */)
exports.optionalDependencies = creator.bind(null, 'david', 'optional'/* , user, repo */)
exports.peerDependencies = creator.bind(null, 'david', 'peer'/* , user, repo */)

function creator() {
  var args = [].slice.call(arguments)
  return 'https://img.shields.io/' + args.filter(Boolean).join('/') + '.svg'
}

//exports.travis = creator.bind(null, 'travis'/* , user, repo, branch */)
//exports.dependencies = creator.bind(null, 'david'/* , user, repo */)
//exports.devDependencies = creator.bind(null, 'david', 'dev'/* , user, repo */)



