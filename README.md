manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Downloads Count](http://img.shields.io/npm/dm/manakin.svg)](https://www.npmjs.com/package/manakin)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://raw.githubusercontent.com/vitaly-t/manakin/master/docs/manakin.jpg" alt="Wire-tailed manakin">

The quickest and safest way to set colorful output for your Node.js console, without messing with the colors at all,
and to continue using the rich syntax and the output format supported by Node.js console methods:

&nbsp;&bull; with a list of parameters: `console.log(obj1 [, obj2, ..., objN]);`<br/>
&nbsp;&bull; with message formatting: `console.log(msg [, subst1, ..., substN]);`

Can be used either locally or globally (by overriding the `console` object), with automatic colors applied according to which
method is used - see [the output example](#output-example).   

<br/>

_minimum code_ &#10004;&nbsp;&nbsp;_no dependencies_ &#10004;

<br/>

This library focuses on providing consistent output format for console methods after applying the colors, in contrast to generic color
libraries that only apply colors to text.

## Installing

```
$ npm install manakin --save
```

## Usage

#### Using colors globally

```js
require('manakin').global; // sets colors globally, for the `console` object

console.log(val1, val2, ...); // white/default text output
console.warn(val1, val2, ...); // yellow text output
console.error(val1, val2, ...); // red text output
console.success(val1, val2, ...); // green text output
console.info(val1, val2, ...); // cyan text output
```

#### Using colors locally

```js
var con = require('manakin').local; // use colors locally

con.log(val1, val2, ...); // white/default text output
con.warn(val1, val2, ...); // yellow text output
con.error(val1, val2, ...); // red text output
con.success(val1, val2, ...); // green text output
con.info(val1, val2, ...); // cyan text output
```

#### Customization Features

You can easily do the following:

- change brightness individually for each available method
- [override predefined colors](https://github.com/vitaly-t/manakin/blob/master/docs/API.md#overriding-colors) for existing methods
- create [custom-color methods](https://github.com/vitaly-t/manakin/blob/master/docs/API.md#custom-methods), with the same output formatting   

For more details, see [the full API].

#### Output example

<img width="619" height="362" src="https://raw.githubusercontent.com/vitaly-t/manakin/master/docs/console.jpg" alt="Console output colors">

## License

Copyright © 2017 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[the full API]:https://github.com/vitaly-t/manakin/tree/master/docs/API.md
