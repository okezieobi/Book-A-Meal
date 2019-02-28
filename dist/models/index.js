"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BookAMeal = function BookAMeal() {
  _classCallCheck(this, BookAMeal);
};

var Meal =
/*#__PURE__*/
function (_BookAMeal) {
  _inherits(Meal, _BookAMeal);

  function Meal() {
    var _this;

    _classCallCheck(this, Meal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Meal).call(this));
    _this.mealOptionList = [];
    return _this;
  }

  _createClass(Meal, [{
    key: "mealFormat",
    value: function mealFormat(data) {
      this.mealOptionData = {
        id: data.mealId,
        name: data.mealOptionName,
        price: data.mealOptionPrice
      };
      return this.mealOptionData;
    }
  }]);

  return Meal;
}(BookAMeal);

var Menu =
/*#__PURE__*/
function (_Meal) {
  _inherits(Menu, _Meal);

  function Menu() {
    var _this2;

    _classCallCheck(this, Menu);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this));
    _this2.menuList = [];
    return _this2;
  }

  _createClass(Menu, [{
    key: "totalPrice",
    value: function totalPrice(optionOneArray, optionTwoArray) {
      var _this3 = this;

      this.total = 0;
      optionOneArray.forEach(function (optionOne) {
        optionTwoArray.forEach(function (optionTwo) {
          if (optionOne === optionTwo.name) {
            _this3.total += optionTwo.total;
          }
        });
      });
      return this.total;
    }
  }, {
    key: "menuFormat",
    value: function menuFormat(data) {
      this.menuData = {
        date: new Date(),
        id: data.menuId,
        name: data.menuName,
        mealOptions: data.menuOptions.split(' '),
        total: this.totalPrice(data.menuOptions.split(' '), this.mealOptionList)
      };
      return this.menuData;
    }
  }]);

  return Menu;
}(Meal);

var Order =
/*#__PURE__*/
function (_Menu) {
  _inherits(Order, _Menu);

  function Order() {
    var _this4;

    _classCallCheck(this, Order);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Order).call(this));
    _this4.orderList = [];
    return _this4;
  }

  _createClass(Order, [{
    key: "orderFormat",
    value: function orderFormat(data) {
      this.orderData = {
        id: data.orderId,
        customer: data.customerName,
        menu: data.menuList.split(' '),
        total: this.totalPrice(data.menuList.split(' '), this.menuList)
      };
      return this.orderData;
    }
  }]);

  return Order;
}(Menu);

var meals = new Meal();
var menus = new Menu();
var orders = new Order();
var _default = {
  meals: meals,
  menus: menus,
  orders: orders
};
exports.default = _default;
//# sourceMappingURL=index.js.map