import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getMenu = async (req, res) => {
  services.getAll(res, 'Success! Menu list retrieved', data.menuList);
};

export default bookAMeal.getMenu;
