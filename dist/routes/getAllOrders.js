"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getAllOrders = _interopRequireDefault(require("../controllers/getAllOrders"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.get('/orders', _getAllOrders.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=getAllOrders.js.map