'use strict';

/**
 * XRoad4JS approaches to solve transformations on XML and JSON
 * through functions on data. This library uses the splendid 'xml2js' library
 * as the basis of parsing and building functionality.
 *
 * @module xroad4js
 */

/**
 * Expose request object
 */
exports.Request = require('./lib/request.js');

/**
 * Expose fromXR function
 */
exports.fromXR = require('./lib/fromxr.js');

/**
 * Expose toXR function
 */
exports.toXR = require('./lib/toxr.js');
