"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PatternNumber = function () {
  function PatternNumber() {
    _classCallCheck(this, PatternNumber);
  }

  _createClass(PatternNumber, null, [{
    key: "is",

    /**
     * Validate numbers, allow zero in init
     * @allow {0>~}
     */
    value: function is(value) {
      return (/^[0-9]+$/.test(value)
      );
    }
  }]);

  return PatternNumber;
}();

exports.default = PatternNumber;