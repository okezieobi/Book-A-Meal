import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  services.updateOne(req.body.mealOptionName, req.body.mealOptionPrice,
    (/^[A-Za-z]+$/).test(req.body.mealOptionName),
    (/^[0-9]+$/).test(req.body.mealOptionPrice), req.params, data.mealOptionList,
    res, data.mealFormat(req.body), 'Meal option found! Meal option successfully updated',
    'Meal option not found! Meal option successfully created',
    'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'));
};

export default bookAMeal.updateOneMealOption;
