import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.getAllMealOptions = async (req, res) => {
  services.getAll(res, 'Success! Meal options retrieved', data.meals.mealOptionList);
};

export default bookAMeal.getAllMealOptions;
