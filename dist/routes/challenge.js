"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _challenge = require("../controllers/challenge");

var router = _express["default"].Router();

router.get('/', _challenge.getAll);
router.get('/:id', _challenge.get);
router.post('/create', _challenge.create);
var _default = router;
exports["default"] = _default;