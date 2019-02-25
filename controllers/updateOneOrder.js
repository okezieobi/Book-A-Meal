import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneOrder = async (req, res) => {
  try {
    if (!req.body.customerName || req.body.customerName === '') {
      res.status(400).send(services.orderErrOne);
    } else if ((/^[A-Za-z]+$/).test(req.body.customerName) === false) {
      res.status(400).send(services.orderErrTwo);
    } else if (!req.body.menuList || req.body.menuList === '') {
      res.status(400).send(services.orderErrThree);
    } else if ((/^[A-Za-z\s]+$/).test(req.body.menuList) === false) {
      res.status(400).send(services.orderErrFour);
    } else {
      const findOrder = services.findOrder(req.params);
      if (!findOrder) {
        req.body.orderId = data.orders.orderList.length;
        services.createOrders(req, res);
      } else {
        req.body.orderId = findOrder.id;
        services.updateOrders(req, res);
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneOrder;
