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

It means that changing colors for `console.error` and `console.warn` does not affect [their rich syntax](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

This is what makes this library stand out from all the libraries that do color console output, because they can only apply
colors to a simple text string, while this library keeps the output format exactly as Node.js does it for `console.log`. 

#### Installing

```
$ npm install manakin --save
```

#### Usage

_Node.js_

* For global usage:

```js
require('manakin').global; // also returns {error, warn};

console.warn(val1, val2, ...);

console.error(val1, val2, ...);
```

* For local usage:

```js
var con = require('manakin'); // = require('manakin').local; 

con.warn(val1, val2, ...);

con.error(val1, val2, ...);
```

_Browsers:_
```js
<script src="manakin.js"></script>
```

In browsers, we set `console.error` and `console.warn` only when they are not defined.

#### License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.
