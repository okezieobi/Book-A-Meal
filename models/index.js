class BookAMeal {}

class Meal extends BookAMeal {
  constructor() {
    super();
    this.mealOptionList = [{
      id: 0,
      name: 'Dodo',
      price: 100,
    }];
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


  calculateTotal(optionOneArray, optionTwoArray) {
    this.total = 0;
    optionOneArray.forEach((optionOne) => {
      optionTwoArray.forEach((optionTwo) => {
        if (optionOne === optionTwo.name) {
          this.total += optionTwo.price;
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
      total: data.menuPrice + this.calculateTotal(data.menuOptions.split(' '), this.mealOptionList),
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
      total: this.calculateTotal(data.menuList.split(' '), this.menuList),
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
