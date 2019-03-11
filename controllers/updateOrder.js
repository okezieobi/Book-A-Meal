import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOrder = async (req, res) => {
  services.updateOne(req.body.customerName, req.body.menuList,
    (/^[A-Za-z]+$/).test(req.body.customerName), (/^[A-Za-z\s]+$/).test(req.body.menuList),
    req.params, data.orderList, res, data.orderFormat(req.body),
    'Menu order found, menu order successfully updated',
    'Menu order not found, menu order successfully created',
    'Customer name', 'Menu list', services.stringToArrayErr('Menu list'));
};

export default bookAMeal.updateOrder;
