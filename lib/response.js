/**
 * Object representing a XRoad response.
 *
 * @module xroad4js/response
 */

'use strict';

var XRMsg = require('./xrmsg.js');

/** 
 * Creates a new Response
 * @constructor 
 */
function Response (a, b) {
  XRMsg.call(this, a, b);
}

Response.prototype = Object.create(XRMsg.prototype);

module.exports = Response;
