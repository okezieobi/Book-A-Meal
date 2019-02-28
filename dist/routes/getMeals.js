"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMeals = _interopRequireDefault(require("../controllers/getMeals"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.get('/meals', _getMeals.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=getMeals.js.map