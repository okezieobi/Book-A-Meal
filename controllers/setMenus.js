import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.setMenu = async (req, res) => {
  const testSetMenu = services.testItem(req.body.menuName, req.body.menuOptions, (/^[A-Za-z]+$/).test(req.body.menuName), (/^[A-Za-z\s]+$/).test(req.body.menuOptions));
  if (!testSetMenu) {
    services.sendErr(400, services.processErr400(req.body.menuName, req.body.menuOptions, 'Menu name', 'Menu options', services.stringToArrayErr('Menu options')), res);
    return;
  }
  services.resAction(201, res, 'Success! Menu created', services.createOneRes(data.menuList, data.menuFormat(req.body)));
};

export default bookAMeal.setMenu;
