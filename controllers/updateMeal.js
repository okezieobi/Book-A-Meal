import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  const testUpadateMeal = services.testItem(req.body.mealOptionName, req.body.mealOptionPrice, (/^[A-Za-z]+$/).test(req.body.mealOptionName), (/^[0-9]+$/).test(req.body.mealOptionPrice));
  const findMeal = services.findOne(req.params, data.mealOptionList);
  if (testUpadateMeal && findMeal) {
    services.resAction(200, res, 'Meal option found! Meal option successfully updated', services.updateOneRes(data.mealOptionList, data.mealFormat(req.body), findMeal.id));
    return;
  }
  if (testUpadateMeal) {
    services.resAction(201, res, 'Meal option not found! Meal option successfully created', services.createOneRes(data.mealOptionList, data.mealFormat(req.body)));
    return;
  }
  services.sendErr(400, services.processErr400(req.body.mealOptionName, req.body.mealOptionPrice, 'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price')), res);
};

export default bookAMeal.updateOneMealOption;
