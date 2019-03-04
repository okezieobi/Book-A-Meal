import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getAllOrders = async (req, res) => {
  services.getAll(res, 'Success! Order list retrieved', data.orders.orderList);
};

export default bookAMeal.getAllOrders;
