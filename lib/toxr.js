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
