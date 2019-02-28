'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getAllOrders = require('../controllers/getAllOrders');

var _getAllOrders2 = _interopRequireDefault(_getAllOrders);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.get('/orders', _getAllOrders2.default);

exports.default = _router2.default;
//# sourceMappingURL=getAllOrders.js.map