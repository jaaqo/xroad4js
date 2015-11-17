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
  var xrmsg;

  if (typeof msg !== 'undefined' && msg !== null) {
    xrmsg = msg;
  } else {
    xrmsg = {};
    xrmsg.envelope = {
      header: {
        client: {},
        service: {}
      },
      body: {}
    };
  }


  return xrmsg;
}

module.exports = XRMsg;
