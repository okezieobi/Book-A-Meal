import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/v1/orders" to get all orders with GET', () => {
  before(async () => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });

  it('should get all orders at "/v1/orders" with GET', async () => {
    const response = await chai.request(app).get('/v1/orders');
    const randomRes = response.body.data[Math.floor(Math.random() * response.body.data.length)];
    expect(response).to.have.status(200);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Order list retrieved');
    expect(randomRes).to.have.property('id');
    expect(randomRes).to.have.property('customer');
    expect(randomRes).to.have.property('menu');
    expect(randomRes).to.have.property('total');
  });
});
