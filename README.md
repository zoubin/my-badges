# my-badges
[![version](https://img.shields.io/npm/v/my-badges.svg)](https://www.npmjs.org/package/my-badges)
[![status](https://travis-ci.org/zoubin/my-badges.svg)](https://travis-ci.org/zoubin/my-badges)
[![dependencies](https://david-dm.org/zoubin/my-badges.svg)](https://david-dm.org/zoubin/my-badges)
[![devDependencies](https://david-dm.org/zoubin/my-badges/dev-status.svg)](https://david-dm.org/zoubin/my-badges?type=dev)

Generate useful badges

## Usage

```bash
npm i my-badges -g

mybadges -h

```

```bash
mybadges --major

```

Output:
```
[![version](https://img.shields.io/npm/v/common-bundle.svg)](https://www.npmjs.org/package/common-bundle)
[![status](https://travis-ci.org/reducejs/common-bundle.svg)](https://travis-ci.org/reducejs/common-bundle)
[![coverage](https://img.shields.io/coveralls/reducejs/common-bundle.svg)](https://coveralls.io/github/reducejs/common-bundle)
[![dependencies](https://david-dm.org/reducejs/common-bundle.svg)](https://david-dm.org/reducejs/common-bundle)
[![devDependencies](https://david-dm.org/reducejs/common-bundle/dev-status.svg)](https://david-dm.org/reducejs/common-bundle?type=dev)
![node](https://img.shields.io/node/v/common-bundle.svg)

```

[![version](https://img.shields.io/npm/v/common-bundle.svg)](https://www.npmjs.org/package/common-bundle)
[![status](https://travis-ci.org/reducejs/common-bundle.svg)](https://travis-ci.org/reducejs/common-bundle)
[![coverage](https://img.shields.io/coveralls/reducejs/common-bundle.svg)](https://coveralls.io/github/reducejs/common-bundle)
[![dependencies](https://david-dm.org/reducejs/common-bundle.svg)](https://david-dm.org/reducejs/common-bundle)
[![devDependencies](https://david-dm.org/reducejs/common-bundle/dev-status.svg)](https://david-dm.org/reducejs/common-bundle?type=dev)
![node](https://img.shields.io/node/v/common-bundle.svg)

```bash
mybadges --minor

```

Output:
```
[![version](https://img.shields.io/npm/v/common-bundle.svg)](https://www.npmjs.org/package/common-bundle)
[![status](https://travis-ci.org/reducejs/common-bundle.svg)](https://travis-ci.org/reducejs/common-bundle)

```

[![version](https://img.shields.io/npm/v/common-bundle.svg)](https://www.npmjs.org/package/common-bundle)
[![status](https://travis-ci.org/reducejs/common-bundle.svg)](https://travis-ci.org/reducejs/common-bundle)

## Before you run mybadges

There are a few badges you have to configure to make them work.

### Travis

Sign in [travis](https://travis-ci.org/profile),
activate your repo,
and push a `.travis.yml`.

* http://docs.travis-ci.com/user/getting-started/
* http://docs.travis-ci.com/user/languages/javascript-with-nodejs/

### Coverage

Sign in [coveralls](https://coveralls.io/),
activate your repo,
and push a `.coveralls.yml`

* https://coveralls.zendesk.com/hc/en-us
