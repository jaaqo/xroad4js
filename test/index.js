var expect = require('chai').expect,
  fromXR = require('../index').fromXR,
  toXR = require('../index').toXR,
  fs = require('fs');

var testResponse = fs.readFileSync('./test/xml/getRandomResponse.xml', 'utf8');

describe('#fromXR', function () {
  it('result of parsing is an object', function (done) {
    fromXR(testResponse, function (err, result) {
      expect(result).to.be.a('object');
      done();
    });
  });

  it('callback gets passed the 2 objects', function (done) {
    fromXR(testResponse, function (err, result) {
      expect(result).to.be.a('object');
      expect(arguments).to.be.arguments;
      expect(arguments).to.have.length(2);
      done();
    });
  });

  it('error object is defined when parsing fails', function (done) {
    fromXR(testResponse.slice(5, testResponse.length), function (err, result) {
      expect(err).to.be.a('error');
      expect(result).to.be.a('undefined');
      done();
    });
  });

  describe('calling with a callback function', function () {
    it('callback gets passed the results with a single top-level property', function (done) {
      fromXR(testResponse, function (err, result) {
        expect(Object.getOwnPropertyNames(result)).to.have.length(1);
        done();
      });
    });

    it('results are using default parameters (no namespace and lowercase)', function (done) {
      fromXR(testResponse, function (err, result) {
        expect(result).to.have.property('envelope');
        expect(result.envelope.body).to.have.property('getRandomResponse');
        done();
      });
    });
  });

  describe('calling with an options object and a callback function', function () {
    it('results are parsed using passed in options object', function (done) {
      fromXR(testResponse, {normalizeTags: true, tagNameProcessors: false}, function (err, result) {
        expect(result).to.have.property('soap-env:envelope');
        done();
      });
    });
  });
});

describe('#toXR', function () {
  it('returns a String"', function () {
    expect(toXR()).to.be.a('string');
  });

  it('returns XML string with content within', function () {
    var xrObj = {
      header: {},
      body: {
        content: 'SOAP'
      }
    };
    expect(toXR(xrObj)).to.match(/<content>SOAP<\/content>/);
  });
});

