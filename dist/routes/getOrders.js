"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOrders = _interopRequireDefault(require("../controllers/getOrders"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.get('/orders', _getOrders.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=getOrders.js.map