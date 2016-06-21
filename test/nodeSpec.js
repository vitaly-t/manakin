'use strict';

var lib = require('../manakin');
var capture = require('./capture');

describe("protocol", function () {

    it("must expose complete protocol from the root", function () {
        expect(Object.keys(lib)).toEqual(['local', 'global', 'error', 'warn']);
    });

    it("must expose main methods from local", function () {
        expect(Object.keys(lib.local)).toEqual(['error', 'warn']);
    });

    it("must expose main methods from global", function () {
        expect(Object.keys(lib.global)).toEqual(['error', 'warn']);
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
            ['simple', 'text'],
            ['text\nwith \n\n', 'line\nbreaks'],
            [1, 'text\nwith', 'line\nbreaks'],
            [obj],
            [obj, obj, obj],
            [123, obj, obj],
            ['some text', obj, 123]
        ];

        it("must match the regular console output", function () {
            inputs.forEach(function (values) {
                var original = capture(console.log, values);
                var warning = capture(lib.warn, values);
                var error = capture(lib.error, values);
                expect(warning).toBe(original);
                expect(error).toBe(original);
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
            var warning = capture(lib.warn, ['hello']);
            expect(warning).toBe(original);
        });
    });

});

