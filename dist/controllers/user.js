"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.test = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var test = function test(req, res) {
  res.send('Greetings from the user controller!');
};

exports.test = test;

var create = function create(req, res) {
  var user = new _user["default"]({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  user.save(function (err, data) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log('Success:', data);
    }

    res.send('User created successfully');
  });
};

exports.create = create;