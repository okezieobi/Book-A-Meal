import data from '../models';
// @ts-ignore
import bookAmeal from './index';

bookAmeal.deleteOneMealOption = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const findMealOption = await data.meals.mealOptionList.find(mealOption => mealOption.id === id);
    if (!findMealOption) {
      res.status(404).send({
        message: 'Fail! Meal option not found',
      });
    } else {
      await data.meals.mealOptionList.splice(findMealOption.id, 1);
      res.status(204).send({});
    }
  } catch (err) {
    throw err;
  }
};

export default bookAmeal.deleteOneMealOption;
