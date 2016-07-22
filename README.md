manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

Errors + Warnings colorization, consistent with [the rich syntax](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) and the output format of console methods in Node.js.

---

You can start using the existing `console.error` + `console.warn` methods, and then add `manakin` later, which will only change their output color, but never the format.

<br/>
Colors can be set either locally, or globally - for the `console` object.

<br/><br/>
minimal code &#10004; no dependencies &#10004;

<br/><br/>

This library focuses on providing consistent output format for console methods after changing the colors, in contrast to other colorization
libraries that focus on setting colors to a simple string.

## Installing

```
$ npm install manakin --save
```

## Usage

* Setting colors globally:

```js
require('manakin').global; // set colors globally

console.warn(val1, val2, ...); // yellow text output
console.error(val1, val2, ...); // red text output
```

* Setting colors locally:

```js
var con = require('manakin').local; // use colors locally

con.warn(val1, val2, ...); // yellow text output
con.error(val1, val2, ...); // red text output
```

See also: [Full API].

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[Full API]:API.md
[global]:#global  
[local]:#local
[shared]:#shared
