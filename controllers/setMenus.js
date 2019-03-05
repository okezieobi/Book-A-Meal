import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.setMenu = async (req, res) => {
  const testSetMenu = services.testItem(req.body.menuName, req.body.menuOptions, (/^[A-Za-z]+$/).test(req.body.menuName), (/^[A-Za-z\s]+$/).test(req.body.menuOptions));
  if (!testSetMenu) {
    services.processErr(req.body.menuName, req.body.menuOptions, 'Menu name', 'Menu options', services.stringToArrayErr('Menu options'), res);
    return;
  }
  req.body.menuId = data.menus.menuList.length;
  services.createOne(res, data.menus.menuList, data.menus.menuFormat(req.body), 'Success! Menu created');
};

export default bookAMeal.setMenu;
