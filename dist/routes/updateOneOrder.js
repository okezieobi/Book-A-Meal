"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _updateOneOrder = _interopRequireDefault(require("../controllers/updateOneOrder"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.put('/orders/:id', _updateOneOrder.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=updateOneOrder.js.map