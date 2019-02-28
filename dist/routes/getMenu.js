"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getMenu = _interopRequireDefault(require("../controllers/getMenu"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.get('/menus', _getMenu.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=getMenu.js.map