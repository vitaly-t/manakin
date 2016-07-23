manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

Errors + Warnings colorization, consistent with the rich syntax and the output format of console methods in Node.js:

&nbsp;&bull; `console.log(obj1 [, obj2, ..., objN]);`<br/>
&nbsp;&bull; `console.log(msg [, subst1, ..., substN]);`

Colors can be set either locally, or globally - for the `console` object.

---

You can use the existing `console.error` + `console.warn` methods as always, and then add `manakin` later, which will only change their output color, but never the format.

minimal code &#10004; no dependencies &#10004;

<br/>

This library focuses on providing consistent output format for console methods after changing the colors, in contrast to generic colorization
libraries that focus on setting colors to a simple string.

## Installing

```
$ npm install manakin --save
```

## Usage

#### Using colors globally:

```js
require('manakin').global; // set colors globally

console.log(val1, val2, ...); // default text output
console.warn(val1, val2, ...); // yellow text output
console.error(val1, val2, ...); // red text output
```

#### Using colors locally:

```js
var con = require('manakin').local; // use colors locally

con.log(val1, val2, ...); // default text output
con.warn(val1, val2, ...); // yellow text output
con.error(val1, val2, ...); // red text output
```

In addition, you can do the following, and in a very easy way:

- change brightness individually for each available console method
- create [custom-color methods](https://github.com/vitaly-t/manakin/blob/master/API.md#custom-methods), with the same console output formatting   
 
For details, see [Full API].

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[Full API]:API.md
[global]:#global  
[local]:#local
[shared]:#shared
