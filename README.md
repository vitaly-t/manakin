# manakin

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

Red & Yellow colors for your `console.error` and `console.warn` messages.

---

You can start using the existing `console.error` + `console.warn` methods, and then add `manakin` later at any time.
<br/><br/>
You can either set colors globally, for the entire process, or use them locally.

<br/>

minimum code &#10004; no dependencies &#10004; all platforms &#10004;

<br/>

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
