"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addMeal = _interopRequireDefault(require("../controllers/addMeal"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.post('/meals', _addMeal.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=addMeal.js.map