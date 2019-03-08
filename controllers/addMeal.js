import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.addOneMealOption = async (req, res) => {
  const testAddMeal = services.testItem(req.body.mealOptionName, req.body.mealOptionPrice, (/^[A-Za-z]+$/).test(req.body.mealOptionName), (/^[0-9]+$/).test(req.body.mealOptionPrice));
  if (!testAddMeal) {
    services.processErr400(req.body.mealOptionName, req.body.mealOptionPrice, 'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'), res);
    return;
  }
  services.resAction(201, res, 'Success! Meal option created', services.createOneRes(data.mealOptionList, data.mealFormat(req.body)));
};

export default bookAMeal.addOneMealOption;
