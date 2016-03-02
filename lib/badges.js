
function hasName(o) {
  return !!o.name
}

function hasUserinfo(o) {
  return !!(o.user && o.repo)
}

exports.coverage = {
  test: hasUserinfo,
  src: 'https://img.shields.io/coveralls/{{user}}/{{repo}}.svg',
  href: 'https://coveralls.io/github/{{user}}/{{repo}}',
  img: '![coverage]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.status = {
  test: hasUserinfo,
  src: 'https://travis-ci.org/{{user}}/{{repo}}.svg',
  href: 'https://travis-ci.org/{{user}}/{{repo}}',
  img: '![status]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.dependencies = {
  test: hasUserinfo,
  src: 'https://david-dm.org/{{user}}/{{repo}}.svg',
  href: 'https://david-dm.org/{{user}}/{{repo}}',
  img: '![dependencies]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.devDependencies = {
  test: hasUserinfo,
  src: 'https://david-dm.org/{{user}}/{{repo}}/dev-status.svg',
  href: 'https://david-dm.org/{{user}}/{{repo}}#info=devDependencies',
  img: '![devDependencies]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.downloads = {
  test: hasName,
  src: 'https://img.shields.io/npm/dm/{{name}}.svg',
  href: 'https://www.npmjs.org/package/{{name}}',
  img: '![downloads]({{src}})',
  link: '{{img}}',
}

exports.vers = {
  test: hasName,
  src: 'https://img.shields.io/npm/v/{{name}}.svg',
  href: 'https://www.npmjs.org/package/{{name}}',
  img: '![version]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.npm = {
  test: hasName,
  src: 'https://nodei.co/npm/{{name}}.png?downloads=true',
  href: 'https://www.npmjs.org/package/{{name}}',
  img: '![npm]({{src}})',
  link: '[{{img}}]({{href}})',
}

exports.licence = exports.license = {
  test: hasName,
  src: 'https://img.shields.io/npm/l/{{name}}.svg',
  href: 'https://www.npmjs.org/package/{{name}}',
  img: '![license]({{src}})',
  link: '{{img}}',
}

exports.node = {
  test: hasName,
  src: 'https://img.shields.io/node/v/{{name}}.svg',
  href: 'https://www.npmjs.org/package/{{name}}',
  img: '![node]({{src}})',
  link: '{{img}}',
}

