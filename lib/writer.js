'use strict';

var util = require('util');

function colorize(value, color, isMsg) {
    value = isMsg && typeof value === 'string' ? value : util.inspect(value);
    return "\x1b[" + color + 'm' + value + "\x1b[0m";
}

function format(values, color) {
    if (process.stdout.isTTY) {
        if (values.length && typeof values[0] === 'string') {
            return [colorize(util.format.apply(this, values), color, true)];
        }
        return Object.keys(values).map(function (key) {
            return colorize(values[key], color);
        });
    }
    return values;
}

function Writer(noLock) {
    this.error = function () {
        var bright = this instanceof Writer && this.error.bright;
        console.log.apply(this, format(arguments, bright ? 91 : 31));
    };
    this.warn = function () {
        var bright = this instanceof Writer && this.warn.bright;
        console.log.apply(this, format(arguments, bright ? 93 : 33));
    };
    this.error.bright = false;
    this.warn.bright = false;
    Object.seal(this.error);
    Object.seal(this.warn);
    if (!noLock) {
        Object.freeze(this);
    }
}

module.exports = Writer;
