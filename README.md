manakin
=======

[![Build Status](https://travis-ci.org/vitaly-t/manakin.svg?branch=master)](https://travis-ci.org/vitaly-t/manakin)
[![Coverage Status](https://coveralls.io/repos/vitaly-t/manakin/badge.svg?branch=master)](https://coveralls.io/r/vitaly-t/manakin?branch=master)
[![Join the chat at https://gitter.im/vitaly-t/manakin](https://badges.gitter.im/vitaly-t/manakin.svg)](https://gitter.im/vitaly-t/manakin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

Red & Yellow colors for your `console.error` and `console.warn` messages in Node.js.

---

You can start using the existing `console.error` + `console.warn` methods, and then add `manakin` later, which will only
change their output color, but never the format.

<br/>
You can either change colors globally, for the entire process, or use them locally.

<br/>

minimum code &#10004; no dependencies &#10004;

<br/><br/>

What is great about this library - the console output is 100% consistent with `console.log` in Node.js. 

It means that changing colors for `console.error` and `console.warn` does not affect [their rich syntax](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
or the output format.

This is what makes this library stand out from all the libraries that do color console output, because they can only apply
colors to a simple text string, while this library focuses on keeping the output format exactly as Node.js does it for `console.log`. 

## Installing

```
$ npm install manakin --save
```

## Usage

There are three ways in which the library can be used:

* [global] - overrides the global `console.warn` and `console.error`, to be used directly  
* [local] - creates a new object for local usage, without affecting anything globally 
* [shared] - uses the same, module-wide object

#### global

Using colors globally for `console.warn` and `console.error`:

```js
require('manakin').global; // overrides the console methods

console.warn(val1, val2, ...);  // yellow output for the entire process
console.error(val1, val2, ...); // red output for the entire process
```

Using bright colors globally:

```js
var con = require('manakin').global;

con.warn.bright = true; // use bright yellow for all warnings in the process;
con.error.bright = true; // use bright red for all errors in the process;
```

#### local

Using color output with a locally created object:

```js
var con = require('manakin').local; // returns a new object for local usage 

con.warn(val1, val2, ...);  // yellow output for the local warnings
con.error(val1, val2, ...); // red output for the local errors
```

Using bright colors locally:

```js
var con = require('manakin').local;

con.warn.bright = true; // use bright yellow for the local warnings;
con.error.bright = true; // use bright red for the local errors;
```

#### shared

Using color output with the module-wide object:

```js
var con = require('manakin'); // returns the shared/root object 

con.warn(val1, val2, ...);  // yellow output for the shared object
con.error(val1, val2, ...); // red output for the shared object
```

Using bright colors:

```js
var con = require('manakin');

con.warn.bright = true; // use bright yellow for the shared object;
con.error.bright = true; // use bright red for the shared object;
```

## License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.

[global]:#global  
[local]:#local
[shared]:#shared
