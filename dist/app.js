"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _path = _interopRequireDefault(require("path"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV !== 'production') {
  _dotenv["default"].config();
}

_mongoose["default"].connect(process.env.MONGODB_URI);

_mongoose["default"].Promise = global.Promise;
var db = _mongoose["default"].connection;
db.on('error', function (err) {
  console.log('DB connection error', err);
});
db.once('open', function () {
  console.log('Connection to DB successful');
});
var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.set('view engine', 'hbs');
app.set('views', _path["default"].join(__dirname, './views'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.use('/users', _user["default"]);
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});