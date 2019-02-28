"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deleteOneMealOption = _interopRequireDefault(require("../controllers/deleteOneMealOption"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.delete('/meals/:id', _deleteOneMealOption.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=deleteOneMealOption.js.map