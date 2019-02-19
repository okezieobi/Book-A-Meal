import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/menus" to get all menus with GET', () => {
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

    const testDataFour = {
      menuId: data.menus.menuList.length,
      menuName: 'Launch',
      menuOptions: 'Rice Dodo',
    };

    const testDataFive = {
      menuId: data.menus.menuList.length,
      menuName: 'Dinner',
      menuOptions: 'Rice Beans',
    };
    const testDataSix = {
      menuId: data.menus.menuList.length,
      menuName: 'Breakfast',
      menuOptions: 'Beans Dodo',
    };

    const testDataList = [testDataOne, testDataTwo, testDataThree];
    await data.meals.mealOptionList.push(...testDataList);
    const addOne = await data.menus.menuFormat(testDataFour);
    const addTwo = await data.menus.menuFormat(testDataFive);
    const addThree = await data.menus.menuFormat(testDataSix);
    const testDataListTwo = [addOne, addTwo, addThree];
    await data.menus.menuList.push(...testDataListTwo);
  });

  it('should get all menus at "/v1/menus" with GET', async () => {
    const response = await chai.request(app).get('/v1/menus');
    const randomElement = response.body.data[Math.floor(Math.random() * response.body.data.length)];
    expect(response).to.have.status(200);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Menu list retrieved');
    expect(randomElement).to.have.property('id');
    expect(randomElement).to.have.property('name');
    expect(randomElement).to.have.property('total');
    expect(randomElement).to.have.property('mealOptions');
    expect(randomElement).to.have.property('date');
  });
});
