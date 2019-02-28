"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setMenus = _interopRequireDefault(require("../controllers/setMenus"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.post('/menus', _setMenus.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=setMenus.js.map