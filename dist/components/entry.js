"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var renderApp = function renderApp(config) {
  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_App.default, {
    config: config
  }), document.getElementById('main'));
};

window.renderApp = function () {
  renderApp(window.bootstrapData);
};