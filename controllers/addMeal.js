import data from '../models';
import services from '../services';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.addOneMealOption = async (req, res) => {
  services.createOne(req, 'mealOptionName', 'mealOptionPrice',
    /^[A-Za-z]+$/, /^[0-9]+$/, data.mealOptionList, res,
    data.mealFormat(req.body), 'Success! Meal option created',
    'Meal option name', 'Meal option price', services.mustBeNumbersErr('Meal option price'));
};

export default bookAMeal.addOneMealOption;
