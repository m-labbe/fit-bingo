"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var test = function test(req, res) {
  res.send('Greetings from the user controller!');
};

exports.test = test;