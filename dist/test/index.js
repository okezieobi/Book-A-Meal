'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataSetup = exports.app = exports.chaiHttp = exports.chai = exports.expect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Data = function () {
  function Data() {
    _classCallCheck(this, Data);
  }

  _createClass(Data, [{
    key: 'meals',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _data$meals$mealOptio;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;

                this.testDataOne = {
                  mealId: _models2.default.meals.mealOptionList.length,
                  mealOptionName: 'Dodo',
                  mealOptionPrice: 100
                };
                this.testDataTwo = {
                  mealId: _models2.default.meals.mealOptionList.length,
                  mealOptionName: 'Rice',
                  mealOptionPrice: 1000
                };
                this.testDataThree = {
                  mealId: _models2.default.meals.mealOptionList.length,
                  mealOptionName: 'Beans',
                  mealOptionPrice: 10000
                };

                _context.next = 8;
                return _models2.default.meals.mealFormat(this.testDataOne);

              case 8:
                this.addMealOne = _context.sent;
                _context.next = 11;
                return _models2.default.meals.mealFormat(this.testDataTwo);

              case 11:
                this.addMealTwo = _context.sent;
                _context.next = 14;
                return _models2.default.meals.mealFormat(this.testDataThree);

              case 14:
                this.addMealThree = _context.sent;

                this.testDataList = [this.addMealOne, this.addMealTwo, this.addMealThree];
                _context.next = 18;
                return (_data$meals$mealOptio = _models2.default.meals.mealOptionList).push.apply(_data$meals$mealOptio, _toConsumableArray(this.testDataList));

              case 18:
                this.testId += this.addMealOne.id;
                this.secondTestId += this.addMealTwo.id;
                this.thirdTestId += this.addMealThree.id;

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function meals() {
        return _ref.apply(this, arguments);
      }

      return meals;
    }()
  }, {
    key: 'menus',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _data$menus$menuList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;

                this.testDataFour = {
                  menuId: _models2.default.menus.menuList.length,
                  menuName: 'Launch',
                  menuOptions: 'Rice Dodo'
                };
                this.testDataFive = {
                  menuId: _models2.default.menus.menuList.length,
                  menuName: 'Dinner',
                  menuOptions: 'Rice Beans'
                };
                this.testDataSix = {
                  menuId: _models2.default.menus.menuList.length,
                  menuName: 'Breakfast',
                  menuOptions: 'Beans Dodo'
                };

                _context2.next = 8;
                return _models2.default.menus.menuFormat(this.testDataFour);

              case 8:
                this.addOne = _context2.sent;
                _context2.next = 11;
                return _models2.default.menus.menuFormat(this.testDataFive);

              case 11:
                this.addTwo = _context2.sent;
                _context2.next = 14;
                return _models2.default.menus.menuFormat(this.testDataSix);

              case 14:
                this.addThree = _context2.sent;

                this.testDataListTwo = [this.addOne, this.addTwo, this.addThree];
                _context2.next = 18;
                return (_data$menus$menuList = _models2.default.menus.menuList).push.apply(_data$menus$menuList, _toConsumableArray(this.testDataListTwo));

              case 18:
                this.testId += this.addOne.id;
                this.secondTestId += this.addTwo.id;
                this.thirdTestId += this.addThree.id;

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function menus() {
        return _ref2.apply(this, arguments);
      }

      return menus;
    }()
  }, {
    key: 'orders',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _data$orders$orderLis;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.testId = 0;
                this.secondTestId = 0;
                this.thirdTestId = 0;

                this.testDataSeven = {
                  orderId: _models2.default.orders.orderList.length,
                  customerName: 'Okezie',
                  menuList: 'Breakfast Lunch'
                };
                this.testDataEight = {
                  orderId: _models2.default.orders.orderList.length,
                  customerName: 'Frank',
                  menuList: 'Breakfast Dinner'
                };
                this.testDataNine = {
                  orderId: _models2.default.orders.orderList.length,
                  customerName: 'Obiedere',
                  menuList: 'Lunch Dinner'
                };

                _context3.next = 8;
                return _models2.default.orders.orderFormat(this.testDataSeven);

              case 8:
                this.addFour = _context3.sent;
                _context3.next = 11;
                return _models2.default.orders.orderFormat(this.testDataEight);

              case 11:
                this.addFive = _context3.sent;
                _context3.next = 14;
                return _models2.default.orders.orderFormat(this.testDataNine);

              case 14:
                this.addSix = _context3.sent;

                this.testDataListThree = [this.addFour, this.addFive, this.addSix];
                _context3.next = 18;
                return (_data$orders$orderLis = _models2.default.orders.orderList).push.apply(_data$orders$orderLis, _toConsumableArray(this.testDataListThree));

              case 18:
                this.testId += this.addFour.id;
                this.secondTestId += this.addFive.id;
                this.thirdTestId += this.addSix.id;

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function orders() {
        return _ref3.apply(this, arguments);
      }

      return orders;
    }()
  }]);

  return Data;
}();

var dataSetup = new Data();

exports.expect = _chai.expect;
exports.chai = _chai2.default;
exports.chaiHttp = _chaiHttp2.default;
exports.app = _index2.default;
exports.dataSetup = dataSetup;
//# sourceMappingURL=index.js.map