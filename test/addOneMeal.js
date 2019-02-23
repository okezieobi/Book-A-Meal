import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';

import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/meals" to create a meal option with POST', () => {
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
  });

  it('should create a meal option at "/v1/meal" with post if all request data are valid', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Meal option created');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('name').equal(testData.mealOptionName);
    expect(response.body.data).to.have.property('price').equal(testData.mealOptionPrice);
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request does not exist', async () => {
    const testData = {
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request is an empty string', async () => {
    const testData = {
      mealOptionName: '',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name is required');
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option name in request are not letters', async () => {
    const testData = {
      mealOptionName: '0(}fieidfjd',
      mealOptionPrice: 10,
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option name must be letters');
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request does not exist', async () => {
    const testData = {
      mealOptionName: 'Dodo',
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request is an empty string', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: '',
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price is required');
  });

  it('should not create a meal option at "/v1/meals" with POST if meal option price in request is NOT a number', async () => {
    const testData = {
      mealOptionName: 'Dodo',
      mealOptionPrice: 'p0{f(jf]',
    };
    const response = await chai.request(app).post('/v1/meals').send(testData);
    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option price must be numbers');
  });
});
