'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addOneMealOption = require('./addOneMealOption');

var _addOneMealOption2 = _interopRequireDefault(_addOneMealOption);

var _deleteOneMealOption = require('./deleteOneMealOption');

var _deleteOneMealOption2 = _interopRequireDefault(_deleteOneMealOption);

var _getAllMealOptions = require('./getAllMealOptions');

var _getAllMealOptions2 = _interopRequireDefault(_getAllMealOptions);

var _updateOneMealOption = require('./updateOneMealOption');

var _updateOneMealOption2 = _interopRequireDefault(_updateOneMealOption);

var _setMenu = require('./setMenu');

var _setMenu2 = _interopRequireDefault(_setMenu);

var _getMenu = require('./getMenu');

var _getMenu2 = _interopRequireDefault(_getMenu);

var _getAllOrders = require('./getAllOrders');

var _getAllOrders2 = _interopRequireDefault(_getAllOrders);

var _selectMenuOption = require('./selectMenuOption');

var _selectMenuOption2 = _interopRequireDefault(_selectMenuOption);

var _updateOneOrder = require('./updateOneOrder');

var _updateOneOrder2 = _interopRequireDefault(_updateOneOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use('/v1', _addOneMealOption2.default);
  app.use('/v1', _deleteOneMealOption2.default);
  app.use('/v1', _getAllMealOptions2.default);
  app.use('/v1', _updateOneMealOption2.default);
  app.use('/v1', _setMenu2.default);
  app.use('/v1', _getMenu2.default);
  app.use('/v1', _getAllOrders2.default);
  app.use('/v1', _selectMenuOption2.default);
  app.use('/v1', _updateOneOrder2.default);
};
//# sourceMappingURL=index.js.map