'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = exports.Highlight = exports.InputTag = exports.Bar = exports.Label = exports.Group = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    background:transparent;\n  }\n  to \t{\n    width:0;\n    background:transparent;\n  }\n'], ['\n  from {\n    background:transparent;\n  }\n  to \t{\n    width:0;\n    background:transparent;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 15px 0;\n  margin: 10px 0;\n'], ['\n  padding: 15px 0;\n  margin: 10px 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  color: #757575;\n  font-size: 14px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 2px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n'], ['\n  color: #757575;\n  font-size: 14px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 2px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n  display:block;\n  width:100%;\n\n  &:before {\n    content: \'\';\n    height: 2px;\n    width: 0;\n    bottom: 0;\n    position: absolute;\n    background: #4285f4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n    left: 50%;\n  }\n\n  &:after {\n    content: \'\';\n    height: 2px;\n    width: 0;\n    bottom: 0;\n    position: absolute;\n    background: #4285f4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n    right: 50%;\n  }\n'], ['\n  position: relative;\n  display:block;\n  width:100%;\n\n  &:before {\n    content: \'\';\n    height: 2px;\n    width: 0;\n    bottom: 0;\n    position: absolute;\n    background: #4285f4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n    left: 50%;\n  }\n\n  &:after {\n    content: \'\';\n    height: 2px;\n    width: 0;\n    bottom: 0;\n    position: absolute;\n    background: #4285f4;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all;\n    right: 50%;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  padding: 5px 0;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ ', ' {\n    top: -15px;\n    font-size: 11px;\n    color: #4285f4;\n  }\n\n  &:valid ~ ', ' {\n    top: -15px;\n    font-size: 11px;\n    color: #4285f4;\n  }\n\n  &:focus ~ ', ' {\n    &:before {\n      width: 50%;\n    }\n    &:after {\n      width: 50%;\n    }\n  }\n'], ['\n  font-size: 12px;\n  padding: 5px 0;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ ', ' {\n    top: -15px;\n    font-size: 11px;\n    color: #4285f4;\n  }\n\n  &:valid ~ ', ' {\n    top: -15px;\n    font-size: 11px;\n    color: #4285f4;\n  }\n\n  &:focus ~ ', ' {\n    &:before {\n      width: 50%;\n    }\n    &:after {\n      width: 50%;\n    }\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n'], ['\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  color: #d50000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n  min-height: 16px;\n  padding-top: 8px;\n'], ['\n  color: #d50000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n  min-height: 16px;\n  padding-top: 8px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var inputHighlighter = (0, _styledComponents.keyframes)(_templateObject);

var Container = exports.Container = _styledComponents2.default.div(_templateObject2);

var Group = exports.Group = _styledComponents2.default.div(_templateObject3);

var Label = exports.Label = _styledComponents2.default.label(_templateObject4);

var Bar = exports.Bar = _styledComponents2.default.span(_templateObject5);

var InputTag = exports.InputTag = _styledComponents2.default.input(_templateObject6, Label, Label, Bar);

var Highlight = exports.Highlight = _styledComponents2.default.span(_templateObject7);

var Error = exports.Error = _styledComponents2.default.div(_templateObject8);