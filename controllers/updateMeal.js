import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  services.updateOne('mealOptionName', 'mealOptionPrice',
    /^[A-Za-z]+$/, /^[0-9]+$/, req, req.params, data.mealOptionList,
    res, data.mealFormat(req.body), 'Meal option found! Meal option successfully updated',
    'Meal option not found! Meal option successfully created',
    'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'));
};

export default bookAMeal.updateOneMealOption;
