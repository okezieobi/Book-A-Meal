"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_index.default.deleteOneMealOption =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, findMealOption;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = parseInt(req.params.id, 10);
            _context.next = 4;
            return _models.default.meals.mealOptionList.find(function (mealOption) {
              return mealOption.id === id;
            });

          case 4:
            findMealOption = _context.sent;

            if (findMealOption) {
              _context.next = 9;
              break;
            }

            res.status(404).send({
              message: 'Fail! Meal option not found'
            });
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return _models.default.meals.mealOptionList.splice(findMealOption.id, 1);

          case 11:
            res.status(204).send({});

          case 12:
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = _index.default.deleteOneMealOption;
exports.default = _default;
//# sourceMappingURL=deleteOneMealOption.js.map