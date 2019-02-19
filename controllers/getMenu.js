import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getMenu = async (req, res) => {
  try {
    const allMenus = data.menus.menuList;
    res.status(200).send({
      message: 'Success! Menu list retrieved',
      data: allMenus,
    });
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.getMenu;
