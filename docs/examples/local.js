'use strict';

var con = require('manakin').local;

con.warn.bright = true; // use bright color for all warnings that use 'con' object

con.log('This message is regular white');

con.warn('This message is light yellow');
