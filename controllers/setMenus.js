import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.setMenu = async (req, res) => {
  services.createOne(req.body.menuName, req.body.menuOptions, (/^[A-Za-z]+$/).test(req.body.menuName),
    (/^[A-Za-z\s]+$/).test(req.body.menuOptions), data.menuList, res, data.menuFormat(req.body),
    'Success! Menu created', 'Menu name', 'Menu options', services.stringToArrayErr('Menu options'));
};

export default bookAMeal.setMenu;
