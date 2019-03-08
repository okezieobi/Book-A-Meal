class Services {
  async getAll(dataRes, dataMessage, array) {
    this.data = array;
    dataRes.status(200).send({
      message: dataMessage,
      data: this.data,
    });
  }

  findOne(dataParams, arrayData) {
    this.findItem = arrayData.find(item => item.id === parseInt(dataParams.id, 10));
    return this.findItem;
  }

  testItem(dataOne, dataTwo, dataOneTest, dataTwoTest) {
    this.testResult = (dataOne && dataTwo && dataOneTest && dataTwoTest) === true;
    return this.testResult;
  }

  async createOneRes(dataRes, arrayData, dataFormat, dataMessage) {
    this.createdItem = await dataFormat;
    this.createdItem.id = arrayData.length;
    await arrayData.push(this.createdItem);
    dataRes.status(201).send({
      message: dataMessage,
      data: this.createdItem,
    });
  }

  async updateOneRes(dataRes, arrayData, dataFormat, dataMessage, updateId) {
    this.updatedItem = await dataFormat;
    this.updatedItem.id = updateId;
    await arrayData.splice(updateId, 1, this.updatedItem);
    dataRes.status(200).send({
      message: dataMessage,
      data: this.updatedItem,
    });
  }

  async deleteOne(dataRes, arrayData, deleteId) {
    this.id = deleteId;
    await arrayData.splice(this.id, 1);
    dataRes.status(204).send({});
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

  sendErr400(message, dataRes) {
    this.error = dataRes.status(400).send(message);
    return this.error;
  }

  processErr(dataOne, dataTwo, nameOne, nameTwo, dataTwoTestRes, resData) {
    if (!dataOne) {
      this.sendErr400(this.requiredNameErr(nameOne), resData);
      return;
    }
    if ((/^[A-Za-z]+$/).test(dataOne) === false) {
      this.sendErr400(this.mustBeLettersErr(nameOne), resData);
      return;
    }
    if (!dataTwo) {
      this.sendErr400(this.requiredNameErr(nameTwo), resData);
      return;
    }
    this.sendErr400(dataTwoTestRes, resData);
  }
}

const services = new Services();

export default services;
