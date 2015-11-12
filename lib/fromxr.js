'use strict';

/** Dependencies */
var xml2js = require('xml2js');
var parseString = xml2js.parseString;

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
module.exports = function (xml, a, b) {
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
