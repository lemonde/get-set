'use strict';

var set = require('../../lib/set');

describe('Set', function () {
  var object;

  describe('given undefined object', function () {
    it('should throw an error', function () {
      expect(set.bind(null, object, 'a.b.c')).to.throw(TypeError);
    });
  });

  describe('given undefined path', function () {
    beforeEach(function () {
      object = {};
    });

    it('should throw a TypeError', function () {
      expect(set.bind(null, {}, undefined, 1)).to.throw(TypeError);
    });
  });

  describe('given path', function () {
    beforeEach(function () {
      object = { a: { b: 1 } };
    });

    it('should set property', function () {
      expect(set(object, 'c', 2)).to.equal(2);
      expect(object).to.have.property('c', 2);
      expect(set(object, 'a.b', 3)).to.equal(3);
      expect(object).to.have.deep.property('a.b', 3);
      expect(set(object, 'c.d.e.f', 4)).to.equal(4);
      expect(object).to.have.deep.property('c.d.e.f', 4);
    });
  });
});
