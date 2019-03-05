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

_index.default.setMenu =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var testSetMenu;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            testSetMenu = _services.default.testItem(req.body.menuName, req.body.menuOptions, /^[A-Za-z]+$/.test(req.body.menuName), /^[A-Za-z\s]+$/.test(req.body.menuOptions));

            if (testSetMenu) {
              _context.next = 4;
              break;
            }

            _services.default.processErr(req.body.menuName, req.body.menuOptions, 'Menu name', 'Menu options', _services.default.stringToArrayErr('Menu options'), res);

            return _context.abrupt("return");

          case 4:
            req.body.menuId = _models.default.menus.menuList.length;

            _services.default.createOne(res, _models.default.menus.menuList, _models.default.menus.menuFormat(req.body), 'Success! Menu created');

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

var _default = _index.default.setMenu;
exports.default = _default;
//# sourceMappingURL=setMenus.js.map