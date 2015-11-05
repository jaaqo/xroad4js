/**
 * Object representing a XRoad request.
 *
 * @module xroad4js/request
 */

'use strict';

var XRMsg = require('./xrmsg');

/** 
 * Creates a new Request
 * @constructor 
 */
function Request (a, b) {
  XRMsg.call(this, a, b);
}

Request.prototype = Object.create(XRMsg.prototype);

module.exports = Request;
