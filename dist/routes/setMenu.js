"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setMenu = _interopRequireDefault(require("../controllers/setMenu"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.post('/menus', _setMenu.default);

var _default = _router.default;
exports.default = _default;
//# sourceMappingURL=setMenu.js.map