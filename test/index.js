var expect = require('chai').expect,
  xroad4js = require('../index'),
  toXR = xroad4js.toXR,
  fromXR = xroad4js.fromXR;

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
