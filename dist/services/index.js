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
                this.resAction(200, dataRes, dataMessage, this.data);

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
    value: function createOneRes(arrayData, dataFormat) {
      this.createdItem = dataFormat;
      this.createdItem.id = arrayData.length;
      arrayData.push(this.createdItem);
      return this.createdItem;
    }
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
    value: function updateOneRes(arrayData, dataFormat, updateId) {
      this.updatedItem = dataFormat;
      this.updatedItem.id = updateId;
      arrayData.splice(updateId, 1, this.updatedItem);
      return this.updatedItem;
    }
  }, {
    key: "updateOne",
    value: function updateOne(dataOne, dataTwo, dataOneTest, dataTwoTest, dataParams, arrayData, dataRes, dataFormat, updateMessage, createMessage, nameOne, nameTwo, dataTwoTestRes) {
      this.testInputs = this.testItem(dataOne, dataTwo, dataOneTest, dataTwoTest);
      this.findUpdate = this.findOne(dataParams, arrayData);

      if (this.testInputs && this.findUpdate) {
        this.resAction(200, dataRes, updateMessage, this.updateOneRes(arrayData, dataFormat, this.findUpdate.id));
        return;
      }

      if (this.testInputs) {
        this.resAction(201, dataRes, createMessage, this.createOneRes(arrayData, dataFormat));
        return;
      }

      this.sendErr(400, this.processErr400(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes), dataRes);
    }
  }, {
    key: "createOne",
    value: function createOne(dataReq, dataOne, dataTwo, dataOneTest, dataTwoTest, arrayData, dataRes, dataFormat, createMessage, nameOne, nameTwo, dataTwoTestRes) {
      this.testInputs = this.testItem(dataReq.body[dataOne], dataReq.body[dataTwo], dataOneTest.test([dataReq.body[dataOne]]), dataTwoTest.test([dataReq.body[dataTwo]]));

      if (this.testInputs) {
        this.resAction(201, dataRes, createMessage, this.createOneRes(arrayData, dataFormat));
        return;
      }

      this.sendErr(400, this.processErr400(dataReq.body[dataOne], dataReq.body[dataTwo], nameOne, nameTwo, dataTwoTestRes), dataRes);
    }
  }, {
    key: "deleteOne",
    value: function deleteOne(dataRes, arrayData, deleteId) {
      this.id = deleteId;
      arrayData.splice(this.id, 1);
      this.resAction(204, dataRes, false, false);
    }
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
      this.res = dataRes;
      this.res.status(number).send(message);
    }
  }, {
    key: "processErr400",
    value: function processErr400(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes) {
      if (!dataOne) {
        this.reqErr = this.requiredNameErr(nameOne);
        return this.reqErr;
      }

      if (/^[A-Za-z]+$/.test(dataOne) === false) {
        this.reqErr = this.mustBeLettersErr(nameOne);
        return this.reqErr;
      }

      if (!dataTwo) {
        this.reqErr = this.requiredNameErr(nameTwo);
        return this.reqErr;
      }

      this.reqErr = dataTwoTestRes;
      return this.reqErr;
    }
  }]);

  return Services;
}();

var services = new Services();
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map