import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/meals/:id" to delete a meals option with DELETE', () => {
  let testId = 0;
  before(async () => {
    const testDataOne = {
      id: data.meals.mealOptionList.length,
      name: 'Dodo',
      price: 100,
    };
    const testDataTwo = {
      id: data.meals.mealOptionList.length,
      name: 'Rice',
      price: 1000,
    };
    const testDataThree = {
      id: data.meals.mealOptionList.length,
      name: 'Beans',
      price: 10000,
    };

    const testDataList = [testDataOne, testDataTwo, testDataThree];
    await data.meals.mealOptionList.push(...testDataList);
    testId += testDataOne.id;
  });

  it('should delete a meal option at "/v1/meals/:id" with DELETE if meals option exists', async () => {
    const response = await chai.request(app).delete(`/v1/meals/${testId}`);
    expect(response).to.have.status(204);
    expect(response.body).to.be.an('object');
  });

  it('should NOT delete a meal option at "/v1/meals/:id" with DELETE if meals option does NOT exist', async () => {
    const wrongId = testId + 10;
    const response = await chai.request(app).delete(`/v1/meals/${wrongId}`);
    expect(response).to.have.status(404);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option not found');
  });
});
