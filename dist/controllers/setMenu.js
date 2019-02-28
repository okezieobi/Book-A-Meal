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


_index2.default.setMenu = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, menuName, menuOptions, createdMenu;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, menuName = _req$body.menuName, menuOptions = _req$body.menuOptions;

            if (!(!menuName || menuName === '')) {
              _context.next = 6;
              break;
            }

            res.status(400).send({
              message: 'Fail! Menu name is required'
            });
            _context.next = 25;
            break;

          case 6:
            if (!(/^[A-Za-z]+$/.test(menuName) === false)) {
              _context.next = 10;
              break;
            }

            res.status(400).send({
              message: 'Fail! Menu name must be letters with no spacing'
            });
            _context.next = 25;
            break;

          case 10:
            if (!(!menuOptions || menuOptions === '')) {
              _context.next = 14;
              break;
            }

            res.status(400).send({
              message: 'Fail! Menu options are required'
            });
            _context.next = 25;
            break;

          case 14:
            if (!(/^[A-Za-z\s]+$/.test(menuOptions) === false)) {
              _context.next = 18;
              break;
            }

            res.status(400).send({
              message: 'Fail! Menu options must be letters and seperated by spaces'
            });
            _context.next = 25;
            break;

          case 18:
            req.body.menuId = _models2.default.menus.menuList.length;
            _context.next = 21;
            return _models2.default.menus.menuFormat(req.body);

          case 21:
            createdMenu = _context.sent;
            _context.next = 24;
            return _models2.default.menus.menuList.push(createdMenu);

          case 24:
            res.status(201).send({
              message: 'Success! Menu created',
              data: createdMenu
            });

          case 25:
            _context.next = 30;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 30:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 27]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _index2.default.setMenu;
//# sourceMappingURL=setMenu.js.map