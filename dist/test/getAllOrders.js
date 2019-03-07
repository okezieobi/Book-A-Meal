"use strict";

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/api/v1/orders" to get all orders with GET', function () {
  before(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _index.dataSetup.meals();

            _index.dataSetup.menus();

            _index.dataSetup.orders();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should get all orders at "/api/v1/orders" with GET',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var response, randomRes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index.chai.request(_index.app).get('/api/v1/orders');

          case 2:
            response = _context2.sent;
            randomRes = response.body.data[Math.floor(Math.random() * response.body.data.length)];
            (0, _index.expect)(response).to.have.status(200);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Success! Order list retrieved');
            (0, _index.expect)(randomRes).to.have.property('id');
            (0, _index.expect)(randomRes).to.have.property('customer');
            (0, _index.expect)(randomRes).to.have.property('menu');
            (0, _index.expect)(randomRes).to.have.property('total');

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=getAllOrders.js.map