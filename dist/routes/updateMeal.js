"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _updateMeal = _interopRequireDefault(require("../controllers/updateMeal"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.put('/meals/:id', _updateMeal.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=updateMeal.js.map