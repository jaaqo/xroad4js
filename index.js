/**
 * XRoad4JS approaches to solve transformations on XML and JSON
 * through functions on data.
 *
 * @module xroad4js
 */

/**
 * Transfrom data from XRoad SOAP to JS dataobject
 *
 * @param {String} soap
 * @return {Object}
 */
exports.fromXR = function (soap) {
  return {content: 'SOAP'};
};

/**
 * Transfrom data from XRoad SOAP to JS
 *
 * @param {Object} obj
 * @return {String}
 */
exports.toXR = function (obj) {
  return '<content>' + obj.content + '</content>';
};
