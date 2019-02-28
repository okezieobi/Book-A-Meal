"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _addOneMealOption = _interopRequireDefault(require("../controllers/addOneMealOption"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.post('/meals', _addOneMealOption.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=addOneMealOption.js.map