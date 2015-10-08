var test = require('tap').test
var sprintf = require('../lib/sprintf')
var badges = require('../lib/badges')
var mix = require('util-mix')

test('sprintf', function(t) {
  var badge = badges.status
  var info = mix({
    user: 'zoubin',
    repo: 'task-tape',
    name: 'task-tape',
  }, badge)

  t.equal(
    sprintf(badge.link, info),
    '[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)'
  )
  t.end()
})

