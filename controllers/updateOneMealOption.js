import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  try {
    const {
      mealOptionName,
      mealOptionPrice,
    } = req.body;
    const id = parseInt(req.params.mealId, 10);
    if (!mealOptionName || mealOptionName === '') {
      res.status(400).send({
        message: 'Fail! meal option name is required',
      });
    } else if (!mealOptionPrice || mealOptionPrice === '') {
      res.status(400).send({
        message: 'Fail! Meal option price is required',
      });
    } else {
      const findMealOption = data.meals.mealOptionList.fill(mealOption => mealOption.id === id);
      if (!findMealOption) {
        data.meals.mealOptionData.price = data.meals.mealOptionList.length;
        const newMealOption = await data.meals.mealFormat(req.body);
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneMealOption;
