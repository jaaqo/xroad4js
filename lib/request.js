'use strict';

/**
 * Object representing a XRoad request.
 *
 * @module xroad4js/request
 */


var Request = function Request(a, b) {
  var header = { client: {}, service: {}};
  var body = {};

  if ((typeof a !== 'undefined') && (typeof b !== 'undefined')) {
    header = a;
    body = b;
  } else if ((typeof b === 'undefined' || b === null) && typeof a !== 'undefined') {
    header =  a.header; 
    body = a.body;
  }

  this.envelope = {};
  this.envelope.header = header;
  this.envelope.body = body;
};

/** Convenience setters */
Request.prototype.setClient = function (c) {
  this.envelope.header.client = c;
};

Request.prototype.setService = function (s) {
  this.envelope.header.service = s;
};

Request.prototype.setUserId = function (id) {
  this.envelope.header.userId = id;
};

Request.prototype.setId = function (id) {
  this.envelope.header.Id = id;
};

Request.prototype.setProtocolVersion = function (v) {
  this.envelope.header.protocolVersion = v;
};

Request.prototype.setBody = function (b) {
  this.envelope.body = b; 
};
Request.prototype.setHeader = function (h) {
  this.envelope.header = h; 
};

/** Convenience getters */
Request.prototype.getHeader = function () {
  return this.envelope.header; 
};

Request.prototype.getBody = function () {
  return this.envelope.body; 
};

/** Create a request. */
module.exports = Request;
