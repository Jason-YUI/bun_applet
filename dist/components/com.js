'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Com = function (_wepy$component) {
  _inherits(Com, _wepy$component);

  function Com() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Com);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Com.__proto__ || Object.getPrototypeOf(Com)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {}, _this.methods = {}, _this.events = {
      'some-event': function someEvent(p1, p2, p3, $event) {
        console.log(_this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Com;
}(_wepy2.default.component);

exports.default = Com;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbS5qcyJdLCJuYW1lcyI6WyJDb20iLCJjb21wb25lbnRzIiwiZGF0YSIsIm1ldGhvZHMiLCJldmVudHMiLCJwMSIsInAyIiwicDMiLCIkZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiJG5hbWUiLCJuYW1lIiwic291cmNlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxVLEdBQWEsRSxRQUViQyxJLEdBQU8sRSxRQUVQQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVM7QUFDUCxvQkFBYyxtQkFBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYUMsTUFBYixFQUF3QjtBQUNwQ0MsZ0JBQVFDLEdBQVIsQ0FBZSxNQUFLQyxLQUFwQixpQkFBcUNILE9BQU9JLElBQTVDLGNBQXlESixPQUFPSyxNQUFQLENBQWNGLEtBQXZFO0FBQ0Q7QUFITSxLOzs7O0VBUHNCLGVBQUtHLFM7O2tCQUFqQmQsRyIsImZpbGUiOiJjb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb20gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHt9XG5cbiAgICBkYXRhID0ge31cblxuICAgIG1ldGhvZHMgPSB7fVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgJ3NvbWUtZXZlbnQnOiAocDEsIHAyLCBwMywgJGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=