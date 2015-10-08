# my-badges
Generate useful badges

## Usage
[![npm](https://nodei.co/npm/my-badges.png)](https://www.npmjs.org/package/my-badges)

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
mybadges [-dDsoplnvUR][--major][--full][--minor] [package_name]

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

--minor
  'status', 'npm', 'version'

--major
  'status', 'dependencies', 'devDependencies', 'npm', 'version'

--full
  'dependencies', 'devDependencies', 'status', 'downloads', 'version', 'npm', 'license', 'node'

```


