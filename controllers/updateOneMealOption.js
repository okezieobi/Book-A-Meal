import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.updateOneMealOption = async (req, res) => {
  try {
    const {
      mealOptionName,
      mealOptionPrice,
    } = req.body;
    const id = parseInt(req.params.id, 10);
    if (!mealOptionName || mealOptionName === '') {
      res.status(400).send({
        message: 'Fail! meal option name is required',
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
      const findMealOption = data.meals.mealOptionList.find(mealOption => mealOption.id === id);
      if (!findMealOption) {
        req.body.mealId = data.meals.mealOptionList.length;
        const createdMealOption = await data.meals.mealFormat(req.body);
        await data.meals.mealOptionList.push(createdMealOption);
        res.status(201).send({
          message: 'Meal option not found! Meal option successfully created',
          data: createdMealOption,
        });
      } else {
        req.body.mealId = findMealOption.id;
        const updatedMealOption = await data.meals.mealFormat(req.body);
        await data.meals.mealOptionList.splice(findMealOption.id, 1, updatedMealOption);
        res.status(200).send({
          message: 'Meal option found! Meal option successfully updated',
          data: updatedMealOption,
        });
      }
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.updateOneMealOption;
