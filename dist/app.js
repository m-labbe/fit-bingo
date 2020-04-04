"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config();
}

var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});
app.get('/', function (req, res) {
  res.send('Hello World');
});