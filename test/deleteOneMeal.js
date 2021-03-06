import {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
} from './index';

chai.use(chaiHttp);

describe('Test endpoint at "/api/v1/meals/:id" to delete a meals option with DELETE', () => {
  let testId = 0;
  before(() => {
    dataSetup.meals();
    dataSetup.menus();
    dataSetup.orders();
    testId += dataSetup.testId;
  });

  it('should delete a meal option at "/api/v1/meals/:id" with DELETE if meals option exists', async () => {
    const response = await chai.request(app).delete(`/api/v1/meals/${testId}`);
    expect(response).to.have.status(204);
    expect(response.body).to.be.an('object');
  });

  it('should NOT delete a meal option at "/api/v1/meals/:id" with DELETE if meals option does NOT exist', async () => {
    const wrongId = testId + 10;
    const response = await chai.request(app).delete(`/api/v1/meals/${wrongId}`);
    expect(response).to.have.status(404);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').equal('Fail! Meal option not found');
  });
});
