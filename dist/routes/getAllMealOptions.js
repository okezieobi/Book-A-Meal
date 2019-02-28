'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getAllMealOptions = require('../controllers/getAllMealOptions');

var _getAllMealOptions2 = _interopRequireDefault(_getAllMealOptions);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router2.default.get('/meals', _getAllMealOptions2.default);

exports.default = _router2.default;
//# sourceMappingURL=getAllMealOptions.js.map