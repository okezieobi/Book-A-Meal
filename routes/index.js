import addOneMealRouter from './addMeal';
import deleteOneMealRouter from './deleteMeal';
import getAllMealsRouter from './getMeals';
import updateOneMealRouter from './updateMeal';
import setMenuRouter from './setMenus';
import getMenuRouter from './getMenus';
import getAllOrdersRouter from './getOrders';
import makeOrder from './makeOrder';
import updateOneOrderRouter from './updateOrder';

const versionNumber = '/v1';

export default (app) => {
  app.use(versionNumber, addOneMealRouter);
  app.use(versionNumber, deleteOneMealRouter);
  app.use(versionNumber, getAllMealsRouter);
  app.use(versionNumber, updateOneMealRouter);
  app.use(versionNumber, setMenuRouter);
  app.use(versionNumber, getMenuRouter);
  app.use(versionNumber, getAllOrdersRouter);
  app.use(versionNumber, makeOrder);
  app.use(versionNumber, updateOneOrderRouter);
};
