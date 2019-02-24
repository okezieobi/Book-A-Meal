import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneOrder = async (req, res) => {
  if (!req.body.customerName || req.body.customerName === '' || (/^[A-Za-z]+$/).test(req.body.customerName) === false) {
    res.status(400).send({
      message: 'Fail! Customer name is required Or must be letters',
    });
  } else if (!req.body.menuList || req.body.menuList === '' || (/^[A-Za-z\s]+$/).test(req.body.menuList) === false) {
    res.status(400).send({
      message: 'Fail! Menu list is required Or must be letters and seperated by spaces',
    });
  } else {
    const find = data.orders.orderList.find(order => order.id === parseInt(req.params.id, 10));
    if (!find) {
      req.body.orderId = data.orders.orderList.length;
      await data.orders.orderList.push(await data.orders.orderFormat(req.body));
      res.status(201).send({
        message: 'Menu order not found, menu order successfully created',
      });
    } else {
      req.body.orderId = find.id;
      await data.orders.orderList.splice(find.id, 1, await data.orders.orderFormat(req.body));
      res.status(200).send({
        message: 'Menu order found, menu order successfully updated',
      });
    }
  }
};

export default bookAMeal.updateOneOrder;
