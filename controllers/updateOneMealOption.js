import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  if (!req.body.mealOptionName || req.body.mealOptionName === '' || (/^[A-Za-z]+$/).test(req.body.mealOptionName) === false) {
    res.status(400).send({
      message: 'Fail! Meal option name is required OR must be letters',
    });
  } else if (!req.body.mealOptionPrice || req.body.mealOptionPrice === '' || (/^[0-9]+$/).test(req.body.mealOptionPrice) === false) {
    res.status(400).send({
      message: 'Fail! Meal option price is required OR must be numbers',
    });
  } else {
    const find = data.meals.mealOptionList.find(meal => meal.id === parseInt(req.params.id, 10));
    if (!find) {
      req.body.mealId = data.meals.mealOptionList.length;
      await data.meals.mealOptionList.push(await data.meals.mealFormat(req.body));
      res.status(201).send({
        message: 'Meal option not found! Meal option successfully created',
      });
    } else {
      req.body.mealId = find.id;
      await data.meals.mealOptionList.splice(find.id, 1, await data.meals.mealFormat(req.body));
      res.status(200).send({
        message: 'Meal option found! Meal option successfully updated',
      });
    }
  }
};

export default bookAMeal.updateOneMealOption;
