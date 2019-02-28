'use strict';

var _index = require('./index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/orders" to get all orders with GET', function () {
  before(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _index.dataSetup.meals();
            _index.dataSetup.menus();
            _index.dataSetup.orders();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('should get all orders at "/v1/orders" with GET', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var response, randomRes;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index.chai.request(_index.app).get('/v1/orders');

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
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));
});
//# sourceMappingURL=getAllOrders.js.map