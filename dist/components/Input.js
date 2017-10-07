'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

var _patternDecimal = require('../patterns/pattern-decimal');

var _patternDecimal2 = _interopRequireDefault(_patternDecimal);

var _patternInteger = require('../patterns/pattern-integer');

var _patternInteger2 = _interopRequireDefault(_patternInteger);

var _patternNumber = require('../patterns/pattern-number');

var _patternNumber2 = _interopRequireDefault(_patternNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-eval: 0 */

// types


var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    // init state
    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      error: props.error,
      value: props.value
    };

    // instance patterns
    _this.patternDecimal = _patternDecimal2.default;
    _this.patternInteger = _patternInteger2.default;
    _this.patternNumber = _patternNumber2.default;
    return _this;
  }

  /**
   * React Component componentWillReceiveProps
   * @param {*} nextProps 
   */


  _createClass(Input, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      this.setState({
        error: nextProps.error,
        value: nextProps.value
      }, function () {
        if (_this2.props.pattern !== '') {
          // instance class from types
          if (!_this2[_this2.props.pattern].is(_this2.state.value)) {
            _this2.setState({
              value: _this2.state.value.substring(0, _this2.state.value.length - 1)
            });
          }
        }
      });
    }

    /**
     * Render or not error
     */

  }, {
    key: 'renderError',
    value: function renderError() {
      var render = null;
      if (this.state.error !== '') {
        render = _react2.default.createElement(
          _style.Error,
          null,
          this.state.error
        );
      }
      return render;
    }

    /**
     * React Component render
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _style.Container,
        null,
        _react2.default.createElement(
          _style.Group,
          null,
          _react2.default.createElement(_style.InputTag, {
            type: this.props.type,
            onChange: this.props.onChange,
            value: this.state.value
          }),
          _react2.default.createElement(_style.Highlight, null),
          _react2.default.createElement(_style.Bar, null),
          _react2.default.createElement(
            _style.Label,
            null,
            this.props.label
          )
        ),
        this.renderError()
      );
    }
  }]);

  return Input;
}(_react.Component);

/**
 * React Component defaultProps
 */


Input.defaultProps = {
  error: '',
  label: '',
  type: 'text',
  value: '',
  pattern: ''
};

/**
 * React Component propTypes
 */
Input.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  pattern: _propTypes2.default.oneOf(['', 'patternDecimal', 'patternInteger', 'patternNumber'])
};

exports.default = Input;