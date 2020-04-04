"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 254
  }
});

var _default = _mongoose["default"].model('User', UserSchema);

exports["default"] = _default;