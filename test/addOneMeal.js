import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/meals" to create a meal option with POST', () => {
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });
  it('should create a meal option at "/api/v1/meals" with post if all request data are valid', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Meal option created');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('name').equal(testData.mealOptionName);
    expect(response.body.data).to.have.property('price').equal(testData.mealOptionPrice);
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option name in request does not exist', async () => {
    const testData = {
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option name in request is an empty string', async () => {
    const testData = {
      mealOptionName: '',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option name in request is undefined', async () => {
    const testData = {
      mealOptionName: undefined,
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option name in request is an null', async () => {
    const testData = {
      mealOptionName: null,
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option name in request are not letters', async () => {
    const testData = {
      mealOptionName: '0(}fieidfjd',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option price in request does not exist', async () => {
    const testData = {
      mealOptionName: 'Dodo',
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option price in request is an empty string', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option price in request is null', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: null,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option price in request is an undefined', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: undefined,
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/api/v1/meals" with POST if meal option price in request is NOT a number', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: 'p0{f(jf]',
    };
    const response = await chai.request(app).post('/api/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });
});
