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

  async createOne(dataRes, arrayData, dataFormat, dataMessage) {
    this.createdItem = await dataFormat;
    await arrayData.push(this.createdItem);
    dataRes.status(201).send({
      message: dataMessage,
      data: this.createdItem,
    });
  }

  async updateOne(dataRes, arrayData, dataFormat, dataMessage, updateId) {
    this.updatedItem = await dataFormat;
    await arrayData.splice(updateId, 1, this.updatedItem);
    dataRes.status(200).send({
      message: dataMessage,
      data: this.updatedItem,
    });
  }

  async deleteOne(dataRes, arrayData, deleteId) {
    this.id = deleteId;
    await arrayData.splice(deleteId, 1);
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

  mustBeNummbersErr(price) {
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
}

const services = new Services();

export default services;
