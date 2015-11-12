'use strict';

/**
 * Dependencies
 */
var Builder = require('xml2js').Builder,
  builder = new Builder();

/**
 * Transfrom data from JS to XRoad SOAP
 *
 * @param {Object} obj
 * @param {Function} cb
 * @return {String}
 */
module.exports = function (obj, cb) {
  var xml, callback;

  if ((obj !== null || typeof obj !== 'undefined') &&
      typeof cb === 'function') {
    xml = builder.buildObject(obj);
    callback = cb;
  } else {
    throw new Error('Invalid arguments to toXR function');
  }


  return callback(null, xml);
};
