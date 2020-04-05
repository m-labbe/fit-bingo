"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.getAll = exports.create = exports.test = void 0;

var _error = require("./error");

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].find({}).then((0, _error.throwIf)(function (r) {
              return !r;
            }, 400, 'not found', 'User Not Found'), (0, _error.throwError)(500, 'Database Error'));

          case 3:
            users = _context.sent;
            res.render('users', {
              users: users
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            (0, _error.sendError)(res)(error);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var get = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findById(req.params.id).then((0, _error.throwIf)(function (r) {
              return !r;
            }, 400, 'not found', 'User Not Found'), (0, _error.throwError)(500, 'Database Error'));

          case 3:
            user = _context2.sent;
            res.render('users', {
              users: [user]
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            (0, _error.sendError)(res)(error);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function get(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.get = get;