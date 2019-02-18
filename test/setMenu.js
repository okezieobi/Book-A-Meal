import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/menus" to set menus with POST', () => {
  before(async () => {
    const testDataOne = {
      id: 0,
      name: 'Dodo',
      price: 100,
    };
    await data.meals.mealOptionList.push(testDataOne);
  });


  it('should set a menu at "/v1/menus" with post if all request data are valid and has at least one matching menu option', async () => {
    const testData = {
      menuName: 'Rice',
      menuPrice: 100,
      menuOptions: 'Dodo Fish',
    };
    const response = await chai.request(app).post('/v1/menus').send(testData);
    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('name').equal(testData.menuName);
    expect(response.body.data).to.have.property('total').greaterThan(testData.menuPrice);
    expect(response.body).to.have.property('message').equal('Success! Menu created');
  });
});
