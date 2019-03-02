import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOrder = async (req, res) => {
  const testOrder = (req.body.customerName && req.body.menuList && (/^[A-Za-z]+$/).test(req.body.customerName) && (/^[A-Za-z\s]+$/).test(req.body.menuList)) && (req.body.customerName && req.body.menuList) !== '';
  if (testOrder) {
    const findOrder = services.findOne(req.params, data.orders.orderList);
    if (findOrder) {
      req.body.orderId = findOrder.id;
      services.updateOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order found, menu order successfully updated', findOrder.id);
      return;
    }
    req.body.orderId = data.orders.orderList.length;
    services.createOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order not found, menu order successfully created');
    return;
  }
  services.processErr(req.body.customerName, req.body.menuList, 'Customer name', 'Menu list', services.stringToArrayErr('Menu list'), res);
};

export default bookAMeal.updateOrder;
