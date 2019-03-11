import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.selectOneMeal = async (req, res) => {
  services.createOne(req.body.customerName, req.body.menuList,
    (/^[A-Za-z]+$/).test(req.body.customerName), (/^[A-Za-z\s]+$/).test(req.body.menuList),
    data.orderList, res, data.orderFormat(req.body), 'Success! Menu selected and order made',
    'Customer name', 'Menu list', services.stringToArrayErr('Menu list'));
};

export default bookAMeal.selectOneMeal;
