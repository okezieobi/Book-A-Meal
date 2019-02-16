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
      selected: false,
    };
    return this.mealOptionData;
  }
}

class Menu extends Meal {
  constructor() {
    super();
    this.menuList = [];
  }

  calculateOptionTotal(optionArray) {
    this.total = 0;
    optionArray.forEach((option) => {
      if (option.selected === true) {
        this.total += option.price;
      }
    });
    return this.total;
  }

  menuFormat(data) {
    this.menuData = {
      date: new Date(),
      id: data.menuId,
      name: data.menuName,
      mealOptions: super.mealOptionList,
      total: data.menuPrice + this.calculateOptionTotal(super.mealOptionList),
      selected: false,
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
      menu: super.menuList,
      total: super.calculateOptionTotal(super.menuList),
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
