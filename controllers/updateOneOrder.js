import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneOrder = async (req, res) => {
  try {
    const {
      customerName,
      menuList,
    } = req.body;
    const id = parseInt(req.params.id, 10);
    if (!customerName || customerName === '') {
      res.status(400).send({
        message: 'Fail! Customer name is required',
      });
    } else if ((/^[A-Za-z]+$/).test(customerName) === false) {
      res.status(400).send({
        message: 'Fail! Customer name must be letters',
      });
    } else if (!menuList || menuList === '') {
      res.status(400).send({
        message: 'Fail! Menu list is required',
      });
    } else if ((/^[A-Za-z\s]+$/).test(menuList) === false) {
      res.status(400).send({
        message: 'Fail! Menu list must be letters and seperated by spaces',
      });
    } else {
      const findOrder = data.orders.orderList.find(order => order.id === id);
      if (!findOrder) {
        req.body.orderId = data.orders.orderList.length;
        const createdOrder = await data.orders.orderFormat(req.body);
        await data.orders.orderList.push(createdOrder);
        res.status(201).send({
          message: 'Menu order not found, menu order successfully created',
          data: createdOrder,
        });
      } else {
        req.body.orderId = findOrder.id;
        const updatedOrder = await data.orders.orderFormat(req.body);
        await data.orders.orderList.splice(findOrder.id, 1, updatedOrder);
        res.status(200).send({
          message: 'Menu order found, menu order successfully updated',
          data: updatedOrder,
        });
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneOrder;
