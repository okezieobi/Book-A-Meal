'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || '3000';
_app2.default.listen(port, function () {
  console.log('App is live and listening on port ' + port + '!');
});

exports.default = _app2.default;
//# sourceMappingURL=index.js.map