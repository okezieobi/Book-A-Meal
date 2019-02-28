'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setMenu = require('../controllers/setMenu');

var _setMenu2 = _interopRequireDefault(_setMenu);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.post('/menus', _setMenu2.default);

exports.default = _router2.default;
//# sourceMappingURL=setMenu.js.map