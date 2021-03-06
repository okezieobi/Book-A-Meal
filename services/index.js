class Services {
  async getAll(dataRes, dataMessage, array) {
    this.data = array;
    this.resAction(200, dataRes, dataMessage, this.data);
  }

  findOne(dataParams, arrayData) {
    this.findItem = arrayData.find(item => item.id === parseInt(dataParams.id, 10));
    return this.findItem;
  }

  testItem(dataOne, dataTwo, dataOneTest, dataTwoTest) {
    this.testResult = (dataOne && dataTwo && dataOneTest && dataTwoTest) === true;
    return this.testResult;
  }

  createOneRes(arrayData, dataFormat) {
    this.createdItem = dataFormat;
    this.createdItem.id = arrayData.length;
    arrayData.push(this.createdItem);
    return this.createdItem;
  }

  resAction(number, dataRes, dataMessage, sendData) {
    this.number = number;
    dataRes.status(this.number).send({
      message: dataMessage,
      data: sendData,
    });
  }

  updateOneRes(arrayData, dataFormat, updateId) {
    this.updatedItem = dataFormat;
    this.updatedItem.id = updateId;
    arrayData.splice(updateId, 1, this.updatedItem);
    return this.updatedItem;
  }

  updateOne(dataOne, dataTwo, dataOneTest, dataTwoTest, dataReq, dataParams,
    arrayData, dataRes, dataFormat, updateMessage, createMessage,
    nameOne, nameTwo, dataTwoTestRes) {
    this.testInputs = this.testItem(dataReq.body[dataOne], dataReq.body[dataTwo],
      dataOneTest.test([dataReq.body[dataOne]]), dataTwoTest.test([dataReq.body[dataTwo]]));
    this.findUpdate = this.findOne(dataParams, arrayData);
    if (this.testInputs && this.findUpdate) {
      this.resAction(200, dataRes, updateMessage,
        this.updateOneRes(arrayData, dataFormat, this.findUpdate.id));
      return;
    }
    if (this.testInputs) {
      this.resAction(201, dataRes, createMessage, this.createOneRes(arrayData, dataFormat));
      return;
    }
    this.sendErr(400, this.processErr400(dataReq.body[dataOne], dataReq.body[dataTwo],
      nameOne, nameTwo, dataTwoTestRes), dataRes);
  }

  createOne(dataReq, dataOne, dataTwo, dataOneTest, dataTwoTest,
    arrayData, dataRes, dataFormat, createMessage,
    nameOne, nameTwo, dataTwoTestRes) {
    this.testInputs = this.testItem(dataReq.body[dataOne], dataReq.body[dataTwo],
      dataOneTest.test([dataReq.body[dataOne]]), dataTwoTest.test([dataReq.body[dataTwo]]));
    if (this.testInputs) {
      this.resAction(201, dataRes, createMessage, this.createOneRes(arrayData, dataFormat));
      return;
    }
    this.sendErr(400, this.processErr400(dataReq.body[dataOne], dataReq.body[dataTwo],
      nameOne, nameTwo, dataTwoTestRes), dataRes);
  }


  deleteOne(dataRes, arrayData, deleteId) {
    this.id = deleteId;
    arrayData.splice(this.id, 1);
    this.resAction(204, dataRes, false, false);
  }

  requiredNameErr(name) {
    this.message = {
      message: `Fail! ${name} is required`,
    };
    return this.message;
  }

  mustBeLettersErr(name) {
    this.message = {
      message: `Fail! ${name} must be letters`,
    };
    return this.message;
  }

  mustBeNumbersErr(price) {
    this.message = {
      message: `Fail! ${price} must be numbers`,
    };
    return this.message;
  }

  stringToArrayErr(name) {
    this.message = {
      message: `Fail! ${name} must be letters and seperated by spaces`,
    };
    return this.message;
  }

  sendErr(number, message, dataRes) {
    this.res = dataRes;
    this.res.status(number).send(message);
  }

  processErr400(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes) {
    if (!dataOne) {
      this.reqErr = this.requiredNameErr(nameOne);
      return this.reqErr;
    }
    if ((/^[A-Za-z]+$/).test(dataOne) === false) {
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
}

const services = new Services();

export default services;
