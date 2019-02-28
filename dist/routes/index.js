"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addOneMealOption = _interopRequireDefault(require("./addOneMealOption"));

var _deleteOneMealOption = _interopRequireDefault(require("./deleteOneMealOption"));

var _getAllMealOptions = _interopRequireDefault(require("./getAllMealOptions"));

var _updateOneMealOption = _interopRequireDefault(require("./updateOneMealOption"));

var _setMenu = _interopRequireDefault(require("./setMenu"));

var _getMenu = _interopRequireDefault(require("./getMenu"));

var _getAllOrders = _interopRequireDefault(require("./getAllOrders"));

var _selectMenuOption = _interopRequireDefault(require("./selectMenuOption"));

var _updateOneOrder = _interopRequireDefault(require("./updateOneOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(app) {
  app.use('/v1', _addOneMealOption.default);
  app.use('/v1', _deleteOneMealOption.default);
  app.use('/v1', _getAllMealOptions.default);
  app.use('/v1', _updateOneMealOption.default);
  app.use('/v1', _setMenu.default);
  app.use('/v1', _getMenu.default);
  app.use('/v1', _getAllOrders.default);
  app.use('/v1', _selectMenuOption.default);
  app.use('/v1', _updateOneOrder.default);
};

exports.default = _default;
//# sourceMappingURL=index.js.map