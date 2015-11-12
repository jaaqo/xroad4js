/**
 * Object representing a XRoad message from which request and response objects
 * inherit from.
 *
 * @module xroad4js/xrmsg
 */

'use strict';

var xml2js = require('xml2js'),
  Builder = xml2js.Builder,
  builder = new Builder(),
  parseString = xml2js.parseString;

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

  /**
   * Transfrom data from JS to XRoad SOAP
   *
   * TODO: Validate self
   *
   * @param {Object} obj
   * @param {Function} cb
   * @return {String}
   */
  xrmsg.toXR = function (obj, cb) {
    var xml, callback;

    if ((obj !== null || typeof obj !== 'undefined') && 
        typeof cb === 'function') {
      xml = builder.buildObject(obj);
      callback = cb;
    } else if (obj !== null || typeof obj !== 'undefined') {
      xml = builder.buildObject(xrmsg.envelope);
      callback = obj;
    } else {
      throw new Error('Invalid arguments to toXR function'); 
    }


    return callback(null, xml);
  };

  /**
   * Parse XRoad SOAP to JS
   *
   * Provides defaults if options argument is not specified.
   *
   * @param {String} xml
   * @param {Object} a
   * @param {Function} b
   * @return {Object}
   */
  xrmsg.fromXR = function (xml, a, b) {
    var options, callback;

    if (xml !== null || xml !== undefined) {
      if (typeof a === 'function' && (b === null || b === undefined)) {
        callback = a;

        /** Default options for parseString */
        options = {
          explicitArray: false
        };

      } else if (typeof a === 'object' && typeof b === 'function') {
        callback = b;
        options = a;
      } else {
        throw new Error('Invalid arguments for fromXR function.');
      }
    } else {
      throw new Error('No XML argument for parsing.');
    }

    return parseString(xml, options, callback);
  };

  return xrmsg;
}

module.exports = XRMsg;
