import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/orders" to select meal option with POST', () => {
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });

  it('should select at least one menu option at "/v1/orders" with POST', async () => {
    const testData = {
      customerName: 'Frank',
      menuList: 'BreakFast Dinner',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(201);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Menu selected and order made');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('customer').equal(testData.customerName);
    expect(response.body.data).to.has.property('total');
    expect(response.body.data).to.have.property('menu');
  });

  it('should not select a menu option at "/v1/orders" with POST if customer name in request does not exist', async () => {
    const testData = {
      menuList: 'BreakFast Dinner',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not select a menu option at "/v1/orders" with POST if customer name in request is an empty string', async () => {
    const testData = {
      customerName: '',
      menuList: 'BreakFast Dinner',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not select a menu option at "/v1/orders" with POST if customer name in request are not letters', async () => {
    const testData = {
      customerName: '0or]f{(uu',
      menuList: 'BreakFast Dinner',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name must be letters with no spacing');
  });

  it('should not create a menu at "/v1/menus" with POST if menu options in request does not exist', async () => {
    const testData = {
      customerName: 'Frank',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options are required');
  });

  it('should not create a menu at "/v1/menus" with POST if menu options in request is an empty string', async () => {
    const testData = {
      customerName: 'Frank',
      menuList: '',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options are required');
  });

  it('should not create a menu at "/v1/menus" with POST if menu options in request ae not letters', async () => {
    const testData = {
      customerName: 'Frank',
      menuList: '0{0rir}t[(',
    };
    const response = await chai.request(app).post('/v1/orders').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options must be letters and seperated by spaces');
  });
});
