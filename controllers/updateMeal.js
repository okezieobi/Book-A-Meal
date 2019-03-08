import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  const testUpadateMeal = services.testItem(req.body.mealOptionName, req.body.mealOptionPrice, (/^[A-Za-z]+$/).test(req.body.mealOptionName), (/^[0-9]+$/).test(req.body.mealOptionPrice));
  if (testUpadateMeal) {
    const findMeal = services.findOne(req.params, data.mealOptionList);
    if (findMeal) {
      services.updateOneRes(res, data.mealOptionList, data.mealFormat(req.body), 'Meal option found! Meal option successfully updated', findMeal.id);
      return;
    }
    services.createOneRes(res, data.mealOptionList, data.mealFormat(req.body), 'Meal option not found! Meal option successfully created');
    return;
  }
  services.processErr400(req.body.mealOptionName, req.body.mealOptionPrice, 'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'), res);
};

export default bookAMeal.updateOneMealOption;
