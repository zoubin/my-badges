# my-badges [![status](https://travis-ci.org/zoubin/my-badges.svg?branch=master)](https://travis-ci.org/zoubin/my-badges) [![version](https://img.shields.io/npm/v/my-badges.svg)](https://www.npmjs.org/package/my-badges)
Generate useful badges

## Usage

```javascript
npm i my-badges -g
```

### Full badges

```bash
⌘ mybadges --full -U zoubin task-tape
```
[![dependencies](https://david-dm.org/zoubin/task-tape.svg)](https://david-dm.org/zoubin/task-tape)
[![devDependencies](https://david-dm.org/zoubin/task-tape/dev-status.svg)](https://david-dm.org/zoubin/task-tape#info=devDependencies)
[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)
[![downloads](https://img.shields.io/npm/dm/task-tape.svg)](https://www.npmjs.org/package/task-tape)
[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)
[![npm](https://nodei.co/npm/task-tape.png)](https://www.npmjs.org/package/task-tape)
[![license](https://img.shields.io/npm/l/task-tape.svg)](https://www.npmjs.org/package/task-tape)
[![node](https://img.shields.io/node/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)

### Major badges

```bash
⌘ mybadges --major -U zoubin task-tape
```
[![dependencies](https://david-dm.org/zoubin/task-tape.svg)](https://david-dm.org/zoubin/task-tape)
[![devDependencies](https://david-dm.org/zoubin/task-tape/dev-status.svg)](https://david-dm.org/zoubin/task-tape#info=devDependencies)
[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)
[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)
[![npm](https://nodei.co/npm/task-tape.png)](https://www.npmjs.org/package/task-tape)

### Minor badges

```bash
⌘ mybadges --minor -U zoubin task-tape
```

[![status](https://travis-ci.org/zoubin/task-tape.svg?branch=master)](https://travis-ci.org/zoubin/task-tape)
[![version](https://img.shields.io/npm/v/task-tape.svg)](https://www.npmjs.org/package/task-tape)
[![npm](https://nodei.co/npm/task-tape.png)](https://www.npmjs.org/package/task-tape)

## Command line options

```

mybadges [-dDsoplnvUR] [--major] [--full] [--minor] [package_name]

  Create badges: 'dependencies', 'devDependencies', 'status', 'downloads', 'version', 'npm', 'license', 'node'

  -d, --dependencies

  -D, --devDependencies

  -s, --status
    build status

  -o, --downloads
    downloads from npm per month

  -p, --npm
    link to npm

  -l, --license

  -n, --node
    node version compatibility

  -v, --version
    npm package version

  -U, --user
    followed by github user name

  -R, --repo
    followed by github repo name. If not specified, it is the same with the package_name
  
  -h, --help
    see the help text

  --minor
    'status', 'npm', 'version'
  
  --major
    'status', 'dependencies', 'devDependencies', 'npm', 'version'
  
  --full
    'dependencies', 'devDependencies', 'status', 'downloads', 'version', 'npm', 'license', 'node'

```

## API

```javascript
var create = require('my-badges')

```

### rv = create(type, data, extra)

#### type

Type: `String`

`mybadges -h` to see possible values.

#### data

Type: `Object`

Data for creating badges.

* `user`: github user name
* `repo`: github repo name
* `name`: package name

#### extra

Type: `Object`

Custom templates.

Take the build status badge for example:

```javascript
exports.status = {
  test: hasUserinfo,
  src: 'https://travis-ci.org/{{user}}/{{repo}}.svg?branch=master',
  href: 'https://travis-ci.org/{{user}}/{{repo}}',
  img: '![status]({{src}})',
  link: '[{{img}}]({{href}})',
}
```

You can override `img` or `link` by specifying them in `extra`.

#### rv

Type: `Object`

* `src`: Image src
* `href`: Link href
* `img`: Image markdown
* `link`: Link markdown

