'use strict';

var lib = require('../manakin');

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
