"use strict";

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/meals/:id" to delete a meals option with DELETE', function () {
  var testId = 0;
  before(function () {
    _index.dataSetup.meals();

    _index.dataSetup.menus();

    _index.dataSetup.orders();

    testId += _index.dataSetup.testId;
  });
  it('should delete a meal option at "/v1/meals/:id" with DELETE if meals option exists',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index.chai.request(_index.app).delete("/v1/meals/".concat(testId));

          case 2:
            response = _context.sent;
            (0, _index.expect)(response).to.have.status(204);
            (0, _index.expect)(response.body).to.be.an('object');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should NOT delete a meal option at "/v1/meals/:id" with DELETE if meals option does NOT exist',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var wrongId, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wrongId = testId + 10;
            _context2.next = 3;
            return _index.chai.request(_index.app).delete("/v1/meals/".concat(wrongId));

          case 3:
            response = _context2.sent;
            (0, _index.expect)(response).to.have.status(404);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('message').equal('Fail! Meal option not found');

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
//# sourceMappingURL=deleteOneMeal.js.map