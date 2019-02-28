'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMenu = require('../controllers/getMenu');

var _getMenu2 = _interopRequireDefault(_getMenu);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.get('/menus', _getMenu2.default);

exports.default = _router2.default;
//# sourceMappingURL=getMenu.js.map