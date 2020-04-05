"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("../controllers/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _user.getAll);
router.post('/create', _user.create);
router.get('/:id', _user.get);
var _default = router;
exports["default"] = _default;