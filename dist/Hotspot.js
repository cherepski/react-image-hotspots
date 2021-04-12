"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Hotspot =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hotspot, _React$Component);

  function Hotspot() {
    _classCallCheck(this, Hotspot);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hotspot).apply(this, arguments));
  }

  _createClass(Hotspot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          content = _this$props.content;
      var hotspotStyle = {
        position: 'absolute',
        display: 'block',
        top: y + '%',
        left: x + '%',
        fontFamily: 'Sans-Serif',
        pointerEvents: 'auto'
      };
      return _react["default"].createElement("div", {
        style: hotspotStyle
      }, content);
    }
  }]);

  return Hotspot;
}(_react["default"].Component);

Hotspot.propTypes = {
  /** percentage from the left of the image to show this hotspot */
  x: _propTypes["default"].number,

  /** percentage from the top of the image to show this hotspot */
  y: _propTypes["default"].number,

  /** the content of the hotspot */
  content: _propTypes["default"].element
};
var _default = Hotspot;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ib3RzcG90LmpzIl0sIm5hbWVzIjpbIkhvdHNwb3QiLCJwcm9wcyIsIngiLCJ5IiwiY29udGVudCIsImhvdHNwb3RTdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsInRvcCIsImxlZnQiLCJmb250RmFtaWx5IiwicG9pbnRlckV2ZW50cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFBQSx3QkFDa0IsS0FBS0MsS0FEdkI7QUFBQSxVQUNBQyxDQURBLGVBQ0FBLENBREE7QUFBQSxVQUNHQyxDQURILGVBQ0dBLENBREg7QUFBQSxVQUNNQyxPQUROLGVBQ01BLE9BRE47QUFHUixVQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFFBQUFBLFFBQVEsRUFBRSxVQURTO0FBRW5CQyxRQUFBQSxPQUFPLEVBQUUsT0FGVTtBQUduQkMsUUFBQUEsR0FBRyxFQUFFTCxDQUFDLEdBQUcsR0FIVTtBQUluQk0sUUFBQUEsSUFBSSxFQUFFUCxDQUFDLEdBQUcsR0FKUztBQUtuQlEsUUFBQUEsVUFBVSxFQUFFLFlBTE87QUFNbkJDLFFBQUFBLGFBQWEsRUFBRTtBQU5JLE9BQXJCO0FBU0EsYUFBTztBQUFLLFFBQUEsS0FBSyxFQUFFTjtBQUFaLFNBQTRCRCxPQUE1QixDQUFQO0FBQ0Q7Ozs7RUFkbUJRLGtCQUFNQyxTOztBQWlCNUJiLE9BQU8sQ0FBQ2MsU0FBUixHQUFvQjtBQUNsQjtBQUNBWixFQUFBQSxDQUFDLEVBQUVhLHNCQUFVQyxNQUZLOztBQUdsQjtBQUNBYixFQUFBQSxDQUFDLEVBQUVZLHNCQUFVQyxNQUpLOztBQUtsQjtBQUNBWixFQUFBQSxPQUFPLEVBQUVXLHNCQUFVRTtBQU5ELENBQXBCO2VBU2VqQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jbGFzcyBIb3RzcG90IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHgsIHksIGNvbnRlbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhvdHNwb3RTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRvcDogeSArICclJyxcbiAgICAgIGxlZnQ6IHggKyAnJScsXG4gICAgICBmb250RmFtaWx5OiAnU2Fucy1TZXJpZicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYXV0bydcbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17aG90c3BvdFN0eWxlfT57IGNvbnRlbnQgfTwvZGl2PlxuICB9XG59XG5cbkhvdHNwb3QucHJvcFR5cGVzID0ge1xuICAvKiogcGVyY2VudGFnZSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSB0byBzaG93IHRoaXMgaG90c3BvdCAqL1xuICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKiogcGVyY2VudGFnZSBmcm9tIHRoZSB0b3Agb2YgdGhlIGltYWdlIHRvIHNob3cgdGhpcyBob3RzcG90ICovXG4gIHk6IFByb3BUeXBlcy5udW1iZXIsXG4gIC8qKiB0aGUgY29udGVudCBvZiB0aGUgaG90c3BvdCAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMuZWxlbWVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RzcG90XG4iXX0=