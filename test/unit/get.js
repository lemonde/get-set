'use strict';

var get = require('../../lib/get');

describe('Get', function () {
  var object;
  describe('given undefined object', function () {
    it('should return undefined', function () {
      expect(get(undefined, 'foo')).to.be.undefined;
    });
  });

  describe('given undefined path', function () {
    beforeEach(function () {
      object = {};
    });

    it('should throw a TypeError', function () {
      expect(get.bind(null, object)).to.throw(TypeError);
    });
  });

  describe('given invalid path', function () {
    beforeEach(function () {
      object = {};
    });

    it('should return default', function () {
      expect(get(object, 'foo.bar', true)).to.be.true;
    });
  });

  describe('given path', function () {
    beforeEach(function () {
      object = {
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3
          }
        }
      };
    });

    it('should return a value', function () {
      expect(get(object, 'a')).to.equal(1);
      expect(get(object, 'b.c')).to.equal(2);
      expect(get(object, 'b.d.e')).to.equal(3);
      expect(get(object, 'x.y.z')).to.be.undefined;
    });
  });
});
