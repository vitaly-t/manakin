'use strict';

function hookConsole(callback) {

    var stdout = process.stdout,
        stderr = process.stderr,
        oldOutWrite = stdout.write,
        oldErrWrite = stderr.write;

    stdout.write = (function () {
        return function (string) {
            callback(string);
        };
    })(stdout.write);

    stderr.write = (function () {
        return function (string) {
            callback(string);
        };
    })(stderr.write);

    return function () {
        stdout.write = oldOutWrite;
        stderr.write = oldErrWrite;
    };
}

function capture(method, values, keepColors, param) {
    var text, hook = hookConsole(function (s) {
        text = s;
    });
    if (param) {
        method.apply(null, [values, param]);
    } else {
        method.apply(null, values);
    }
    hook();
    return keepColors ? text : removeColors(text);
}

// removes color elements from text;
function removeColors(text) {
    return text.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, '');
}

module.exports = capture;
