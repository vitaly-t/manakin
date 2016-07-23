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
            return [colorize(util.format.apply(null, values), color, true)];
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

    this.info = function () {
        $log.apply(null, format(arguments, self.info.bright ? 96 : 36));
    };

    this.success = function () {
        $log.apply(null, format(arguments, self.success.bright ? 92 : 32));
    };

    this.write = function (values, color) {
        if (color !== parseInt(color) || color < 0 || color > 256) {
            $log.apply(null, values);
        } else {
            $log.apply(null, format(values, color));
        }
    };

    addBrightProp('log');
    addBrightProp('error');
    addBrightProp('warn');
    addBrightProp('info');
    addBrightProp('success');

    this.setBright = function (bright) {
        // set to bright colors, if the flag is truthy or undefined;
        // set to dim colors, if flag is falsy
        bright = bright === undefined ? true : !!bright;

        self.log.bright = bright;
        self.error.bright = bright;
        self.warn.bright = bright;
        self.success.bright = bright;
        self.info.bright = bright;
    };

    if (!noLock) {
        Object.freeze(this);
    }

    function addBrightProp(name) {
        Object.defineProperty(self[name], 'bright', {
            value: false,
            writable: true
        });
        Object.seal(self[name]);
    }

}

module.exports = Writer;
