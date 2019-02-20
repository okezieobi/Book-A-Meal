import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/meals/:id" to update OR create a meal option with PUT', () => {
  let testId = 0;

  before(async () => {
    const testDataOne = {
      id: 0,
      name: 'Dodo',
      price: 100,
    };
    await data.meals.mealOptionList.push(testDataOne);
    testId += testDataOne.id;
  });

  it('should update a meal option at "/v1/meals/:id" with PUT if all request parameters are valid and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    const resData = response.body.data;
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Meal option found! Meal option successfully updated');
    expect(resData).to.have.property('id').equal(testId);
    expect(resData).to.has.property('name').equal(testDataTwo.mealOptionName);
    expect(resData).to.has.property('price').equal(testDataTwo.mealOptionPrice);
  });

  it('should ALSO update a meal option at "/v1/meals/:id" with PUT if all request parameters are valid and meal option does NOT exist', async () => {
    const wrongId = testId + 10;
    const testDataTwo = {
      mealOptionName: 'Rice',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    const resData = response.body.data;
    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Meal option not found! Meal option successfully created');
    expect(resData).to.have.property('id').equal(resData.id);
    expect(resData).to.has.property('name').equal(testDataTwo.mealOptionName);
    expect(resData).to.has.property('price').equal(testDataTwo.mealOptionPrice);
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request does not exist and meal option exists', async () => {
    const testDataTwo = {
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! meal option name is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request does not exist and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! meal option name is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: '',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! meal option name is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request is an empty string and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: '',
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! meal option name is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'p0r9]13[',
      mealOptionPrice: 100,
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option name in request are NOT letters and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'p0r9]13[',
      mealOptionPrice: 100,
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request does not exist and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request does not exist and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Rice',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request is an empty string and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option exists', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '0[d]e8f9fj](fg}',
    };
    const response = await chai.request(app).put(`/v1/meals/${testId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });

  it('should NOT update a meal option at "/v1/meals/:id" with PUT if meal option price in request are NOT numbers and meal option does NOT exist', async () => {
    const testDataTwo = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '0[d]e8f9fj](fg}',
    };
    const wrongId = testId + 10;
    const response = await chai.request(app).put(`/v1/meals/${wrongId}`).send(testDataTwo);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });
});
