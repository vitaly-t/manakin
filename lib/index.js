'use strict';

var Writer = require('./writer');

var glb = new Writer();

var exp = module.exports = new Writer(true);

Object.defineProperty(exp, 'local', {
    get: function () {
        return new Writer();
    },
    enumerable: true
});

Object.defineProperty(exp, 'global', {
    get: function () {
        console.log = function () {
            glb.log.apply(glb, arguments);
        };
        console.error = function () {
            glb.error.apply(glb, arguments);
        };
        console.warn = function () {
            glb.warn.apply(glb, arguments);
        };
        return glb;
    },
    enumerable: true
});

Object.freeze(exp);
