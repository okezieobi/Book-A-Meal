import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/meals" wih GET to retrieve all meal options', () => {
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
  });

  it('should get all meal options at "/v1/meals" with GET', async () => {
    const response = await chai.request(app).get('/v1/meals');
    const randomElement = response.body.data[Math.floor(Math.random() * response.body.data.length)];
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Meal options retrieved');
    expect(randomElement).to.have.property('id');
    expect(randomElement).to.have.property('name');
    expect(randomElement).to.have.property('price');
  });
});
