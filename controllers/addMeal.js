import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.addOneMealOption = async (req, res) => {
  const testMeal = (req.body.mealOptionName && req.body.mealOPtionPrice && (/^[A-Za-z]+$/).test(req.body.mealOptionName) && (/^[0-9]+$/).test(req.body.mealOptionPrice)) && (req.body.mealOptionName && req.body.mealOPtionPrice) !== '';
  if (testMeal) {
    req.body.mealId = data.meals.mealOptionList.length;
    services.createOne(res, data.meals.mealOptionList, data.meals.mealFormat(req.body), 'Success! Meal option created');
  }
};

export default bookAMeal.addOneMealOption;
