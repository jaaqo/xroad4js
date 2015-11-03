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
 * @return {String}
 */
module.exports = function (obj) {
  return builder.buildObject(obj);
};
