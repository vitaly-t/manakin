manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://github.com/vitaly-t/manakin/tree/master/docs/manakin.jpg" alt="Wire-tailed manakin">

The quickest and safest way to set colorful output for your Node.js console, without messing with the colors at all,
and to continue using the rich syntax and the output format supported by Node.js console methods:

&nbsp;&bull; with list of parameters: `console.log(obj1 [, obj2, ..., objN]);`<br/>
&nbsp;&bull; with message formatting: `console.log(msg [, subst1, ..., substN]);`

Output will be colored according to which method you use: `.log` - white, `.warn` - yellow, `.error` - red,
`.success` - green, `.info` - cyan.

<br/>

_minimum code_ &#10004;&nbsp;&nbsp;_no dependencies_ &#10004;

<br/>

This library focuses on providing consistent output format for console methods after applying the colors, in contrast to generic color
libraries that only apply colors to simple text strings.

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

In addition, you can easily do the following:

- change brightness individually for each available method
- create [custom-color methods](https://github.com/vitaly-t/manakin/blob/master/docs/API.md#custom-methods), with the same output formatting   
 
For more details, see [Full API].

![alt tag](https://github.com/vitaly-t/manakin/tree/master/docs/console.jpg)

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[Full API]:https://github.com/vitaly-t/manakin/tree/master/docs/API.md
