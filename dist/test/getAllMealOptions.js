'use strict';

var _index = require('./index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_index.chai.use(_index.chaiHttp);

describe('Test endpoint at "/v1/meals" wih GET to retrieve all meal options', function () {
  before(function () {
    _index.dataSetup.meals();
    _index.dataSetup.menus();
    _index.dataSetup.orders();
  });

  it('should get all meal options at "/v1/meals" with GET', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, randomElement;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index.chai.request(_index.app).get('/v1/meals');

          case 2:
            response = _context.sent;
            randomElement = response.body.data[Math.floor(Math.random() * response.body.data.length)];

            (0, _index.expect)(response).to.have.status(200);
            (0, _index.expect)(response.body).to.be.an('object');
            (0, _index.expect)(response.body).to.have.property('data');
            (0, _index.expect)(response.body).to.have.property('message').equal('Success! Meal options retrieved');
            (0, _index.expect)(randomElement).to.have.property('id');
            (0, _index.expect)(randomElement).to.have.property('name');
            (0, _index.expect)(randomElement).to.have.property('price');

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});
//# sourceMappingURL=getAllMealOptions.js.map