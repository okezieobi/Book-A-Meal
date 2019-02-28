'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _services = require('../services');

var _services2 = _interopRequireDefault(_services);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// @ts-ignore


_index2.default.updateOneOrder = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var findOrder;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!req.body.customerName || req.body.customerName === '') {
              res.status(400).send(_services2.default.requiredNameErr('Customer name'));
            } else if (/^[A-Za-z]+$/.test(req.body.customerName) === false) {
              res.status(400).send(_services2.default.mustBeLettersErr('Customer name'));
            } else if (!req.body.menuList || req.body.menuList === '') {
              res.status(400).send(_services2.default.requiredNameErr('Menu list'));
            } else if (/^[A-Za-z\s]+$/.test(req.body.menuList) === false) {
              res.status(400).send(_services2.default.stringToArrayErr('Menu list'));
            } else {
              findOrder = _services2.default.findOne(req.params, _models2.default.orders.orderList);

              if (!findOrder) {
                req.body.orderId = _models2.default.orders.orderList.length;
                _services2.default.createOne(res, _models2.default.orders.orderList, _models2.default.orders.orderFormat(req.body), 'Menu order not found, menu order successfully created');
              } else {
                req.body.orderId = findOrder.id;
                _services2.default.updateOne(res, _models2.default.orders.orderList, _models2.default.orders.orderFormat(req.body), 'Menu order found, menu order successfully updated');
              }
            }
            _context.next = 7;
            break;

          case 4:
            _context.prev = 4;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 4]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _index2.default.updateOneOrder;
//# sourceMappingURL=updateOneOrder.js.map