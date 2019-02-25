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
      const findOrder = orderServices.findOrder(req.params);
      if (!findOrder) {
        req.body.orderId = data.orders.orderList.length;
        orderServices.createOrder(req, res);
      } else {
        req.body.orderId = findOrder.id;
        orderServices.updateOrder(req, res);
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneOrder;
