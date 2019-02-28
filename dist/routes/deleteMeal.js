"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deleteMeal = _interopRequireDefault(require("../controllers/deleteMeal"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.delete('/meals/:id', _deleteMeal.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=deleteMeal.js.map