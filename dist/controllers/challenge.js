"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.get = exports.getAll = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _error = require("./error");

var _challenge = _interopRequireDefault(require("../models/challenge"));

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var challenges;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _challenge["default"].find({}).then((0, _error.throwIf)(function (r) {
              return !r;
            }, 400, 'not found', 'Challenge Not Found'), (0, _error.throwError)(500, 'Database Error'));

          case 3:
            challenges = _context.sent;
            res.render('challenges', {
              challenges: challenges
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            (0, _error.sendError)(res)(_context.t0);

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
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var challenge;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _challenge["default"].findById(req.params.id).then((0, _error.throwIf)(function (r) {
              return !r;
            }, 400, 'not found', 'Challenge Not Found'), (0, _error.throwError)(500, 'Database Error'));

          case 3:
            challenge = _context2.sent;
            res.render('challenge', challenge);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            (0, _error.sendError)(res)(_context2.t0);

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

var create = function create(req, res) {
  var challenge = new _challenge["default"]({
    name: req.body.name,
    tasks: req.body.tasks
  });
  challenge.save(function (err, data) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log('Success:', data);
    }

    res.send('Challenge created successfully');
  });
};

exports.create = create;