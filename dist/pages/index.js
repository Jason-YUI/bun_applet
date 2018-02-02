'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _child = require('./../components/child.js');

var _child2 = _interopRequireDefault(_child);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_test2.default], _this.$repeat = {}, _this.$props = { "child": { "xmlns:v-on": "" } }, _this.$events = { "child": { "v-on:childFn": "parentFn" } }, _this.components = {
      child: _child2.default
    }, _this.methods = {
      parentFn: function parentFn(num, evt) {
        console.log(num);
      },
      tap: function tap() {
        console.log('index tap');
      },
      tapName: function tapName(id, title, other, event) {
        console.log(id, title, other, event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      console.log('index show');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwibWl4aW5zIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY2hpbGQiLCJtZXRob2RzIiwicGFyZW50Rm4iLCJudW0iLCJldnQiLCJjb25zb2xlIiwibG9nIiwidGFwIiwidGFwTmFtZSIsImlkIiwidGl0bGUiLCJvdGhlciIsImV2ZW50IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLGdCLFFBRVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxjQUFhLEVBQWQsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxnQkFBZSxVQUFoQixFQUFULEUsUUFDVEMsVSxHQUFhO0FBQ1JDO0FBRFEsSyxRQUlWQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDRUMsR0FERixFQUNPQyxHQURQLEVBQ1k7QUFDbEJDLGdCQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDRCxPQUhPO0FBS1JJLFNBTFEsaUJBS0Y7QUFDSkYsZ0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsT0FQTztBQVNSRSxhQVRRLG1CQVNBQyxFQVRBLEVBU0lDLEtBVEosRUFTV0MsS0FUWCxFQVNrQkMsS0FUbEIsRUFTeUI7QUFDL0JQLGdCQUFRQyxHQUFSLENBQVlHLEVBQVosRUFBZ0JDLEtBQWhCLEVBQXVCQyxLQUF2QixFQUE4QkMsS0FBOUI7QUFDRDtBQVhPLEs7Ozs7OzZCQWNEO0FBQ1BQLGNBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7Ozs7RUExQmdDLGVBQUtPLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IENoaWxkIGZyb20gJy4uL2NvbXBvbmVudHMvY2hpbGQnXG4gIGltcG9ydCBUZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtUZXN0TWl4aW5dO1xuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImNoaWxkXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImNoaWxkXCI6e1widi1vbjpjaGlsZEZuXCI6XCJwYXJlbnRGblwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgY2hpbGQ6IENoaWxkXG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBwYXJlbnRGbiAobnVtLCBldnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobnVtKVxuICAgICAgfSxcblxuICAgICAgdGFwKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXggdGFwJylcbiAgICAgIH0sXG5cbiAgICAgIHRhcE5hbWUoaWQsIHRpdGxlLCBvdGhlciwgZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWQsIHRpdGxlLCBvdGhlciwgZXZlbnQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uU2hvdygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpbmRleCBzaG93JylcbiAgICB9XG4gIH1cbiJdfQ==