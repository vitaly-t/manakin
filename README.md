# manakin


<img align="left" width="218" height="298" src="https://s31.postimg.org/y3s1ucqor/manakin.jpg">

Throw in some red and yellow to your console with the minimum of code - 

it patches `console.error` and `console.warn` to use red and yellow colors.

--

You can start using it without using it: the default `console.error` and `console.warn` are always there,
and will be colored after you add `manakin`:

```js
console = require('manakin');
```

It uses the bare minimum of code, targeting Node.js only.

