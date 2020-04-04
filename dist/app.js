"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config();
}

_mongoose["default"].connect(process.env.MONGODB_URI);

_mongoose["default"].Promise = global.Promise;
var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var app = (0, _express["default"])();

var router = _express["default"].Router();

var PORT = process.env.PORT;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.use('/users', _user["default"]);
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});