class BookAMeal {}

class Meal extends BookAMeal {
  constructor(mealName, mealPrice) {
    super();
    this.optionList = [];
    this.optionFormat = {
      name: mealName,
      price: mealPrice,
    };
  }
}

class Menu extends Meal {
  constructor(menuName, menuTotal) {
    super();
    this.menuList = [];
    this.menuFormat = {
      date: new Date(),
      name: menuName,
      options: super.optionList,
      total: menuTotal,
    };
  }
}

class Order extends Menu {
  constructor(orderName, customerName, orderTotal) {
    super();
    this.orderList = [];
    this.orderFormat = {
      name: orderName,
      customer_name: customerName,
      menu: super.menuList,
      total: orderTotal,
    };
  }
}

const meals = new Meal();
const menus = new Menu();
const orders = new Order();

export default {
  meals,
  menus,
  orders,
};
