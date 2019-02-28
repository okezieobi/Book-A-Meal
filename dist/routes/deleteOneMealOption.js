'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deleteOneMealOption = require('../controllers/deleteOneMealOption');

var _deleteOneMealOption2 = _interopRequireDefault(_deleteOneMealOption);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.delete('/meals/:id', _deleteOneMealOption2.default);

exports.default = _router2.default;
//# sourceMappingURL=deleteOneMealOption.js.map