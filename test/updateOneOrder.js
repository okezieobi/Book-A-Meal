import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';


chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/orders/:id" to update or create a menu order', () => {
  let testOrderId = 0;
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
    testOrderId += dataSetup.secondTestId;
  });

  it('should update a menu order at "/api/v1/orders/:id" with PUT if all data in request are valid', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(200);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Menu order found, menu order successfully updated');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('customer').equal(testData.customerName);
    expect(response.body.data).to.has.property('total');
    expect(response.body.data).to.have.property('menu');
  });

  it('should also create a menu order at "/api/v1/orders/:id" with PUT if all data in request are valid but menu order does not exist', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(201);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Menu order not found, menu order successfully created');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('customer').equal(testData.customerName);
    expect(response.body.data).to.has.property('total');
    expect(response.body.data).to.have.property('menu');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name does not exist and menu order exists', async () => {
    const testData = {
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name and menu order do NOT exist', async () => {
    const testData = {
      menuList: 'Lunch Dinner',
    };

    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is an empty string and menu order exists', async () => {
    const testData = {
      customerName: '',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is undefined and menu order exists', async () => {
    const testData = {
      customerName: undefined,
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is null and menu order exists', async () => {
    const testData = {
      customerName: null,
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name is an empty string and menu order does not exist', async () => {
    const testData = {
      customerName: '',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'oor](iuiro/{',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name must be letters');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if customer name are not letters and menu order does NOT exist', async () => {
    const testData = {
      customerName: 'oor](iuiro/{',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name must be letters');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list does not exist and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list and menu order do not exist', async () => {
    const testData = {
      customerName: 'Okezie',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is an empty string and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is null and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: null,
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is undefined and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: undefined,
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list is an empty string and menu order does not exist', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '0r94d0[}(uui',
    };
    const response = await chai.request(app).put(`/api/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');
  });

  it('should not update a menu order at "/api/v1/orders" with PUT if menu list are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '0r94d0[}(uui',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/api/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');
  });
});
