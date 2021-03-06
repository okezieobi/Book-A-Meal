import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/menus" to set menus with POST', () => {
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });

  it('should set a menu at "/api/v1/menus" with post if all request data are valid', async () => {
    const testData = {
      menuName: 'Launch',
      menuOptions: 'Dodo Rice',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(201);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Menu created');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('menuName').equal(testData.menuName);
    expect(response.body.data).to.have.property('total');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu name in request does not exist', async () => {
    const testData = {
      menuOptions: 'Dodo Beans',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu name is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu name in request is an empty string', async () => {
    const testData = {
      menuName: '',
      menuOptions: 'Dodo Beans',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu name is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu name in request is undefined', async () => {
    const testData = {
      menuName: undefined,
      menuOptions: 'Dodo Beans',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu name is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu name in request is null', async () => {
    const testData = {
      menuName: null,
      menuOptions: 'Dodo Beans',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu name is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu name in request are not letters', async () => {
    const testData = {
      menuName: '}04[}(odyr',
      menuOptions: 'Dodo Beans',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu name must be letters');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu options in request does not exist', async () => {
    const testData = {
      menuName: 'Launch',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu options in request is an empty string', async () => {
    const testData = {
      menuName: 'Launch',
      menuOptions: '',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu options in request is null', async () => {
    const testData = {
      menuName: 'Launch',
      menuOptions: null,
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu options in request is undefined', async () => {
    const testData = {
      menuName: 'Launch',
      menuOptions: undefined,
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options is required');
  });

  it('should not create a menu at "/api/v1/menus" with POST if menu options in request are not letters', async () => {
    const testData = {
      menuName: 'Launch',
      menuOptions: '90{f]f9d()',
    };
    const response = await chai.request(app).post('/api/v1/menus').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu options must be letters and seperated by spaces');
  });
});
