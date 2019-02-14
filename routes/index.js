import addOneMealRouter from './addOneMealOption';
import deleteOneMealRouter from './deleteOneMealOption';
import getAllMealsRouter from './getAllMealOptions';
import updateOneMealRouter from './updateOneMealOption';
import setMenuRouer from './setMenu';
import getMenuRouter from './getMenu';
import getAllOrdersRouter from './getAllOrders';
import selectOneMeal from './selectMenuOption';
import updateOneOrderRouter from './updateOneOrder';

export default (app) => {
  app.use('/v1', addOneMealRouter);
  app.use('/v1', deleteOneMealRouter);
  app.use('/v1', getAllMealsRouter);
  app.use('/v1', updateOneMealRouter);
  app.use('/v1', setMenuRouer);
  app.use('/v1', getMenuRouter);
  app.use('/v1', getAllOrdersRouter);
  app.use('/v1', selectOneMeal);
  app.use('/v1', updateOneOrderRouter);
};
