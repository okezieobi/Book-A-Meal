import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.setMenu = async (req, res) => {
  try {
    const {
      menuName,
      menuOptions,
      menuPrice,
    } = req.body;
    if (!menuName || menuName === '') {
      res.status(400).send({
        message: 'Fail! Menu name is required',
      });
    } else if ((/^[A-Za-z]+$/).test(menuName) === false) {
      res.status(400).send({
        message: 'Fail! Menu name must be letters',
      });
    } else if (!menuPrice || menuPrice === '') {
      res.status(400).send({
        message: 'Fail! Menu price is required',
      });
    } else if ((/^[0-9]+$/).test(menuPrice) === false) {
      res.status(400).send({
        message: 'Fail! Menu price must be numbers',
      });
    } else if (!menuOptions) {
      res.status(400).send({
        message: 'Fail! Menu options are required',
      });
    } else if ((/^[A-Za-z\s]+$/).test(menuOptions) === false) {
      res.status(400).send({
        message: 'Fail Menu options must be spaced with only commas',
      });
    } else {
      req.body.menuId = data.meals.mealOptionList.length;
      const createdMenu = await data.menus.menuFormat(req.body);
      await data.menus.menuList.push(createdMenu);
      res.status(201).send({
        message: 'Success! Menu created',
        data: createdMenu,
      });
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.setMenu;
