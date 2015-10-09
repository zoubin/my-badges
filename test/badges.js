var test = require('tap').test
var create = require('..')

test('badges', function(t) {
  var info = {
    user: 'zoubin',
    repo: 'task-tape',
    name: 'task-tape',
  }

  t.equal(
    create('status', info).link,
    '[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)',
    'status'
  )

  t.equal(
    create('dependencies', info).link,
    '[![dependencies](https://david-dm.org/zoubin/task-tape.svg)](https://david-dm.org/zoubin/task-tape)',
    'dependencies'
  )

  t.equal(
    create('devDependencies', info).link,
    '[![devDependencies](https://david-dm.org/zoubin/task-tape/dev-status.svg)](https://david-dm.org/zoubin/task-tape#info=devDependencies)',
    'devDependencies'
  )

  t.equal(
    create('npm', info).link,
    '[![npm](https://nodei.co/npm/task-tape.png?downloads=true)](https://www.npmjs.org/package/task-tape)',
    'npm'
  )

  t.equal(
    create('downloads', info).link,
    '[![downloads](https://img.shields.io/npm/dm/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'downloads'
  )

  t.equal(
    create('version', info).link,
    '[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'version'
  )

  t.equal(
    create('license', info).link,
    '[![license](https://img.shields.io/npm/l/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'license'
  )

  t.equal(
    create('node', info).link,
    '[![node](https://img.shields.io/node/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'node'
  )

  t.end()
})

