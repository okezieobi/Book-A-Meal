'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _updateOneMealOption = require('../controllers/updateOneMealOption');

var _updateOneMealOption2 = _interopRequireDefault(_updateOneMealOption);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.put('/meals/:id', _updateOneMealOption2.default);

exports.default = _router2.default;
//# sourceMappingURL=updateOneMealOption.js.map