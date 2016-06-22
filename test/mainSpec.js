'use strict';

var lib = require('../lib');
var capture = require('./capture');

describe("protocol", function () {

    it("must expose complete protocol from the root", function () {
        expect(Object.keys(lib)).toEqual(['log', 'error', 'warn', 'write', 'local', 'global']);
    });

    it("must expose main methods from local", function () {
        expect(Object.keys(lib.local)).toEqual(['log', 'error', 'warn', 'write']);
    });

    it("must expose main methods from global", function () {
        expect(Object.keys(lib.global)).toEqual(['log', 'error', 'warn', 'write']);
    });

});

describe("formatting", function () {

    describe("with isTTY", function () {
        var obj = {
            one: 1,
            two: 'hello\nworld!',
            method: function () {
            }
        };

        var inputs = [
            [],
            [null],
            [undefined, NaN, -123.456],
            ['simple', '', 'text', '\t'],
            ['text\nwith \n\n', 'line\nbreaks'],
            [1, 'text\nwith', 'line\nbreaks'],
            [obj],
            [obj, obj, obj],
            [123, obj, obj],
            ['some text', obj, 123],
            ['formatted %s %d %j', 'text', 123, obj],
            [1, 'un-formatted %s %d %j', 'text', 123, obj]
        ];

        it("must match the regular console output", function () {
            inputs.forEach(function (values) {
                var original = capture(console.log, values);
                var log = capture(lib.log, values);
                var warning = capture(lib.warn, values);
                var error = capture(lib.error, values);
                var write = capture(lib.write, values, false, 'invalid');
                expect(log).toBe(original);
                expect(warning).toBe(original);
                expect(error).toBe(original);
                expect(write).toBe(original);
            });
        });
    });

    describe("without isTTY", function () {
        var isTTY;
        beforeEach(function () {
            isTTY = process.stdout.isTTY;
            process.stdout.isTTY = false;
        });
        afterEach(function () {
            process.stdout.isTTY = isTTY;
        });

        it("must match the regular console output", function () {
            var original = capture(console.log, ['hello']);
            var log = capture(lib.log, ['hello']);
            var warning = capture(lib.warn, ['hello']);
            var error = capture(lib.error, ['hello']);
            var write = capture(lib.write, ['hello'], false, 'invalid');
            expect(log).toBe(original);
            expect(warning).toBe(original);
            expect(error).toBe(original);
            expect(write).toBe(original);
        });
    });

});

describe("bright colors", function () {

    var con1 = lib.local, con2 = lib.local, values = ['some\ntext'];
    con1.log.bright = true;
    con1.warn.bright = true;
    con1.error.bright = true;

    it("must change the colors", function () {
        var log1 = capture.call(con1, con1.log, values, true),
            log2 = capture.call(con2, con2.log, values, true),
            warn1 = capture.call(con1, con1.warn, values, true),
            warn2 = capture.call(con2, con2.warn, values, true),
            error1 = capture.call(con1, con1.error, values, true),
            error2 = capture.call(con2, con2.error, values, true);

        expect(log1 === log2).toBe(false);
        expect(warn1 === warn2).toBe(false);
        expect(error1 === error2).toBe(false);
    });
});

describe("global", function () {

    var glb = lib.global, loc = lib.local, values = ['some\ntext'];

    loc.log.bright = true;
    loc.warn.bright = true;
    loc.error.bright = true;

    it("must change the colors", function () {
        var log1 = capture.call(loc, loc.log, values, true),
            log2 = capture(glb.log, values, true),
            warn1 = capture.call(loc, loc.warn, values, true),
            warn2 = capture(glb.warn, values, true),
            error1 = capture.call(loc, loc.error, values, true),
            error2 = capture(glb.error, values, true),
            write1 = capture(glb.write, values, true, 'invalid'),
            write2 = capture(glb.write, values, true, 93);

        expect(log1 === log2).toBe(false);
        expect(warn1 === warn2).toBe(false);
        expect(error1 === error2).toBe(false);
        expect(write1 === write2).toBe(false);
    });

    // and this is just for coverage:
    console.log();
    console.warn();
    console.error();
});
