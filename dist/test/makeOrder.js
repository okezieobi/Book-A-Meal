"use strict";

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/orders" to select meal option with POST', function () {
  before(function () {
    _index.dataSetup.meals();

    _index.dataSetup.menus();

    _index.dataSetup.orders();
  });
  it('should select at least one menu option at "/v1/orders" with POST',
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
              customerName: 'Frank',
              menuList: 'BreakFast Dinner'
            };
            _context.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context.sent;
            (0, _index.expect)(response).to.have.status(201);
            (0, _index.expect)(response).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Success! Menu selected and order made');
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
  it('should not select a menu option at "/v1/orders" with POST if customer name in request does not exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            testData = {
              menuList: 'BreakFast Dinner'
            };
            _context2.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context2.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should not select a menu option at "/v1/orders" with POST if customer name in request is an empty string',
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
              customerName: '',
              menuList: 'BreakFast Dinner'
            };
            _context3.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context3.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name is required');

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should not select a menu option at "/v1/orders" with POST if customer name in request are not letters',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            testData = {
              customerName: '0or]f{(uu',
              menuList: 'BreakFast Dinner'
            };
            _context4.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context4.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Customer name must be letters');

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should not create a menu at "/v1/menus" with POST if menu options in request does not exist',
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
              customerName: 'Frank'
            };
            _context5.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context5.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should not create a menu at "/v1/menus" with POST if menu options in request is an empty string',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            testData = {
              customerName: 'Frank',
              menuList: ''
            };
            _context6.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context6.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list is required');

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('should not create a menu at "/v1/menus" with POST if menu options in request ae not letters',
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
              customerName: 'Frank',
              menuList: '0{0rir}t[('
            };
            _context7.next = 3;
            return _index.chai.request(_index.app).post('/v1/orders').send(testData);

          case 3:
            response = _context7.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
});
//# sourceMappingURL=makeOrder.js.map