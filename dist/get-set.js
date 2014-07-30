(function(){function require(e,t){for(var n=[],r=e.split("/"),i,s,o=0;(s=r[o++])!=null;)".."==s?n.pop():"."!=s&&n.push(s);n=n.join("/"),o=require,s=o.m[t||0],i=s[n+".js"]||s[n+"/index.js"]||s[n],r='Cannot require("'+n+'")';if(!i)throw Error(r);if(s=i.c)i=o.m[t=s][e=i.m];if(!i)throw Error(r);return i.exports||i(i,i.exports={},function(n){return o("."!=n.charAt(0)?n:e+"/../"+n,t)}),i.exports};
require.m = [];
require.m[0] = { "lib/get.js": function(module, exports, require){'use strict';

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
},
"lib/index.js": function(module, exports, require){'use strict';

/**
 * Module interface.
 */

exports.get = require('./get');
exports.set = require('./set');},
"lib/set.js": function(module, exports, require){'use strict';

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
}}};
GetSet = require('lib/index.js');
}());