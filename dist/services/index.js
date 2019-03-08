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
    key: "testItem",
    value: function testItem(dataOne, dataTwo, dataOneTest, dataTwoTest) {
      this.testResult = (dataOne && dataTwo && dataOneTest && dataTwoTest) === true;
      return this.testResult;
    }
  }, {
    key: "createOneRes",
    value: function () {
      var _createOneRes = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dataRes, arrayData, dataFormat, dataMessage) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return dataFormat;

              case 2:
                this.createdItem = _context2.sent;
                this.createdItem.id = arrayData.length;
                _context2.next = 6;
                return arrayData.push(this.createdItem);

              case 6:
                this.resAction(201, dataRes, dataMessage, this.createdItem);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createOneRes(_x4, _x5, _x6, _x7) {
        return _createOneRes.apply(this, arguments);
      }

      return createOneRes;
    }()
  }, {
    key: "resAction",
    value: function resAction(number, dataRes, dataMessage, sendData) {
      this.number = number;
      dataRes.status(this.number).send({
        message: dataMessage,
        data: sendData
      });
    }
  }, {
    key: "updateOneRes",
    value: function () {
      var _updateOneRes = _asyncToGenerator(
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
                this.updatedItem.id = updateId;
                _context3.next = 6;
                return arrayData.splice(updateId, 1, this.updatedItem);

              case 6:
                this.resAction(200, dataRes, dataMessage, this.updatedItem);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateOneRes(_x8, _x9, _x10, _x11, _x12) {
        return _updateOneRes.apply(this, arguments);
      }

      return updateOneRes;
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

      function deleteOne(_x13, _x14, _x15) {
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
    key: "sendErr",
    value: function sendErr(number, message, dataRes) {
      this.error = dataRes.status(number).send(message);
      return this.error;
    }
  }, {
    key: "processErr400",
    value: function processErr400(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes, resData) {
      if (!dataOne) {
        this.sendErr(400, this.requiredNameErr(nameOne), resData);
        return;
      }

      if (/^[A-Za-z]+$/.test(dataOne) === false) {
        this.sendErr(400, this.mustBeLettersErr(nameOne), resData);
        return;
      }

      if (!dataTwo) {
        this.sendErr(400, this.requiredNameErr(nameTwo), resData);
        return;
      }

      this.sendErr(400, dataTwoTestRes, resData);
    }
  }]);

  return Services;
}();

var services = new Services();
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map