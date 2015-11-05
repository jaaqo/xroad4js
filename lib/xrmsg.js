/**
 * Object representing a XRoad message from which request and response objects
 * inherit from.
 *
 * @module xroad4js/xrmsg
 */

'use strict';


/** 
 * Creates a new XRMsg
 * @constructor 
 */
function XRMsg (a, b) {
  var header = { client: {}, service: {} };
  var body = {};

  /**
   * Header/body of the message object is set to the arguments if they exists.
   * If only a single argument is passed, assume it's representing the whole
   * message object.
   */
  if ((typeof a !== 'undefined' && a !== null) && 
      (typeof b !== 'undefined' && b != null)) {

    header = a;
    body = b;

  } else if ((typeof b === 'undefined' || b === null) && 
             (typeof a !== 'undefined')) {

    header =  a.header; 
    body = a.body;

  }

  this.envelope = {};
  this.envelope.header = header;
  this.envelope.body = body;
}

/** Convenience setters */
XRMsg.prototype.setClient = function (instance, memberClass, memberCode, subsystemCode) {

  /** Optimistic validation */
  if (arguments.length === 4) {
    this.envelope.header.client = {
      xRoadInstance: instance,
      memberClass: memberClass,
      memberCode: memberCode,
      subsystemCode: subsystemCode
    };
  } else if (arguments.length === 1 && typeof arguments[0] === 'object') {
    this.envelope.header.client = arguments[0];
  }

  return this;
};

XRMsg.prototype.setService = function (s) {
  this.envelope.header.service = s;

  return this;
};

XRMsg.prototype.setUserId = function (id) {
  this.envelope.header.userId = id;

  return this;
};

XRMsg.prototype.setId = function (id) {
  this.envelope.header.Id = id;

  return this;
};

XRMsg.prototype.setProtocolVersion = function (v) {
  this.envelope.header.protocolVersion = v;

  return this;
};

XRMsg.prototype.setBody = function (b) {
  this.envelope.body = b; 

  return this;
};

XRMsg.prototype.setHeader = function (h) {
  this.envelope.header = h; 

  return this;
};

/** Convenience getters */
XRMsg.prototype.getHeader = function () {
  return this.envelope.header; 
};

XRMsg.prototype.getBody = function () {
  return this.envelope.body; 
};

module.exports = XRMsg;
