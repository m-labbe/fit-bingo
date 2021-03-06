"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireDefault(require("./styles.css"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var App = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2.default)(this, App);
    _this = _super.call(this, props);
    _this.state = {
      filterTerm: '',
      filterCategory: null
    };
    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      console.log(this.props.config);
      var tasks = this.props.config.tasks || [];
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _styles.default.gridContainer
      }, tasks.map(function (task) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: _styles.default.gridItem
        }, task.description);
      }));
    }
  }]);
  return App;
}(_react.Component);

var _default = App;
exports.default = _default;