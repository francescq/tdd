var path = require('path');
var expect = require('chai').expect;

var test = require(path.join(__dirname, '..', './test.js'));

describe('test()', function () {
  'use strict';

  it('exists', function () {
    expect(test).to.be.a('function');

  });

  it('does something', function () {
    let result = test();

    expect(result).to.equal(1);
  });

  it('does something else', function () {
      let result = test([-1]);

      expect(result).to.equal(1);
  });

  // Add more assertions here
});
