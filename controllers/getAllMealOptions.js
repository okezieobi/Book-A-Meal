import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getAllMealOptions = async (req, res) => {
  try {
    const allMealOptions = data.meals.mealOptionList;
    res.status(200).send({
      message: 'Success! Meal options retrieved',
      data: allMealOptions,
    });
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.getAllMealOptions;
