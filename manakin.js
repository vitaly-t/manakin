'use strict';

(function () {

    if (typeof module !== "undefined" && module.exports) {

        var inspect = require('util').inspect;

        var format = function (values, color) {
            if (process.stdout.isTTY) {
                return Object.keys(values).map(function (key) {
                    return "\u001b[" + color + inspect(values[key]) + "\u001b[0m";
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
