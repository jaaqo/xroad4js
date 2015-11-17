var expect = require('chai').expect,
  xroad4js = require('../index'),
  XRMsg = xroad4js.XRMsg,
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

describe('#XRMsg', function () {
  it('is a factory function', function () {
    expect(XRMsg).to.be.a('function');
    expect(XRMsg()).to.be.a('object');
  });

  it('throws error on invalid msg structure', function () {
    expect(function () {
      XRMsg({foo: 'bar'});
    }).to.throw(Error);
  });
});
