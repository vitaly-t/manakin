'use strict';

(function () {

    var error = console.error, warn = console.warn;

    console.error = function () {
        var a = arguments;
        error.apply(this, Object.keys(a).map(function (key) {
            return "\u001b[31m" + a[key] + "\u001b[0m";
        }));
    };

    console.warn = function () {
        var a = arguments;
        warn.apply(this, Object.keys(a).map(function (key) {
            return "\u001b[33m" + a[key] + "\u001b[0m";
        }));
    };

})();
