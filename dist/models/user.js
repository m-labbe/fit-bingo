"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var SALT_WORK_FACTOR = 10;
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
  },
  password: {
    type: String,
    required: true
  }
});
UserSchema.pre('save', function (next) {
  var _this = this;

  if (this.isModified('password')) {
    _bcrypt["default"].genSalt(SALT_WORK_FACTOR, function (err, salt) {
      if (err) return next(err);

      _bcrypt["default"].hash(_this.password, salt, function (err, hash) {
        if (err) return next(err);
        _this.password = hash;
        next();
      });
    });
  }
});

var _default = _mongoose["default"].model('User', UserSchema);

exports["default"] = _default;