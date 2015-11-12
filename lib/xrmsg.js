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

    if (a.client == undefined) {
      a.client = {};
    }

    if (a.service == undefined) {
      a.service = {};
    }

    header = a;
    body = b;

  } else if ((typeof b === 'undefined' || b === null) &&
             (typeof a !== 'undefined')) {

    if (a.header.client == undefined) {
      a.header.client = {};
    }

    if (a.header.service == undefined) {
      a.header.service = {};
    }

    header =  a.header;
    body = a.body;

  }

  this.envelope = {};
  this.envelope.header = header;
  this.envelope.body = body;
}

/** Validate an XRMsg envelope. */
function validateEnvelope(envelope) {
  var errors = [];

  if (envelope == undefined) {
    errors.push('XRMsg contains no envelope.');
  } else {
    if (envelope.header == undefined) {
      errors.push('XRMsg envelope contains no header.');
    } else {
      if (envelope.header.client == undefined) {
        errors.push('XRMsg envelope header contains no client.');
      }

      if (envelope.header.service == undefined) {
        errors.push('XRMsg envelope header contains no service.');
      }
    }

    if (envelope.body == undefined) {
      errors.push('XRMsg envelope contains no body.');
    }
  }

  if (errors.length !== 0) {
    throw new Error('Invalid envelope object.\n - ' + errors.join('\n - '));
  }

  return errors;
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

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setService = function (s) {
  this.envelope.header.service = s;

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setUserId = function (id) {
  this.envelope.header.userId = id;

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setId = function (id) {
  this.envelope.header.Id = id;

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setProtocolVersion = function (v) {
  this.envelope.header.protocolVersion = v;

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setBody = function (b) {
  this.envelope.body = b;

  validateEnvelope(this.envelope);

  return this;
};

XRMsg.prototype.setHeader = function (h) {
  this.envelope.header = h;

  validateEnvelope(this.envelope);

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
