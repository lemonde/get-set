'use strict';

/**
 * Module interface.
 */

module.exports = set;

/**
 * Set nested object property.
 *
 * @param {Object} object
 * @param {String} path
 * @param {*} value
 * @return {*}
 */

function set(object, path, value) {
  /*jshint -W093 */
  var parts = path.split('.');
  if (1 === parts.length)
    return (object[parts[0]] = value);

  if (! isObject(object[parts[0]]))
    return set((object[parts[0]] = {}), parts.slice(1).join('.'), value);

  return set(object[parts[0]], parts.slice(1).join('.'), value);
}

/**
 * Return true if input is an object.
 *
 * @param {*} object
 * @return {Boolean}
 */

function isObject(object) {
  return object === Object(object);
}