"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Services =
/*#__PURE__*/
function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  _createClass(Services, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dataRes, dataMessage, array) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.data = array;
                dataRes.status(200).send({
                  message: dataMessage,
                  data: this.data
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll(_x, _x2, _x3) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "findOne",
    value: function findOne(dataParams, arrayData) {
      this.findItem = arrayData.find(function (item) {
        return item.id === parseInt(dataParams.id, 10);
      });
      return this.findItem;
    }
  }, {
    key: "createOne",
    value: function () {
      var _createOne = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dataRes, arrayData, dataFormat, dataMessage, createId) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.newId = createId;
                this.newId = arrayData.length;
                _context2.next = 4;
                return dataFormat;

              case 4:
                this.createdItem = _context2.sent;
                _context2.next = 7;
                return arrayData.push(this.createdItem);

              case 7:
                dataRes.status(201).send({
                  message: dataMessage,
                  data: this.createdItem
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createOne(_x4, _x5, _x6, _x7, _x8) {
        return _createOne.apply(this, arguments);
      }

      return createOne;
    }()
  }, {
    key: "updateOne",
    value: function () {
      var _updateOne = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dataRes, arrayData, dataFormat, dataMessage, updateId) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dataFormat;

              case 2:
                this.updatedItem = _context3.sent;
                _context3.next = 5;
                return arrayData.splice(updateId, 1, this.updatedItem);

              case 5:
                dataRes.status(200).send({
                  message: dataMessage,
                  data: this.updatedItem
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateOne(_x9, _x10, _x11, _x12, _x13) {
        return _updateOne.apply(this, arguments);
      }

      return updateOne;
    }()
  }, {
    key: "deleteOne",
    value: function () {
      var _deleteOne = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dataRes, arrayData, deleteId) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.id = deleteId;
                _context4.next = 3;
                return arrayData.splice(this.id, 1);

              case 3:
                dataRes.status(204).send({});

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteOne(_x14, _x15, _x16) {
        return _deleteOne.apply(this, arguments);
      }

      return deleteOne;
    }()
  }, {
    key: "requiredNameErr",
    value: function requiredNameErr(name) {
      this.message = {
        message: "Fail! ".concat(name, " is required")
      };
      return this.message;
    }
  }, {
    key: "mustBeLettersErr",
    value: function mustBeLettersErr(name) {
      this.message = {
        message: "Fail! ".concat(name, " must be letters")
      };
      return this.message;
    }
  }, {
    key: "mustBeNumbersErr",
    value: function mustBeNumbersErr(price) {
      this.message = {
        message: "Fail! ".concat(price, " must be numbers")
      };
      return this.message;
    }
  }, {
    key: "stringToArrayErr",
    value: function stringToArrayErr(name) {
      this.message = {
        message: "Fail! ".concat(name, " must be letters and seperated by spaces")
      };
      return this.message;
    }
  }, {
    key: "sendErr400",
    value: function sendErr400(message, dataRes) {
      this.error = dataRes.status(400).send(message);
      return this.error;
    }
  }, {
    key: "processErr",
    value: function processErr(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes, resData) {
      if (!dataOne || dataOne === '') {
        this.sendErr400(this.requiredNameErr(nameOne), resData);
        return;
      }

      if (/^[A-Za-z]+$/.test(dataOne) === false) {
        this.sendErr400(this.mustBeLettersErr(nameOne), resData);
        return;
      }

      if (!dataTwo || dataTwo === '') {
        this.sendErr400(this.requiredNameErr(nameTwo), resData);
        return;
      }

      this.sendErr400(dataTwoTestRes, resData);
    }
  }]);

  return Services;
}();

var services = new Services();
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map