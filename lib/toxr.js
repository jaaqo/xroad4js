'use strict';

/**
 * Dependencies
 */
var Builder = require('xml2js').Builder,
  builder = new Builder(),
  Request = require('../index.js').Request;

/**
 * Transfrom data from JS to XRoad SOAP
 *
 * TODO:
 *
 * - Fix usage of convenience objects to account for responses
 *   when the response object is complete
 *
 * @param {Object} obj
 * @return {String}
 */
module.exports = function (obj) {
  var object;

  if ( obj instanceof Request ) {
    object = obj;
  } else {
    object = new Request(obj);
  }
  return builder.buildObject(object);
};
