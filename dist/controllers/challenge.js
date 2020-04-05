"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.get = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _error = require("./error");

var _challenge = _interopRequireDefault(require("../models/challenge"));

var get = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var challenge;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _challenge["default"].findById(req.params.id).then((0, _error.throwIf)(function (r) {
              return !r;
            }, 400, 'not found', 'Challenge Not Found'), (0, _error.throwError)(500, 'Database Error'));

          case 3:
            challenge = _context.sent;
            res.render('challenge', challenge);
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

  return function get(_x, _x2) {
    return _ref.apply(this, arguments);
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