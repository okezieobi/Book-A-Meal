"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

var _services = _interopRequireDefault(require("../services"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.default.updateOneOrder =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var findOrder;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!req.body.customerName || req.body.customerName === '') {
              res.status(400).send(_services.default.requiredNameErr('Customer name'));
            } else if (/^[A-Za-z]+$/.test(req.body.customerName) === false) {
              res.status(400).send(_services.default.mustBeLettersErr('Customer name'));
            } else if (!req.body.menuList || req.body.menuList === '') {
              res.status(400).send(_services.default.requiredNameErr('Menu list'));
            } else if (/^[A-Za-z\s]+$/.test(req.body.menuList) === false) {
              res.status(400).send(_services.default.stringToArrayErr('Menu list'));
            } else {
              findOrder = _services.default.findOne(req.params, _models.default.orders.orderList);

              if (!findOrder) {
                req.body.orderId = _models.default.orders.orderList.length;

                _services.default.createOne(res, _models.default.orders.orderList, _models.default.orders.orderFormat(req.body), 'Menu order not found, menu order successfully created');
              } else {
                req.body.orderId = findOrder.id;

                _services.default.updateOne(res, _models.default.orders.orderList, _models.default.orders.orderFormat(req.body), 'Menu order found, menu order successfully updated');
              }
            }

            _context.next = 7;
            break;

          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 4]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = _index.default.updateOneOrder;
exports.default = _default;
//# sourceMappingURL=updateOneOrder.js.map