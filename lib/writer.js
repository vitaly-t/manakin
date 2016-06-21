'use strict';

var util = require('util');

var $log = console.log;

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

    var self = this;

    this.log = function () {
        var args = self.log.bright ? format(arguments, 97) : arguments;
        $log.apply(null, args);
    };

    this.error = function () {
        $log.apply(null, format(arguments, self.error.bright ? 91 : 31));
    };

    this.warn = function () {
        $log.apply(null, format(arguments, self.warn.bright ? 93 : 33));
    };

    setBright('log');
    setBright('error');
    setBright('warn');

    if (!noLock) {
        Object.freeze(this);
    }

    function setBright(name) {
        Object.defineProperty(self[name], 'bright', {
            value: false,
            writable: true
        });
        Object.seal(self[name]);
    }

}

module.exports = Writer;
