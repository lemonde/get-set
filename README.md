# get-set
[![Build Status][status]](https://travis-ci.org/lemonde/get-set)
[![Dependency Status][deps]](https://david-dm.org/lemonde/get-set)
[![devDependency Status][devdeps]](https://david-dm.org/lemonde/get-set#info=devDependencies)
[![Coverage Status][coverage]](https://coveralls.io/r/lemonde/get-set)

[status]: https://travis-ci.org/lemonde/get-set.svg?branch=master
[deps]: https://david-dm.org/lemonde/get-set.svg?theme=shields.io
[devdeps]: https://david-dm.org/lemonde/get-set/dev-status.svg?theme=shields.io
[coverage]: https://img.shields.io/coveralls/lemonde/get-set.svg

Object nested getter and setter.

## Install

```
npm install lemonde/get-set#release
bower install lemonde/get-set#release
```

## Usage

```js
var get = require('get-set').get;
var set = require('get-set').set;

var object = {};
set(object, 'a.b.c', 1);
// => 1
console.log(object);
// => { a: { b: { c: { 1 } } } }
get(object, 'a.b.c');
// => 1
```

## API

### GetSet.get(object, path[, default])

Return object property targeted by path. If not found, default is returned.

```js
get(object, 'a.b.c');
```

### GetSet.set(object, path, value);

Set object property targeted by path with provided value.

```js
set(object, 'a.b.c', true);
```
## Contributing

If you want to contribute, you may run the following commands:

```bash
# Initialize dev environment
grunt dev:init

# Build browser dist
grunt [build]
```

## License

MIT
