/**
 * Object representing a XRoad message from which request and response objects
 * inherit from.
 *
 * @module xroad4js/xrmsg
 */

'use strict';

/**
 * Creates a new XRMsg
 */
function XRMsg (msg) {
  var xrMsg;

  if (typeof msg !== 'undefined' && msg !== null) {
    xrMsg = msg;
  } else {
    xrMsg = {
      envelope: {
        header: {
          client: {},
          service: {}
        },
        body: {}
      }
    };
  }

  xrMsg.setHeader = function (header) {
    xrMsg.envelope.header = header;
    return xrMsg;
  };
  xrMsg.getHeader = function () {
    return xrMsg.envelope.header;
  };
  xrMsg.setClient = function (client) {
    xrMsg.envelope.header.client = client;
    return xrMsg;
  };
  xrMsg.getClient = function () {
    return xrMsg.envelope.header.client;
  };
  xrMsg.setService = function (service) {
    xrMsg.envelope.header.service = service;
    return xrMsg;
  };
  xrMsg.getService = function () {
    return xrMsg.envelope.header.service;
  };
  xrMsg.setBody = function (body) {
    xrMsg.envelope.body = body;
    return xrMsg;
  };
  xrMsg.getBody = function () {
    return xrMsg.envelope.body;
  };

  xrMsg.addNamespaces = function () {
    var namespacedMsg = {
      'SOAP-ENV:Envelope': {
        '$': {
          'xlmns:SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
          'xlmns:id': 'http://x-road.eu/xsd/identifiers',
          'xlmns:xrd': 'http://x-road.eu/xsd/xroad.xsd'
        },
        'SOAP-ENV:Header': {
          'xrd:client': xrMsg.envelope.client,
          'xrd:service': xrMsg.envelope.service
        },
        'SOAP-ENV:Body': xrMsg.envelope.body
      }
    };

    return namespacedMsg;
  };

  xrMsg.prepare = function () {
    return xrMsg.addNamespaces();
  };

  xrMsg.validate = function () {
    var errors = [];

    if (!xrMsg.hasOwnProperty('envelope')) {
      errors.push('Invalid message structure.');
    }

    return errors;
  };

  var errors = xrMsg.validate();

  if (errors.length != 0) {
    throw new Error(errors.join('\n'));
  }

  return xrMsg;
}

module.exports = XRMsg;
