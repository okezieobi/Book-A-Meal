import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getAllOrders = async (req, res) => {
  const allOrders = data.orders.orderList;
  res.status(200).send({
    message: 'Success! Order list retrieved',
    data: allOrders,
  });
};

export default bookAMeal.getAllOrders;
