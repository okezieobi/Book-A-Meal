import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  if ((req.body.mealOptionName && req.body.mealOptionPrice && (/^[A-Za-z]+$/).test(req.body.mealOptionName) && (/^[0-9]+$/).test(req.body.mealOptionPrice)) === true && (req.body.mealOptionName && req.body.mealOptionPrice) !== '') {
    const findMeal = services.findOne(req.params, data.meals.mealOptionList);
    if (findMeal) {
      services.updateOne(res, data.meals.mealOptionList, data.meals.mealFormat(req.body), 'Meal option found! Meal option successfully updated', findMeal.id);
      return;
    }
    services.createOne(res, data.meals.mealOptionList, data.meals.mealFormat(req.body), 'Meal option not found! Meal option successfully created', req.body.mealId);
    return;
  }
  services.processErr(req.body.mealOptionName, req.body.mealOptionPrice, 'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'), res);
};

export default bookAMeal.updateOneMealOption;
