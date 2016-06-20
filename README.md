# manakin

<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg" alt="Wire-tailed manakin">

Throw in some red and yellow to your console with the minimum of code - 

it patches `console.error` and `console.warn` to use red and yellow colors.

---

You can start using it without using it: the default `console.error` and `console.warn` are already there,
and will be colored after you add `manakin`.

<br/>

minimum code &#10004; no dependencies &#10004; uni-platform &#10004;

<br/><br/>

#### Installing

```
$ npm install manakin --save
```

#### Including

Node.js:
```js
require('manakin');
```

Browsers:
```js
<script src="manakin.js"></script>
```

#### Using

```js
// display a warning:
console.warn(val1, val2, ...);

// display a error:
console.error(val1, val2, ...);
```

And if your browser doesn't support `console.error` or `console.warn`, they will be added.

#### License

Copyright © 2016 [Vitaly Tomilov](https://github.com/vitaly-t);
Released under the MIT license.
