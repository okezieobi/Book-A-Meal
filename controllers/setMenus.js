import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.setMenu = async (req, res) => {
  services.createOne(req, 'menuName', 'menuOptions', /^[A-Za-z]+$/, /^[A-Za-z\s]+$/,
    data.menuList, res, data.menuFormat(req.body), 'Success! Menu created',
    'Menu name', 'Menu options', services.stringToArrayErr('Menu options'));
};

export default bookAMeal.setMenu;
