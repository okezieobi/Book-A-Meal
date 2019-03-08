import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOrder = async (req, res) => {
  const testUpdateOrder = services.testItem(req.body.customerName, req.body.menuList, (/^[A-Za-z]+$/).test(req.body.customerName), (/^[A-Za-z\s]+$/).test(req.body.menuList));
  if (testUpdateOrder) {
    const findOrder = services.findOne(req.params, data.orderList);
    if (findOrder) {
      services.resAction(200, res, 'Menu order found, menu order successfully updated', services.updateOneRes(data.orderList, data.orderFormat(req.body), findOrder.id));
      return;
    }
    services.resAction(201, res, 'Menu order not found, menu order successfully created', services.createOneRes(data.orderList, data.orderFormat(req.body)));
    return;
  }
  services.processErr400(req.body.customerName, req.body.menuList, 'Customer name', 'Menu list', services.stringToArrayErr('Menu list'), res);
};

export default bookAMeal.updateOrder;
