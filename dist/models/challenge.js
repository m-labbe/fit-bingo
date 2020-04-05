"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose.default.Schema;
var TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  }
});
var ChallengeSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 254
  },
  tasks: [TaskSchema]
});

var _default = _mongoose.default.model('Challenge', ChallengeSchema);

exports.default = _default;