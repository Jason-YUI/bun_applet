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

var Child = function (_wepy$component) {
  _inherits(Child, _wepy$component);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      tap: function tap() {
        console.log('child is click');
        this.$emit('childFn', 100);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Child;
}(_wepy2.default.component);

exports.default = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNoaWxkIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTEMsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEdBQXRCO0FBQ0Q7QUFKTyxLOzs7O0VBRHVCLGVBQUtDLFM7O2tCQUFuQk4sSyIsImZpbGUiOiJjaGlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIGlzIGNsaWNrJylcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIDEwMClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==