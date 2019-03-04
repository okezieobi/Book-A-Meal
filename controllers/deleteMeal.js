import data from '../models';
import services from '../services';
// @ts-ignore
import bookAmeal from './index';

bookAmeal.deleteOneMealOption = async (req, res) => {
  const findMeal = services.findOne(req.params, data.meals.mealOptionList);
  if (findMeal) {
    services.deleteOne(res, data.meals.mealOptionList, findMeal.id);
    return;
  }
  res.status(404).send({
    message: 'Fail! Meal option not found',
  });
};

export default bookAmeal.deleteOneMealOption;
