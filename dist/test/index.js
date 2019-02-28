"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chai", {
  enumerable: true,
  get: function get() {
    return _chai.default;
  }
});
Object.defineProperty(exports, "expect", {
  enumerable: true,
  get: function get() {
    return _chai.expect;
  }
});
Object.defineProperty(exports, "chaiHttp", {
  enumerable: true,
  get: function get() {
    return _chaiHttp.default;
  }
});
Object.defineProperty(exports, "app", {
  enumerable: true,
  get: function get() {
    return _index.default;
  }
});
exports.dataSetup = void 0;

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Data =
/*#__PURE__*/
function () {
  function Data() {
    _classCallCheck(this, Data);
  }

  _createClass(Data, [{
    key: "meals",
    value: function () {
      var _meals = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _data$meals$mealOptio;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;
                this.testDataOne = {
                  mealId: _models.default.meals.mealOptionList.length,
                  mealOptionName: 'Dodo',
                  mealOptionPrice: 100
                };
                this.testDataTwo = {
                  mealId: _models.default.meals.mealOptionList.length,
                  mealOptionName: 'Rice',
                  mealOptionPrice: 1000
                };
                this.testDataThree = {
                  mealId: _models.default.meals.mealOptionList.length,
                  mealOptionName: 'Beans',
                  mealOptionPrice: 10000
                };
                _context.next = 8;
                return _models.default.meals.mealFormat(this.testDataOne);

              case 8:
                this.addMealOne = _context.sent;
                _context.next = 11;
                return _models.default.meals.mealFormat(this.testDataTwo);

              case 11:
                this.addMealTwo = _context.sent;
                _context.next = 14;
                return _models.default.meals.mealFormat(this.testDataThree);

              case 14:
                this.addMealThree = _context.sent;
                this.testDataList = [this.addMealOne, this.addMealTwo, this.addMealThree];
                _context.next = 18;
                return (_data$meals$mealOptio = _models.default.meals.mealOptionList).push.apply(_data$meals$mealOptio, _toConsumableArray(this.testDataList));

              case 18:
                this.testId += this.addMealOne.id;
                this.secondTestId += this.addMealTwo.id;
                this.thirdTestId += this.addMealThree.id;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function meals() {
        return _meals.apply(this, arguments);
      }

      return meals;
    }()
  }, {
    key: "menus",
    value: function () {
      var _menus = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _data$menus$menuList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;
                this.testDataFour = {
                  menuId: _models.default.menus.menuList.length,
                  menuName: 'Launch',
                  menuOptions: 'Rice Dodo'
                };
                this.testDataFive = {
                  menuId: _models.default.menus.menuList.length,
                  menuName: 'Dinner',
                  menuOptions: 'Rice Beans'
                };
                this.testDataSix = {
                  menuId: _models.default.menus.menuList.length,
                  menuName: 'Breakfast',
                  menuOptions: 'Beans Dodo'
                };
                _context2.next = 8;
                return _models.default.menus.menuFormat(this.testDataFour);

              case 8:
                this.addOne = _context2.sent;
                _context2.next = 11;
                return _models.default.menus.menuFormat(this.testDataFive);

              case 11:
                this.addTwo = _context2.sent;
                _context2.next = 14;
                return _models.default.menus.menuFormat(this.testDataSix);

              case 14:
                this.addThree = _context2.sent;
                this.testDataListTwo = [this.addOne, this.addTwo, this.addThree];
                _context2.next = 18;
                return (_data$menus$menuList = _models.default.menus.menuList).push.apply(_data$menus$menuList, _toConsumableArray(this.testDataListTwo));

              case 18:
                this.testId += this.addOne.id;
                this.secondTestId += this.addTwo.id;
                this.thirdTestId += this.addThree.id;

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function menus() {
        return _menus.apply(this, arguments);
      }

      return menus;
    }()
  }, {
    key: "orders",
    value: function () {
      var _orders = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _data$orders$orderLis;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;
                this.testDataSeven = {
                  orderId: _models.default.orders.orderList.length,
                  customerName: 'Okezie',
                  menuList: 'Breakfast Lunch'
                };
                this.testDataEight = {
                  orderId: _models.default.orders.orderList.length,
                  customerName: 'Frank',
                  menuList: 'Breakfast Dinner'
                };
                this.testDataNine = {
                  orderId: _models.default.orders.orderList.length,
                  customerName: 'Obiedere',
                  menuList: 'Lunch Dinner'
                };
                _context3.next = 8;
                return _models.default.orders.orderFormat(this.testDataSeven);

              case 8:
                this.addFour = _context3.sent;
                _context3.next = 11;
                return _models.default.orders.orderFormat(this.testDataEight);

              case 11:
                this.addFive = _context3.sent;
                _context3.next = 14;
                return _models.default.orders.orderFormat(this.testDataNine);

              case 14:
                this.addSix = _context3.sent;
                this.testDataListThree = [this.addFour, this.addFive, this.addSix];
                _context3.next = 18;
                return (_data$orders$orderLis = _models.default.orders.orderList).push.apply(_data$orders$orderLis, _toConsumableArray(this.testDataListThree));

              case 18:
                this.testId += this.addFour.id;
                this.secondTestId += this.addFive.id;
                this.thirdTestId += this.addSix.id;

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function orders() {
        return _orders.apply(this, arguments);
      }

      return orders;
    }()
  }]);

  return Data;
}();

var dataSetup = new Data();
exports.dataSetup = dataSetup;
//# sourceMappingURL=index.js.map