'use strict';

/**
 * Module interface.
 */

module.exports = get;

/**
 * Get nested object property.
 *
 * @param {Object} object
 * @param {String} path
 * @param {*=} value - default value
 * @return {*}
 */

function get(object, path, value) {
  var parts = path.split('.');
  try {
    if (parts.length > 1)
      return get(object[parts[0]], parts.slice(1).join('.'), value);

    return (parts[0] in object) ? object[path] : value;
  } catch (err) {
    return value;
  }
}
