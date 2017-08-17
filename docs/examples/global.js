'use strict';

var con = require('manakin').global;

con.warn.bright = true; // use bright yellow color for all warnings in the process

console.log('This message is regular white');

console.warn('This message is light yellow');
