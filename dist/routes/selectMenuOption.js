'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _selectOneMeal = require('../controllers/selectOneMeal');

var _selectOneMeal2 = _interopRequireDefault(_selectOneMeal);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.post('/orders', _selectOneMeal2.default);

exports.default = _router2.default;
//# sourceMappingURL=selectMenuOption.js.map