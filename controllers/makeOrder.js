import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.selectOneMeal = async (req, res) => {
  const testMakeOrder = services.testItem(req.body.customerName, req.body.menuList, (/^[A-Za-z]+$/).test(req.body.customerName), (/^[A-Za-z\s]+$/).test(req.body.menuList));
  if (!testMakeOrder) {
    services.processErr400(req.body.customerName, req.body.menuList, 'Customer name', 'Menu list', services.stringToArrayErr('Menu list'), res);
    return;
  }
  services.resAction(201, res, 'Success! Menu selected and order made', services.createOneRes(data.orderList, data.orderFormat(req.body)));
};

export default bookAMeal.selectOneMeal;
