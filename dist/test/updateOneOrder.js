"use strict";

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/api/v1/orders/:id" to update or create a menu order', function () {
  var testOrderId = 0;
  before(function () {
    _index.dataSetup.meals();

    _index.dataSetup.menus();

    _index.dataSetup.orders();

    testOrderId += _index.dataSetup.secondTestId;
  });
  it('should update a menu order at "/api/v1/orders/:id" with PUT if all data in request are valid',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: 'Lunch Dinner'
            };
            _context.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context.sent;
            (0, _index.expect)(response).to.have.status(200);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Menu order found, menu order successfully updated');
            (0, _index.expect)(response.body.data).to.have.property('id');
            (0, _index.expect)(response.body.data).to.have.property('customer').equal(testData.customerName);
            (0, _index.expect)(response.body.data).to.has.property('total');
            (0, _index.expect)(response.body.data).to.have.property('menu');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should also create a menu order at "/api/v1/orders/:id" with PUT if all data in request are valid but menu order does not exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: 'Lunch Dinner'
            };
            wrongId = testOrderId + 10;
            _context2.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context2.sent;
            (0, _index.expect)(response).to.have.status(201);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Menu order not found, menu order successfully created');
            (0, _index.expect)(response.body.data).to.have.property('id');
            (0, _index.expect)(response.body.data).to.have.property('customer').equal(testData.customerName);
            (0, _index.expect)(response.body.data).to.has.property('total');
            (0, _index.expect)(response.body.data).to.have.property('menu');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name does not exist and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            testData = {
              menuList: 'Lunch Dinner'
            };
            _context3.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context3.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name and menu order do NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            testData = {
              menuList: 'Lunch Dinner'
            };
            wrongId = testOrderId + 10;
            _context4.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context4.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is an empty string and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            testData = {
              customerName: '',
              menuList: 'Lunch Dinner'
            };
            _context5.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context5.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is an empty string and menu order does not exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            testData = {
              customerName: '',
              menuList: 'Lunch Dinner'
            };
            wrongId = testOrderId + 10;
            _context6.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context6.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name are not letters and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            testData = {
              customerName: 'oor](iuiro/{',
              menuList: 'Lunch Dinner'
            };
            _context7.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context7.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name must be letters');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if customer name are not letters and menu order does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            testData = {
              customerName: 'oor](iuiro/{',
              menuList: 'Lunch Dinner'
            };
            wrongId = testOrderId + 10;
            _context8.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context8.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name must be letters');

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list does not exist and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            testData = {
              customerName: 'Okezie'
            };
            _context9.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context9.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list and menu order do not exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            testData = {
              customerName: 'Okezie'
            };
            wrongId = testOrderId + 10;
            _context10.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context10.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is an empty string and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: ''
            };
            _context11.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context11.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is an empty string and menu order does not exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: ''
            };
            wrongId = testOrderId + 10;
            _context12.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context12.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list are not letters and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: '0r94d0[}(uui'
            };
            _context13.next = 3;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(testOrderId)).send(testData);

          case 3:
            response = _context13.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  })));
  it('should not update a menu order at "/api/v1/orders" with PUT if menu list are not letters and menu order exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14() {
    var testData, wrongId, response;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            testData = {
              customerName: 'Okezie',
              menuList: '0r94d0[}(uui'
            };
            wrongId = testOrderId + 10;
            _context14.next = 4;
            return _index.chai.request(_index.app).put("/api/v1/orders/".concat(wrongId)).send(testData);

          case 4:
            response = _context14.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');

          case 8:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
});
//# sourceMappingURL=updateOneOrder.js.map