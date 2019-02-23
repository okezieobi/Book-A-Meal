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

    const testDataSeven = {
      orderId: data.orders.orderList.length,
      customerName: 'Okezie',
      menuList: 'Breakfast Lunch',
    };

    const testDataEight = {
      orderId: data.orders.orderList.length,
      customerName: 'Frank',
      menuList: 'Breakfast Dinner',
    };

    const testDataNine = {
      orderId: data.orders.orderList.length,
      customerName: 'Obiedere',
      menuList: 'Lunch Dinner',
    };

    const testDataList = [testDataOne, testDataTwo, testDataThree];
    await data.meals.mealOptionList.push(...testDataList);
    const addOne = await data.menus.menuFormat(testDataFour);
    const addTwo = await data.menus.menuFormat(testDataFive);
    const addThree = await data.menus.menuFormat(testDataSix);
    const testDataListTwo = [addOne, addTwo, addThree];
    await data.menus.menuList.push(...testDataListTwo);
    const addFour = await data.orders.orderFormat(testDataSeven);
    const addFive = await data.orders.orderFormat(testDataEight);
    const addSix = await data.orders.orderFormat(testDataNine);
    const testDataListThree = [addFour, addFive, addSix];
    await data.orders.orderList.push(...testDataListThree);
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
