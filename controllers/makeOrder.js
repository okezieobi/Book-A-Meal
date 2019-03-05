import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.selectOneMeal = async (req, res) => {
  const testMakeOrder = services.testItem(req.body.customerName, req.body.menuList, (/^[A-Za-z]+$/).test(req.body.customerName), (/^[A-Za-z\s]+$/).test(req.body.menuList));
  if (!testMakeOrder) {
    services.processErr(req.body.customerName, req.body.menuList, 'Customer name', 'Menu list', services.stringToArrayErr('Menu list'), res);
    return;
  }
  req.body.orderId = data.orders.orderList.length;
  services.createOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Success! Menu selected and order made');
};

export default bookAMeal.selectOneMeal;
