import {
  expect,
  chai,
  chaiHttp,
  app,
} from './index';
import data from '../models';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/orders/:id" to update or create a menu order', () => {
  let testOrderId = 0;
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
    testOrderId += addFive.id;
  });

  it('should update a menu order at "/v1/orders/:id" with PUT if all data in request are valid', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(200);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Menu order found, menu order successfully updated');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('customer').equal(testData.customerName);
    expect(response.body.data).to.has.property('total');
    expect(response.body.data).to.have.property('menu');
  });

  it('should also create a menu order at "/v1/orders/:id" with PUT if all data in request are valid but menu order does not exist', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(201);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Menu order not found, menu order successfully created');
    expect(response.body.data).to.have.property('id');
    expect(response.body.data).to.have.property('customer').equal(testData.customerName);
    expect(response.body.data).to.has.property('total');
    expect(response.body.data).to.have.property('menu');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name does not exist and menu order exists', async () => {
    const testData = {
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name and menu order do NOT exist', async () => {
    const testData = {
      menuList: 'Lunch Dinner',
    };

    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name is an empty string and menu order exists', async () => {
    const testData = {
      customerName: '',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name is an empty string and menu order does not exist', async () => {
    const testData = {
      customerName: '',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'oor](iuiro/{',
      menuList: 'Lunch Dinner',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name must be letters');
  });

  it('should not update amenu order at "/v1/orders" with PUT if customer name are not letters and menu order does NOT exist', async () => {
    const testData = {
      customerName: 'oor](iuiro/{',
      menuList: 'Lunch Dinner',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Customer name must be letters');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list does not exist and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list and menu order do not exist', async () => {
    const testData = {
      customerName: 'Okezie',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list is an empty string and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list is an empty string and menu order does not exist', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list is required');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '0r94d0[}(uui',
    };
    const response = await chai.request(app).put(`/v1/orders/${testOrderId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');
  });

  it('should not update amenu order at "/v1/orders" with PUT if menu list are not letters and menu order exists', async () => {
    const testData = {
      customerName: 'Okezie',
      menuList: '0r94d0[}(uui',
    };
    const wrongId = testOrderId + 10;
    const response = await chai.request(app).put(`/v1/orders/${wrongId}`).send(testData);
    expect(response).to.have.status(400);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Menu list must be letters and seperated by spaces');
  });
});
