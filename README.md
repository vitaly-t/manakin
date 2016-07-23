manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

The quickest and safest way to set colorful output for your Node.js console, without messing with the colors at all,
to continue using the rich syntax and the output format of Node.js console methods:

&nbsp;&bull; `console.log(obj1 [, obj2, ..., objN]);`<br/>
&nbsp;&bull; `console.log(msg [, subst1, ..., substN]);`

Colors can be set either locally, or globally - for the `console` object, with methods as follows:

&nbsp;&bull;`.log` - standard message (white)<br/>
&nbsp;&bull;`.warn` - warning (yellow)<br/>
&nbsp;&bull;`.error` - error message (red)<br/>
&nbsp;&bull;`.success` - success message (green)<br/>
&nbsp;&bull;`.info` - information message (cyan)<br/>

And you can use all the existing console methods as usual, and then add `manakin` later, which will only change their output color,
but never the format.

<br/>

_minimum code_ &#10004;&nbsp;&nbsp;_no dependencies_ &#10004;

<br/>

This library focuses on providing consistent output format for console methods after applying the colors, in contrast to generic color
libraries that only apply colors to a simple string or value.

## Installing

```
$ npm install manakin --save
```

## Usage

#### Using colors globally

```js
require('manakin').global; // sets colors globally

console.warn(val1, val2, ...); // yellow text output
console.error(val1, val2, ...); // red text output
console.success(val1, val2, ...); // green text output
console.info(val1, val2, ...); // cyan text output
```

#### Using colors locally

```js
var con = require('manakin').local; // use colors locally

con.warn(val1, val2, ...); // yellow text output
con.error(val1, val2, ...); // red text output
con.success(val1, val2, ...); // green text output
con.info(val1, val2, ...); // cyan text output
```

In addition, you can easily do the following:

- change brightness individually for each available console method
- create [custom-color methods](https://github.com/vitaly-t/manakin/blob/master/API.md#custom-methods), with the same console output formatting   
 
For more details, see [Full API].

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[Full API]:API.md
[global]:#global  
[local]:#local
[shared]:#shared
