# API

There are three ways in which the library can be used:

* [global] - overrides methods `log`, `warn` and `error` of the `console` object  
* [local] - creates a new object for local usage, without any global changes 
* [shared] - reuses the same, module-wide object

See also: [Custom Methods].

### global

Overriding methods `log`, `warn`, `error` and `info` of the `console` object, plus adding
custom method `success`:

```js
require('manakin').global;

console.log(val1, val2, ...);   // redirects to the default implementation 
console.warn(val1, val2, ...);  // uses yellow color
console.error(val1, val2, ...); // uses red color
console.success(val1, val2, ...); // uses green color
console.info(val1, val2, ...); // uses cyan color
```

Setting bright colors:

```js
var con = require('manakin').global; // returns global object {log, warn, error, success, info, write}

con.log.bright = true; // use bright white for `console.log`
con.warn.bright = true; // use bright yellow for `console.warn`
con.error.bright = true; // use bright red for `console.error`
con.success.bright = true; // use bright green for `console.success`
con.info.bright = true; // use bright cyan for `console.info`
```

### local

Using color output via a locally created object:

```js
var con = require('manakin').local; // returns a new local object {log, warn, error, success, info, write} 

con.log(val1, val2, ...);  // redirects to the default implementation
con.warn(val1, val2, ...);  // uses yellow color
con.error(val1, val2, ...); // uses red color
con.success(val1, val2, ...); // uses green color
con.info(val1, val2, ...); // uses cyan color
```

Setting bright colors:

```js
var con = require('manakin').local;

con.log.bright = true; // use bright white for `con.log`
con.warn.bright = true; // use bright yellow for `con.warn`
con.error.bright = true; // use bright red for `con.error`
con.success.bright = true; // use bright green for `con.success`
con.info.bright = true; // use bright cyan for `con.info`
```

### shared

Using color output with the module-wide object:

```js
var con = require('manakin'); // returns the shared/root object {log, warn, error, etc...} 

con.log(val1, val2, ...);  // redirects to the default implementation
con.warn(val1, val2, ...);  // uses yellow color
con.error(val1, val2, ...); // uses red color
con.success(val1, val2, ...); // uses green color
con.info(val1, val2, ...); // uses cyan color
```

Setting bright colors for the module:

```js
var con = require('manakin');

con.log.bright = true; // use bright white for `con.log`
con.warn.bright = true; // use bright yellow for `con.warn`
con.error.bright = true; // use bright red for `con.error`
con.success.bright = true; // use bright green for `con.success`
con.info.bright = true; // use bright cyan for `con.info`
```

Unlike [local](#local), setting brightness for a shared object once is sufficient.

## Custom Methods

You can implement your own methods with the input-output format consistent with that of the console methods,
by using method `write`, which you get with any `require('manakin')` (with `global`, `local` or without).

The method takes two parameters:

* list of function arguments
* standard color code - an integer between 0 and 256 

If no valid color is specified, the method redirects to the default `console.log`

```js
var con = require('manakin');

function print() {
    con.write(arguments, 35); // writes using Magenta color
}

print('Color is: %s', 'Magenta');
```

The color code can also represent brightness and the background color. For example, `92` - bright green,
`41` - white on red background, etc. See [color codes]. 

[&lt;&lt; Main Page](https://github.com/vitaly-t/manakin)

[color codes]:http://misc.flogisoft.com/bash/tip_colors_and_formatting#colors
[Custom Methods]:#custom-methods
[global]:#global  
[local]:#local
[shared]:#shared
