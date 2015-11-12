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
function XRMsg (a) {
  return {
    envelope: a
  };
}

module.exports = XRMsg;
