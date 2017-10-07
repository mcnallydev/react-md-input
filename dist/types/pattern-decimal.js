"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PatternDecimal = function () {
  function PatternDecimal() {
    _classCallCheck(this, PatternDecimal);
  }

  _createClass(PatternDecimal, null, [{
    key: "is",

    /**
     * Validate decimal
     * @allow {[99999, 99999.00]}
     */
    value: function is(value) {
      var response = false;
      if (parseInt(value, 10) <= 99999) {
        response = /^\d{1,5}\.?\d{0,2}$/.test(value);
      }
      return response;
    }
  }]);

  return PatternDecimal;
}();

exports.default = PatternDecimal;