import data from '../models';
// @ts-ignore
import bookAMeal from './index';

bookAMeal.selectOneMeal = async (req, res) => {
  try {
    const {
      customerName,
      menuList,
    } = req.body;
    if (!customerName || customerName === '') {
      res.status(400).send({
        message: 'Fail! Customer name is required',
      });
    } else if ((/^[A-Za-z]+$/).test(customerName) === false) {
      res.status(400).send({
        message: 'Fail! Customer name must be letters with no spacing',
      });
    } else if (!menuList || menuList === '') {
      res.status(400).send({
        message: 'Fail! Menu options are required',
      });
    } else if ((/^[A-Za-z\s]+$/).test(menuList) === false) {
      res.status(400).send({
        message: 'Fail! Menu options must be letters and seperated by spaces',
      });
    } else {
      req.body.orderId = data.orders.orderList.length;
      const selectedMeal = await data.orders.orderFormat(req.body);
      await data.orders.orderList.push(selectedMeal);
      res.status(201).send({
        message: 'Success! Menu selected and order made',
        data: selectedMeal,
      });
    }
  } catch (err) {
    throw err;
  }
};

export default bookAMeal.selectOneMeal;
