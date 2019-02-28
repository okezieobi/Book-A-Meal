"use strict";

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/meals/:id" to update OR create a meal option with PUT', function () {
  var testId = 0;
  before(function () {
    _index.dataSetup.meals();

    _index.dataSetup.menus();

    _index.dataSetup.orders();

    testId += _index.dataSetup.testId;
  });
  it('should update a meal option at "/v1/meals/:id" with PUT if all request parameters are valid and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Rice',
              mealOptionPrice: 100
            };
            _context.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context.sent;
            (0, _index.expect)(response).to.have.status(200);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Meal option found! Meal option successfully updated');

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should ALSO update a meal option at "/v1/meals/:id" with PUT if all request parameters are valid and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var wrongId, testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wrongId = testId + 10;
            testDataTwo = {
              mealOptionName: 'Rice',
              mealOptionPrice: 100
            };
            _context2.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context2.sent;
            (0, _index.expect)(response).to.have.status(201);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Meal option not found! Meal option successfully created');

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request does not exist and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            testDataTwo = {
              mealOptionPrice: 100
            };
            _context3.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context3.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request does not exist and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            testDataTwo = {
              mealOptionPrice: 100
            };
            wrongId = testId + 10;
            _context4.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context4.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            testDataTwo = {
              mealOptionName: '',
              mealOptionPrice: 100
            };
            _context5.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context5.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            testDataTwo = {
              mealOptionName: '',
              mealOptionPrice: 100
            };
            wrongId = testId + 10;
            _context6.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context6.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'p0r9]13[',
              mealOptionPrice: 100
            };
            _context7.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context7.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'p0r9]13[',
              mealOptionPrice: 100
            };
            wrongId = testId + 10;
            _context8.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context8.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required OR must be letters');

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request does not exist and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Rice'
            };
            _context9.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context9.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request does not exist and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Rice'
            };
            wrongId = testId + 10;
            _context10.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context10.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Dodo',
              mealOptionPrice: ''
            };
            _context11.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context11.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee12() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Dodo',
              mealOptionPrice: ''
            };
            wrongId = testId + 10;
            _context12.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context12.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee13() {
    var testDataTwo, response;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Dodo',
              mealOptionPrice: '0[d]e8f9fj](fg}'
            };
            _context13.next = 3;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(testId)).send(testDataTwo);

          case 3:
            response = _context13.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 7:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  })));
  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14() {
    var testDataTwo, wrongId, response;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            testDataTwo = {
              mealOptionName: 'Dodo',
              mealOptionPrice: '0[d]e8f9fj](fg}'
            };
            wrongId = testId + 10;
            _context14.next = 4;
            return _index.chai.request(_index.app).put("/v1/meals/".concat(wrongId)).send(testDataTwo);

          case 4:
            response = _context14.sent;
            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required OR must be numbers');

          case 8:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  })));
});
//# sourceMappingURL=updateOneMealOption.js.map