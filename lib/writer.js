'use strict';

var util = require('util');

var $def = {

    // process.stdout:
    log: console.log,
    info: console.info,

    // process.stderr:
    error: console.error,
    warn: console.warn
};

function colorize(value, color, isMsg) {
    value = isMsg && typeof value === 'string' ? value : util.inspect(value);
    return "\x1b[" + color + 'm' + value + "\x1b[0m";
}

function format(stream, values, color) {
    if (stream.isTTY) {
        if (values.length && typeof values[0] === 'string') {
            return [colorize(util.format.apply(null, values), color, true)];
        }
        return Object.keys(values).map(function (key) {
            return colorize(values[key], color);
        });
    }
    return values;
}

/**
 * @class Writer
 * @param noLock
 */
function Writer(noLock) {

    var self = this;

    /**
     * @method Writer.log
     * @description
     * Formats and sends console.log into stdout.
     */
    this.log = function () {
        var args = self.log.bright ? format(process.stdout, arguments, 97) : arguments;
        $def.log.apply(null, args);
    };

    /**
     * @method Writer.error
     * @description
     * Formats and sends console.error into stderr.
     */
    this.error = function () {
        $def.error.apply(null, format(process.stderr, arguments, self.error.bright ? 91 : 31));
    };

    /**
     * @method Writer.warn
     * @description
     * Formats and sends console.log into stderr.
     */
    this.warn = function () {
        $def.warn.apply(null, format(process.stderr, arguments, self.warn.bright ? 93 : 33));
    };

    /**
     * @method Writer.info
     * @description
     * Formats and sends console.log into stdout.
     */
    this.info = function () {
        $def.info.apply(null, format(process.stdout, arguments, self.info.bright ? 96 : 36));
    };

    /**
     * @method Writer.log
     * @description
     * Formats and sends console.log into stdout.
     */
    this.success = function () {
        $def.log.apply(null, format(process.stdout, arguments, self.success.bright ? 92 : 32));
    };

    /**
     * @method Writer.write
     * @description
     * Formats and sends custom-color values either into stdout or stderr.
     *
     * @param {} values - output parameters
     *
     * @param {number} color - output color: 0 <= color <= 256
     *
     * @param {boolean}[isError=false] - sends console.error into stderr;
     * By default, the method sends console.log into stdout.
     *
     */
    this.write = function (values, color, isError) {
        var method, stream;
        if (isError) {
            method = $def.error;
            stream = process.stderr;
        } else {
            method = $def.log;
            stream = process.stdout;
        }
        if (color !== parseInt(color) || color < 0 || color > 256) {
            method.apply(null, values);
        } else {
            method.apply(null, format(stream, values, color));
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
