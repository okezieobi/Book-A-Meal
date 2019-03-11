import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.addOneMealOption = async (req, res) => {
  services.createOne(req.body.mealOptionName, req.body.mealOptionPrice,
    (/^[A-Za-z]+$/).test(req.body.mealOptionName),
    (/^[0-9]+$/).test(req.body.mealOptionPrice),
    data.mealOptionList, res, data.mealFormat(req.body), 'Success! Meal option created',
    'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'));
};

export default bookAMeal.addOneMealOption;
