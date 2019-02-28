'use strict';

var _index = require('./index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/meals" to create a meal option with POST', function () {
  before(function () {
    _index.dataSetup.meals();
    _index.dataSetup.menus();
    _index.dataSetup.orders();
  });
  it('should create a meal option at "/v1/meal" with post if all request data are valid', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testData = {
              mealOptionName: 'Dodo',
              mealOptionPrice: 10
            };
            _context.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context.sent;

            (0, _index.expect)(response).to.have.status(201);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Success! Meal option created');
            (0, _index.expect)(response.body.data).to.have.property('id');
            (0, _index.expect)(response.body.data).to.have.property('name').equal(testData.mealOptionName);
            (0, _index.expect)(response.body.data).to.have.property('price').equal(testData.mealOptionPrice);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request does not exist', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            testData = {
              mealOptionPrice: 10
            };
            _context2.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context2.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required');

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request is an empty string', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            testData = {
              mealOptionName: '',
              mealOptionPrice: 10
            };
            _context3.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context3.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name is required');

          case 7:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request are not letters', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            testData = {
              mealOptionName: '0(}fieidfjd',
              mealOptionPrice: 10
            };
            _context4.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context4.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');

          case 7:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request does not exist', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            testData = {
              mealOptionName: 'Dodo'
            };
            _context5.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context5.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required');

          case 7:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request is an empty string', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            testData = {
              mealOptionName: 'Dodo',
              mealOptionPrice: ''
            };
            _context6.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context6.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price is required');

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  })));

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request is NOT a number', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var testData, response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            testData = {
              mealOptionName: 'Dodo',
              mealOptionPrice: 'p0{f(jf]'
            };
            _context7.next = 3;
            return _index.chai.request(_index.app).post('/v1/meals').send(testData);

          case 3:
            response = _context7.sent;

            (0, _index.expect)(response).to.have.status(400);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');

          case 7:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  })));
});
//# sourceMappingURL=addOneMeal.js.map