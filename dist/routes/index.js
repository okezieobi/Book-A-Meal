"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addMeal = _interopRequireDefault(require("./addMeal"));

var _deleteMeal = _interopRequireDefault(require("./deleteMeal"));

var _getMeals = _interopRequireDefault(require("./getMeals"));

var _updateMeal = _interopRequireDefault(require("./updateMeal"));

var _setMenus = _interopRequireDefault(require("./setMenus"));

var _getMenus = _interopRequireDefault(require("./getMenus"));

var _getOrders = _interopRequireDefault(require("./getOrders"));

var _makeOrder = _interopRequireDefault(require("./makeOrder"));

var _updateOrder = _interopRequireDefault(require("./updateOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var versionNumber = '/v1';

var _default = function _default(app) {
  app.use(versionNumber, _addMeal.default);
  app.use(versionNumber, _deleteMeal.default);
  app.use(versionNumber, _getMeals.default);
  app.use(versionNumber, _updateMeal.default);
  app.use(versionNumber, _setMenus.default);
  app.use(versionNumber, _getMenus.default);
  app.use(versionNumber, _getOrders.default);
  app.use(versionNumber, _makeOrder.default);
  app.use(versionNumber, _updateOrder.default);
};

exports.default = _default;
//# sourceMappingURL=index.js.map