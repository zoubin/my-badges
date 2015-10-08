
var pattern = /\{\{\s*(\w+)\s*}}/g

exports = module.exports = function (tpl, o) {
  function replacement(match, field) {
    if (field) {
      return o[field] || ''
    }
    return match
  }
  while (pattern.test(tpl)) {
    tpl = tpl.replace(pattern, replacement)
  }
  return tpl
}

exports.test = pattern.test.bind(pattern)

