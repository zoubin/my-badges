var badges = require('./lib/badges')
var sprintf = require('./lib/sprintf')
var mix = require('util-mix')

module.exports = function (type, data, opts) {
  var badge = badges[type]
  if (!badge || !badge.test(data)) {
    return null
  }
  badge = mix({}, badge, opts)
  var ret = {}
  ret.src = sprintf(badge.src, data)
  ret.href = sprintf(badge.href, data)
  ret.img = sprintf(badge.img, { src: ret.src })
  ret.link = sprintf(badge.link, { img: ret.img, href: ret.href })
  return ret
}

