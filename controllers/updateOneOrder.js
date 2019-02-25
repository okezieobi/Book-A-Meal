import data from '../models';
import {
  orderServices,
} from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneOrder = async (req, res) => {
  try {
    if (!req.body.customerName || req.body.customerName === '') {
      res.status(400).send(orderServices.orderErrOne);
    } else if ((/^[A-Za-z]+$/).test(req.body.customerName) === false) {
      res.status(400).send(orderServices.orderErrTwo);
    } else if (!req.body.menuList || req.body.menuList === '') {
      res.status(400).send(orderServices.orderErrThree);
    } else if ((/^[A-Za-z\s]+$/).test(req.body.menuList) === false) {
      res.status(400).send(orderServices.orderErrFour);
    } else {
      const findOrder = orderServices.findOne(req.params, data.orders.orderList);
      if (!findOrder) {
        req.body.orderId = data.orders.orderList.length;
        orderServices.createOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order not found, menu order successfully created');
      } else {
        req.body.orderId = findOrder.id;
        orderServices.updateOne(res, data.orders.orderList, data.orders.orderFormat(req.body), 'Menu order found, menu order successfully updated');
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneOrder;
