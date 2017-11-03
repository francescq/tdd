var path = require('path');
var expect = require('chai').expect;

var test = require(path.join(__dirname, '..', './test2.js'));

describe('test2()', function () {
    'use strict';

    it('exists', function () {
        expect(test).to.be.a('function');
    });

    it('5', function () {
        let result = test([1, 3, 6, 4, 1, 2]);

        expect(result).to.equal(5);
    });

    it('4', function () {
        let result = test([1, 2, 3]);

        expect(result).to.equal(4);
    });

    it('1', function () {
        let input = [-1,-3];
        let result = test(input);

        expect(result).to.equal(1);
    });

    it('2', function() {
        let result = test([1,9999999]);

        expect(result).to.equal(2);
    });

    // Add more assertions here
});
