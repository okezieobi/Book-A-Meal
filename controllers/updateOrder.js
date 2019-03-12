import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOrder = async (req, res) => {
  services.updateOne('customerName', 'menuList', /^[A-Za-z]+$/, /^[A-Za-z\s]+$/,
    req, req.params, data.orderList, res, data.orderFormat(req.body),
    'Menu order found, menu order successfully updated',
    'Menu order not found, menu order successfully created',
    'Customer name', 'Menu list', services.stringToArrayErr('Menu list'));
};

export default bookAMeal.updateOrder;
