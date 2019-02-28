'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addOneMealOption = require('../controllers/addOneMealOption');

var _addOneMealOption2 = _interopRequireDefault(_addOneMealOption);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.post('/meals', _addOneMealOption2.default);

exports.default = _router2.default;
//# sourceMappingURL=addOneMealOption.js.map