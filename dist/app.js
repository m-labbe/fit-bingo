"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
app.get('/', function (req, res) {
  res.send('Hello World');
});