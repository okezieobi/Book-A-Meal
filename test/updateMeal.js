import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/meals/:id" to update OR create a meal option with PUT', () => {
  let testId = 0;
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
    testId += dataSetup.testId;
  });

  it('should update a meal option at "/api/v1/meals/:id" with PUT if all request parameters are valid and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    const resData = response.body.data;
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(resData).to.have.property('id').equal(testId);
    expect(resData).to.has.property('name').equal(testDataTwo.mealOptionName);
    expect(resData).to.has.property('price').equal(testDataTwo.mealOptionPrice);
    expect(response.body).to.have.property('message').equal('Meal option found! Meal option successfully updated');
  });

  it('should ALSO update a meal option at "/api/v1/meals/:id" with PUT if all request parameters are valid and meal option does NOT exist', async () => {
    const wrongId = testId + 10;
    const testDataTwo = {
      mealOptionName: 'Rice',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    const resData = response.body.data;
    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(resData).to.have.property('id').equal(resData.id);
    expect(resData).to.has.property('name').equal(testDataTwo.mealOptionName);
    expect(resData).to.has.property('price').equal(testDataTwo.mealOptionPrice);
    expect(response.body).to.have.property('message').equal('Meal option not found! Meal option successfully created');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request does not exist and meal option exists', async () => {
    const testDataTwo = {
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request does not exist and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: '',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is undefined and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: undefined,
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is null and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: null,
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: '',
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is undefined and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: undefined,
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request is null and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: null,
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'p0r9]13[',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'p0r9]13[',
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request does not exist and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request does not exist and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request is null and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: null,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request is undefined and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: undefined,
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '0[d]e8f9fj](fg}',
    };
    const response = await chai.request(app).put(`/api/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });

  it('should NOT update a meal option at "/api/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '0[d]e8f9fj](fg}',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/api/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });
});
