var expect = require('chai').expect,
  fromXR = require('../index').fromXR,
  toXR = require('../index').toXR,
  XRMsg = require('../lib/xrmsg'),
  fs = require('fs');

describe('#fromXR', function () {
  var testResponse;

  before(function () {
    testResponse = fs.readFileSync('./test/xml/getRandomResponse.xml', 'utf8');
  });

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


describe('#XRMsg', function () {

  var xrmsg;

  beforeEach(function () {
    xrmsg = new XRMsg();
  });

  describe('properties', function () {
    describe('envelope', function () {
      it('exists', function () {
        expect(xrmsg).to.have.property('envelope');
      });
    });
    describe('envelope.header', function () {
      it('exists', function () {
        expect(xrmsg.envelope).to.have.property('header');
      });
    });
    describe('envelope.body', function () {
      it('exists', function () {
        expect(xrmsg.envelope).to.have.property('body');
      });
    });
  });

  describe('methods', function () {

    describe('setClient', function () {
      var client;

      beforeEach(function () {
        client = {
          xRoadInstance: 'FI-TEST',
          memberClass: 'COM',
          memberCode: '123456-7',
          subsystemCode: 'testSystem01'
        };
      });

      it('is a function', function () {
        expect(xrmsg.setClient).to.be.a('function');
      });

      it('returns itself', function () {
        expect(xrmsg.setClient()).to.deep.equal(xrmsg);
      });

      it('works with a single parameter', function () {
        expect(xrmsg.setClient(client).envelope.header.client).to.equal(client);
      });

      it('works with comma separated list of parameters', function () {
        expect(xrmsg.setClient('FI-TEST', 'COM', '123456-7', 'testSystem01').envelope.header.client).to.have.property('xRoadInstance', 'FI-TEST');
        expect(xrmsg.setClient('FI-TEST', 'COM', '123456-7', 'testSystem01').envelope.header.client).to.have.property('memberClass', 'COM');
        expect(xrmsg.setClient('FI-TEST', 'COM', '123456-7', 'testSystem01').envelope.header.client).to.have.property('memberCode', '123456-7');
        expect(xrmsg.setClient('FI-TEST', 'COM', '123456-7', 'testSystem01').envelope.header.client).to.have.property('subsystemCode', 'testSystem01');
      });
    });

    describe('setService', function () {
      it('is a function', function () {
        expect(xrmsg.setService).to.be.a('function');
      });
    });

    describe('setUserId', function () {
      it('is a function', function () {
        expect(xrmsg.setUserId).to.be.a('function');
      });
    });

    describe('setId', function () {
      it('is a function', function () {
        expect(xrmsg.setId).to.be.a('function');
      });
    });

    describe('setProtocolVersion', function () {
      it('is a function', function () {
        expect(xrmsg.setProtocolVersion).to.be.a('function');
      });
    });

    describe('setBody', function () {
      it('is a function', function () {
        expect(xrmsg.setBody).to.be.a('function');
      });
    });

    describe('setHeader', function () {
      it('is a function', function () {
        expect(xrmsg.setHeader).to.be.a('function');
      });
    });

    describe('getBody', function () {
      it('is a function', function () {
        expect(xrmsg.getBody).to.be.a('function');
      });
    });

    describe('getHeader', function () {
      it('is a function', function () {
        expect(xrmsg.getHeader).to.be.a('function');
      });
    });

  });
});

