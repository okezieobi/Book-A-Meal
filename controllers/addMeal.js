import data from '../models';
// @ts-ignore
import logic from './index';

logic.addOneMealOption = async (req, res) => {
  try {
    const {
      mealOptionName,
      mealOptionPrice,
    } = req.body;
    if (!mealOptionName || mealOptionName === '') {
      res.status(400).send({
        message: 'Fail! Meal option name is required',
      });
    } else if ((/^[A-Za-z]+$/).test(mealOptionName) === false) {
      res.status(400).send({
        message: 'Fail! Meal option name must be letters',
      });
    } else if (!mealOptionPrice || mealOptionPrice === '') {
      res.status(400).send({
        message: 'Fail! Meal option price is required',
      });
    } else if ((/^[0-9]+$/).test(mealOptionPrice) === false) {
      res.status(400).send({
        message: 'Fail! Meal option price must be numbers',
      });
    } else {
      req.body.mealId = data.meals.mealOptionList.length;
      const createdMealOption = await data.meals.mealFormat(req.body);
      await data.meals.mealOptionList.push(createdMealOption);
      res.status(201).send({
        message: 'Success! Meal option created',
        data: createdMealOption,
      });
    }
  } catch (err) {
    throw err;
  }
};

export default logic.addOneMealOption;
