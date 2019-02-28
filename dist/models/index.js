'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BookAMeal = function BookAMeal() {
  _classCallCheck(this, BookAMeal);
};

var Meal = function (_BookAMeal) {
  _inherits(Meal, _BookAMeal);

  function Meal() {
    _classCallCheck(this, Meal);

    var _this = _possibleConstructorReturn(this, (Meal.__proto__ || Object.getPrototypeOf(Meal)).call(this));

    _this.mealOptionList = [];
    return _this;
  }

  _createClass(Meal, [{
    key: 'mealFormat',
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

var Menu = function (_Meal) {
  _inherits(Menu, _Meal);

  function Menu() {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));

    _this2.menuList = [];
    return _this2;
  }

  _createClass(Menu, [{
    key: 'totalPrice',
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
    key: 'menuFormat',
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

var Order = function (_Menu) {
  _inherits(Order, _Menu);

  function Order() {
    _classCallCheck(this, Order);

    var _this4 = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this));

    _this4.orderList = [];
    return _this4;
  }

  _createClass(Order, [{
    key: 'orderFormat',
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

exports.default = {
  meals: meals,
  menus: menus,
  orders: orders
};
//# sourceMappingURL=index.js.map