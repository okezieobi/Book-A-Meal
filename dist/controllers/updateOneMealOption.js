'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// @ts-ignore


_index2.default.updateOneMealOption = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var find;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!req.body.mealOptionName || req.body.mealOptionName === '' || /^[A-Za-z]+$/.test(req.body.mealOptionName) === false)) {
              _context.next = 4;
              break;
            }

            res.status(400).send({
              message: 'Fail! Meal option name is required OR must be letters'
            });
            _context.next = 29;
            break;

          case 4:
            if (!(!req.body.mealOptionPrice || req.body.mealOptionPrice === '' || /^[0-9]+$/.test(req.body.mealOptionPrice) === false)) {
              _context.next = 8;
              break;
            }

            res.status(400).send({
              message: 'Fail! Meal option price is required OR must be numbers'
            });
            _context.next = 29;
            break;

          case 8:
            find = _models2.default.meals.mealOptionList.find(function (meal) {
              return meal.id === parseInt(req.params.id, 10);
            });

            if (find) {
              _context.next = 20;
              break;
            }

            req.body.mealId = _models2.default.meals.mealOptionList.length;
            _context.t0 = _models2.default.meals.mealOptionList;
            _context.next = 14;
            return _models2.default.meals.mealFormat(req.body);

          case 14:
            _context.t1 = _context.sent;
            _context.next = 17;
            return _context.t0.push.call(_context.t0, _context.t1);

          case 17:
            res.status(201).send({
              message: 'Meal option not found! Meal option successfully created'
            });
            _context.next = 29;
            break;

          case 20:
            req.body.mealId = find.id;
            _context.t2 = _models2.default.meals.mealOptionList;
            _context.t3 = find.id;
            _context.next = 25;
            return _models2.default.meals.mealFormat(req.body);

          case 25:
            _context.t4 = _context.sent;
            _context.next = 28;
            return _context.t2.splice.call(_context.t2, _context.t3, 1, _context.t4);

          case 28:
            res.status(200).send({
              message: 'Meal option found! Meal option successfully updated'
            });

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _index2.default.updateOneMealOption;
//# sourceMappingURL=updateOneMealOption.js.map