import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/meals" wih GET to retrieve all meal options', () => {
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
  });

  it('should get all meal options at "/api/v1/meals" with GET', async () => {
    const response = await chai.request(app).get('/api/v1/meals');
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
