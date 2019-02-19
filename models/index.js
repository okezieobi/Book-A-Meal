class BookAMeal {}

class Meal extends BookAMeal {
  constructor() {
    super();
    this.mealOptionList = [];
  }

  mealFormat(data) {
    this.mealOptionData = {
      id: data.mealId,
      name: data.mealOptionName,
      price: data.mealOptionPrice,
    };
    return this.mealOptionData;
  }
}

class Menu extends Meal {
  constructor() {
    super();
    this.menuList = [];
  }

  totalPrice(optionOneArray, optionTwoArray) {
    this.total = 0;
    optionOneArray.forEach((optionOne) => {
      optionTwoArray.forEach((optionTwo) => {
        if (optionOne === optionTwo.name) {
          this.total += optionTwo.total;
        }
      });
    });
    return this.total;
  }

  menuFormat(data) {
    this.menuData = {
      date: new Date(),
      id: data.menuId,
      name: data.menuName,
      mealOptions: data.menuOptions.split(' '),
      total: this.totalPrice(data.menuOptions.split(' '), this.mealOptionList),
    };
    return this.menuData;
  }
}


class Order extends Menu {
  constructor() {
    super();
    this.orderList = [];
  }

  orderFormat(data) {
    this.orderData = {
      id: data.orderId,
      name: data.orderName,
      customer: data.customerName,
      menu: data.menuList.split(' '),
      total: this.totalPrice(data.menuList.split(' '), this.menuList),
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
