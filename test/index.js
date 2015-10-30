/*eslint-env node*/
/*global describe,it*/

var expect = require('chai').expect,
  fromXR = require('../index').fromXR,
  toXR = require('../index').toXR;

describe('#fromXR', function () {
  it('returns an Object', function () {
    expect(fromXR('<content>SOAP</content>')).to.be.a('object');
  });

  it('returns an object with content property as "SOAP"', function () {
    expect(fromXR('<content>SOAP</content>')).to.have.property('content', 'SOAP');
  });

  it('returns an object with content property as "Another SOAP 123"', function () {
    expect(fromXR('<content>Another SOAP 123</content>')).to.have.property('content', 'Another SOAP 123');
  });
});

describe('#toXR', function () {
  it('returns a String"', function () {
    expect(toXR({content: 'SOAP'})).to.be.a('string');
  });

  it('returns XML string "<content>SOAP</content>"', function () {
    expect(toXR({content: 'SOAP'})).to.equal('<content>SOAP</content>');
  });
});

