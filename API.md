# API

There are three ways in which the library can be used:

* [global] - overrides the global `console.warn` and `console.error`, to be used directly  
* [local] - creates a new object for local usage, without affecting anything globally 
* [shared] - uses the same, module-wide object

### global

Using colors globally for `console.warn` and `console.error`:

```js
require('manakin').global; // overrides the console methods

console.warn(val1, val2, ...);  // yellow output for the entire process
console.error(val1, val2, ...); // red output for the entire process
```

Setting bright colors globally:

```js
var con = require('manakin').global;

con.warn.bright = true; // use bright yellow for all warnings in the process;
con.error.bright = true; // use bright red for all errors in the process;
```

### local

Using color output with a locally created object:

```js
var con = require('manakin').local; // returns a new object for local usage 

con.warn(val1, val2, ...);  // yellow output for the local warnings
con.error(val1, val2, ...); // red output for the local errors
```

Setting bright colors locally:

```js
var con = require('manakin').local;

con.warn.bright = true; // use bright yellow for the local warnings;
con.error.bright = true; // use bright red for the local errors;
```

### shared

Using color output with the module-wide object:

```js
var con = require('manakin'); // returns the shared/root object 

con.warn(val1, val2, ...);  // yellow output for the shared object
con.error(val1, val2, ...); // red output for the shared object
```

Setting bright colors for the module:

```js
var con = require('manakin');

con.warn.bright = true; // use bright yellow for the shared object;
con.error.bright = true; // use bright red for the shared object;
```

[&lt;&lt; Back to the main page](README.md)


[global]:#global  
[local]:#local
[shared]:#shared
