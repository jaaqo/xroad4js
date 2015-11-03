'use strict';

/**
 * Object representing a XRoad request.
 *
 * @module xroad4js/request
 */

/** Create a request. */
module.exports = function Request(a, b) {
  var header = a || {};
  var body = b || {};

  if ((typeof b === 'undefined' || b === null) && typeof a !== 'undefined') {

    /** Make sure root is an 'envelope' object */
    if (!a.hasOwnProperty('envelope')) {
      this.root = {
        envelope: a
      };
    } else {
      this.root = a;
    }

    this.header = this.root.envelope.header;
    this.body = this.root.envelope.body;

  } else {
    this.root = {
      envelope: {}
    };
    this.header = this.root.envelope.header = header;
    this.body = this.root.envelope.body = body;
  }

  if (!this.header.hasOwnProperty('client')) {
    this.header.client = {}; 
  }
  if (!this.header.hasOwnProperty('service')) {
    this.header.service = {}; 
  }

  /** Convenience setters */
  this.setClient = function (c) {
    this.header.client = c;
  };

  this.setService = function (s) {
    this.header.service = s;
  };

  this.setUserId = function (id) {
    this.header.userId = id;
  };

  this.setId = function (id) {
    this.header.Id = id;
  };

  this.setProtocolVersion = function (v) {
    this.header.protocolVersion = v;
  };

};
