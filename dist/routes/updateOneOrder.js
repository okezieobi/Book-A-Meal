'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updateOneOrder = require('../controllers/updateOneOrder');

var _updateOneOrder2 = _interopRequireDefault(_updateOneOrder);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.put('/orders/:id', _updateOneOrder2.default);

exports.default = _router2.default;
//# sourceMappingURL=updateOneOrder.js.map