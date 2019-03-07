import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';


chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/menus" to get all menus with GET', () => {
  before(async () => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });

  it('should get all menus at "/api/v1/menus" with GET', async () => {
    const response = await chai.request(app).get('/api/v1/menus');
    const randomElement = response.body.data[Math.floor(Math.random() * response.body.data.length)];
    expect(response).to.have.status(200);
    expect(response).to.be.an('object');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('message').equal('Success! Menu list retrieved');
    expect(randomElement).to.have.property('id');
    expect(randomElement).to.have.property('menuName');
    expect(randomElement).to.have.property('total');
    expect(randomElement).to.have.property('mealOptions');
    expect(randomElement).to.have.property('date');
  });
});
