class Logic {}
class Meals extends Logic {}
class Menu extends Meals {}
class Order extends Menu {}

const meals = new Meals();
const menu = new Menu();
const orders = new Order();
export default {
  meals,
  menu,
  orders,
};
