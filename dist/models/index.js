"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BookAMeal =
/*#__PURE__*/
function () {
  function BookAMeal() {
    _classCallCheck(this, BookAMeal);

    this.mealOptionList = [];
    this.menuList = [];
    this.orderList = [];
  }

  _createClass(BookAMeal, [{
    key: "mealFormat",
    value: function mealFormat(data) {
      this.mealOptionData = {
        id: data.mealId,
        name: data.mealOptionName,
        price: parseInt(data.mealOptionPrice, 10)
      };
      return this.mealOptionData;
    }
  }, {
    key: "totalPrice",
    value: function totalPrice(optionOneArray, optionTwoArray) {
      var _this = this;

      this.total = 0;
      optionOneArray.forEach(function (optionOne) {
        optionTwoArray.forEach(function (optionTwo) {
          if (optionOne === optionTwo.name) {
            _this.total += optionTwo.price;
            return;
          }

          if (optionOne === optionTwo.menuName) {
            _this.total += optionTwo.total;
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
        menuName: data.menuName,
        mealOptions: data.menuOptions.split(' '),
        total: this.totalPrice(data.menuOptions.split(' '), this.mealOptionList)
      };
      return this.menuData;
    }
  }, {
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

  return BookAMeal;
}();

var data = new BookAMeal();
var _default = data;
exports.default = _default;
//# sourceMappingURL=index.js.map