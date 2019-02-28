"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selectOneMeal = _interopRequireDefault(require("../controllers/selectOneMeal"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.post('/orders', _selectOneMeal.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=selectMenuOption.js.map