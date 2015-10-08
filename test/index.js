var test = require('tap').test
var creator = require('../lib/creator')

test('badges', function(t) {
  var info = {
    user: 'zoubin',
    repo: 'task-tape',
    name: 'task-tape',
  }

  t.equal(
    creator.status(info),
    '[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)',
    'status'
  )
  t.equal(
    creator.dependencies(info),
    '[![dependencies](https://david-dm.org/zoubin/task-tape.svg)](https://david-dm.org/zoubin/task-tape)',
    'dependencies'
  )
  t.equal(
    creator.devDependencies(info),
    '[![devDependencies](https://david-dm.org/zoubin/task-tape/dev-status.svg)](https://david-dm.org/zoubin/task-tape#info=devDependencies)',
    'devDependencies'
  )
  t.equal(
    creator.npm(info),
    '[![npm](https://nodei.co/npm/task-tape.png)](https://www.npmjs.org/package/task-tape)',
    'npm'
  )
  t.equal(
    creator.downloads(info),
    '[![downloads](https://img.shields.io/npm/dm/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'downloads'
  )
  t.equal(
    creator.version(info),
    '[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'version'
  )
  t.equal(
    creator.license(info),
    '[![license](https://img.shields.io/npm/l/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'license'
  )
  t.equal(
    creator.node(info),
    '[![node](https://img.shields.io/node/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)',
    'node'
  )
  t.end()
})

