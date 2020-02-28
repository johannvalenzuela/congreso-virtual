// Generated by CoffeeScript 1.7.1
(function() {
  var key, val, _ref, _ref1;

  exports.EncodeStream = require('./src/EncodeStream');

  exports.DecodeStream = require('./src/DecodeStream');

  exports.Array = require('./src/Array');

  exports.LazyArray = require('./src/LazyArray');

  exports.Bitfield = require('./src/Bitfield');

  exports.Boolean = require('./src/Boolean');

  exports.Buffer = require('./src/Buffer');

  exports.Enum = require('./src/Enum');

  exports.Optional = require('./src/Optional');

  exports.Reserved = require('./src/Reserved');

  exports.String = require('./src/String');

  exports.Struct = require('./src/Struct');

  exports.VersionedStruct = require('./src/VersionedStruct');

  _ref = require('./src/Number');
  for (key in _ref) {
    val = _ref[key];
    exports[key] = val;
  }

  _ref1 = require('./src/Pointer');
  for (key in _ref1) {
    val = _ref1[key];
    exports[key] = val;
  }

}).call(this);