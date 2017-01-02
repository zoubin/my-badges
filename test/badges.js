var test = require('tap').test
var create = require('..')

test('badges', function(t) {
  var info = {
    user: 'zoubin',
    repo: 'task-tape',
    name: 'task-tape',
  }

  t.equal(
    create('coverage', info).link,
    '[![coverage](https://img.shields.io/coveralls/zoubin/task-tape.svg)](https://coveralls.io/github/zoubin/task-tape)',
    'coverage'
  )

  t.equal(
    create('status', info).link,
    '[![status](https://travis-ci.org/zoubin/task-tape.svg)](https://travis-ci.org/zoubin/task-tape)',
    'status'
  )

  t.equal(
    create('dependencies', info).link,
    '[![dependencies](https://david-dm.org/zoubin/task-tape.svg)](https://david-dm.org/zoubin/task-tape)',
    'dependencies'
  )

  t.equal(
    create('devDependencies', info).link,
    '[![devDependencies](https://david-dm.org/zoubin/task-tape/dev-status.svg)](https://david-dm.org/zoubin/task-tape?type=dev)',
    'devDependencies'
  )

  t.equal(
    create('npm', info).link,
    '[![npm](https://nodei.co/npm/task-tape.png?downloads=true)](https://www.npmjs.org/package/task-tape)',
    'npm'
  )

  t.equal(
    create('downloads', info).link,
    '![downloads](https://img.shields.io/npm/dm/task-tape.svg)',
    'downloads'
  )

  t.equal(
    create('vers', info).link,
    '[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'version'
  )

  t.equal(
    create('license', info).link,
    '![license](https://img.shields.io/npm/l/task-tape.svg)',
    'license'
  )

  t.equal(
    create('node', info).link,
    '![node](https://img.shields.io/node/v/task-tape.svg)',
    'node'
  )

  t.end()
})
