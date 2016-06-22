# API

There are three ways in which the library can be used:

* [global] - overrides methods `log`, `warn` and `error` of the `console` object  
* [local] - creates a new object for local usage, without any global changes 
* [shared] - uses the same, module-wide object

See also: [Custom Methods].

Note that unlike methods `warn` and `error`, if you do not set bright color for method `log`,
it will redirect to the default implementation.

### global

Overriding methods `log`, `warn` and `error` of the `console` object:

```js
require('manakin').global;

console.log(val1, val2, ...);   // redirects to the default implementation 
console.warn(val1, val2, ...);  // uses yellow color
console.error(val1, val2, ...); // uses red color
```

Setting bright colors:

```js
var con = require('manakin').global; // returns global {log, warn, error, write}

con.log.bright = true; // use bright white for `console.log`
con.warn.bright = true; // use bright yellow for `console.warn`
con.error.bright = true; // use bright red for `console.error`
```

### local

Using color output via a locally created object:

```js
var con = require('manakin').local; // returns a new local object {log, warn, error, write} 

con.log(val1, val2, ...);  // redirects to the default implementation
con.warn(val1, val2, ...);  // uses yellow color
con.error(val1, val2, ...); // uses red color
```

Setting bright colors:

```js
var con = require('manakin').local;

con.log.bright = true; // use bright white for `con.log`
con.warn.bright = true; // use bright yellow for `con.warn`
con.error.bright = true; // use bright red for `con.error`
```

### shared

Using color output with the module-wide object:

```js
var con = require('manakin'); // returns the shared/root object {log, warn, error, write} 

con.log(val1, val2, ...);  // redirects to the default implementation
con.warn(val1, val2, ...);  // uses yellow color
con.error(val1, val2, ...); // uses red color
```

Setting bright colors for the module:

```js
var con = require('manakin');

con.log.bright = true; // use bright white for `con.log`
con.warn.bright = true; // use bright yellow for `con.warn`
con.error.bright = true; // use bright red for `con.error`
```

## Custom Methods

You can implement your own methods with the input-output format consistent with that of the console methods,
by using method `write`, which you get with any `require('manakin')` (with `global`, `local` or without).

The method takes two parameters:

* list of function arguments
* color code, an integer between 0 and 256 

If no valid color is specified, the method redirects to the default `console.log`.

```js
var con = require('manakin').local;

function print() {
    con.write(arguments, 45); // writes using Magenta color
}

print('Nice %s color here!', 'Magenta');
```

[&lt;&lt; Main Page](https://github.com/vitaly-t/manakin)

[Custom Methods]:#custom-methods
[global]:#global  
[local]:#local
[shared]:#shared
