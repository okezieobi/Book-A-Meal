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

_index.default.addOneMealOption =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var testMeal;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testMeal = req.body.mealOptionName && req.body.mealOptionPrice && /^[A-Za-z]+$/.test(req.body.mealOptionName) && /^[0-9]+$/.test(req.body.mealOptionPrice) && (req.body.mealOptionName && req.body.mealOptionPrice) !== '';

            if (!testMeal) {
              _context.next = 5;
              break;
            }

            req.body.mealId = _models.default.meals.mealOptionList.length;

            _services.default.createOne(res, _models.default.meals.mealOptionList, _models.default.meals.mealFormat(req.body), 'Success! Meal option created');

            return _context.abrupt("return");

          case 5:
            _services.default.processErr(req.body.mealOptionName, req.body.mealOptionPrice, 'Meal option name', 'Meal option price', _services.default.mustBeNumbersErr('Meal option price'), res);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = _index.default.addOneMealOption;
exports.default = _default;
//# sourceMappingURL=addMeal.js.map