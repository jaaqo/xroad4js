var expect = require('chai').expect,
  fromXR = require('../index').fromXR,
  toXR = require('../index').toXR;

describe('#fromXR', function () {
  it('is a function', function () {
    expect(fromXR).to.be.a('function');
  });
});

describe('#toXR', function () {
  it('is a function', function () {
    expect(toXR).to.be.a('function');
  });
});
