import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneOrder = async (req, res) => {
  try {
    if (!req.body.customerName || req.body.customerName === '') {
      res.status(400).send(services.requiredNameErr('Customer name'));
    } else if ((/^[A-Za-z]+$/).test(req.body.customerName) === false) {
      res.status(400).send(services.mustBeLettersErr('Customer name'));
    } else if (!req.body.menuList || req.body.menuList === '') {
      res.status(400).send(services.requiredNameErr('Menu list'));
    } else if ((/^[A-Za-z\s]+$/).test(req.body.menuList) === false) {
      res.status(400).send(services.stringToArrayErr('Menu list'));
    } else {
      const findOrder = services.findOne(req.params, data.orders.orderList);
      if (!findOrder) {
        req.body.orderId = data.orders.orderList.length;
        services.createOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order not found, menu order successfully created');
      } else {
        req.body.orderId = findOrder.id;
        services.updateOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order found, menu order successfully updated');
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneOrder;
