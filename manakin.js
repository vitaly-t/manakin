'use strict';

(function () {

    if (typeof module !== "undefined" && module.exports) {

        var util = require('util');

        var inspect = function (value) {
            return typeof value === 'string' ? value : util.inspect(value);
        };

        var colorize = function (value, color) {
            return "\u001b[" + color + inspect(value) + "\u001b[0m";
        };

        var format = function (values, color) {
            if (process.stdout.isTTY) {
                if (values.length && typeof values[0] === 'string') {
                    return [colorize(util.format.apply(this, values), color)];
                }
                return Object.keys(values).map(function (key) {
                    return colorize(values[key], color);
                });
            }
            return values;
        };

        console.error = function () {
            console.log.apply(this, format(arguments, '31m'));
        };

        console.warn = function () {
            console.log.apply(this, format(arguments, '33m'));
        };

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
