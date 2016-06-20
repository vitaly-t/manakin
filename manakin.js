'use strict';

(function () {

    if (typeof module !== "undefined" && module.exports) {

        var exp = module.exports, util = require('util');

        var inspect = function (value, isMsg) {
            return (isMsg && typeof value === 'string') ? value : util.inspect(value);
        };

        var colorize = function (value, color, isMsg) {
            return "\u001b[" + color + inspect(value, isMsg) + "\u001b[0m";
        };
        
        var format = function (values, color) {
            if (process.stdout.isTTY) {
                if (values.length && typeof values[0] === 'string') {
                    return [colorize(util.format.apply(this, values), color, true)];
                }
                return Object.keys(values).map(function (key) {
                    return colorize(values[key], color);
                });
            }
            return values;
        };

        var write = {
            error: function () {
                console.log.apply(this, format(arguments, '31m'));
            },
            warn: function () {
                console.log.apply(this, format(arguments, '33m'));
            }
        };

        Object.defineProperty(exp, 'local', {
            get: function () {
                return write;
            },
            enumerable: true
        });

        Object.defineProperty(exp, 'global', {
            get: function () {
                console.error = write.error;
                console.warn = write.warn;
                return write;
            },
            enumerable: true
        });

        exp.error = write.error;
        exp.warn = write.warn;

        Object.freeze(write);
        Object.freeze(exp);

    } else {

        var inspect = function (value) {
            return JSON.stringify(value).replace(/^"|"$/g, '');
        };

        var format = function (values, color) {
            return ['%c' + Object.keys(values).map(function (key) {
                return inspect(values[key]);
            }).join(' '), "color:" + color];
        };

        if (typeof console.error === "undefined") {
            console.error = function () {
                console.log.apply(this, format(arguments, 'red'));
            };
        }

        if (typeof console.warn === "undefined") {
            console.warn = function () {
                console.log.apply(this, format(arguments, 'darkorange'));
            };
        }
    }
})();
