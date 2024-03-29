'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Child = function (_wepy$component) {
  _inherits(Child, _wepy$component);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: String,
      syncTitle: {
        type: String,
        default: 'null'
      },
      twoWayTitle: {
        type: Number,
        default: 'nothing',
        twoWay: true
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: 'onLoad',
    value: function onLoad() {
      // console.log(this.title);
      // console.log(this.syncTitle);
      // console.log(this.twoWayTitle);
      //
      // this.title = 'c-title';
      // console.log(this.$parent.parentTitle);
      // this.twoWayTitle = 'two-way-title';
      // this.$apply();
      // console.log(this.$parent.parentTitle);
      // this.$parent.parentTitle = 'p-title-changed';
      // this.$parent.$apply();
      // console.log(this.title);
      // console.log(this.syncTitle);
    }
  }]);

  return Child;
}(_wepy2.default.component);

exports.default = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNoaWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsInN5bmNUaXRsZSIsInR5cGUiLCJkZWZhdWx0IiwidHdvV2F5VGl0bGUiLCJOdW1iZXIiLCJ0d29XYXkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU9DLE1BREQ7QUFFTkMsaUJBQVc7QUFDVEMsY0FBTUYsTUFERztBQUVURyxpQkFBUztBQUZBLE9BRkw7QUFNTkMsbUJBQWE7QUFDWEYsY0FBTUcsTUFESztBQUVYRixpQkFBUyxTQUZFO0FBR1hHLGdCQUFRO0FBSEc7QUFOUCxLOzs7Ozs2QkFhQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUE1QmdDLGVBQUtDLFM7O2tCQUFuQlYsSyIsImZpbGUiOiJjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgIHByb3BzID0ge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBzeW5jVGl0bGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgZGVmYXVsdDogJ251bGwnXG4gICAgICAgIH0sXG4gICAgICAgIHR3b1dheVRpdGxlOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgIGRlZmF1bHQ6ICdub3RoaW5nJyxcbiAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zeW5jVGl0bGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnR3b1dheVRpdGxlKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy50aXRsZSA9ICdjLXRpdGxlJztcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kcGFyZW50LnBhcmVudFRpdGxlKTtcbiAgICAgICAgLy8gdGhpcy50d29XYXlUaXRsZSA9ICd0d28td2F5LXRpdGxlJztcbiAgICAgICAgLy8gdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4kcGFyZW50LnBhcmVudFRpdGxlKTtcbiAgICAgICAgLy8gdGhpcy4kcGFyZW50LnBhcmVudFRpdGxlID0gJ3AtdGl0bGUtY2hhbmdlZCc7XG4gICAgICAgIC8vIHRoaXMuJHBhcmVudC4kYXBwbHkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50aXRsZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3luY1RpdGxlKTtcbiAgICAgIH1cbiAgICB9XG4iXX0=