class BookAMeal {}

class Meal extends BookAMeal {
  constructor() {
    super();
    this.mealOptionList = [];
  }

  mealFormat(mealId, mealOptionName, mealOptionPrice) {
    this.mealOptionData = {
      id: mealId,
      name: mealOptionName,
      price: mealOptionPrice,
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

  menuFormat(menuId, menuName, menuPrice) {
    this.menuData = {
      date: new Date(),
      id: menuId,
      name: menuName,
      mealOptions: super.mealOptionList,
      total: menuPrice + this.calculateOptionTotal(super.mealOptionList),
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

  orderFormat(orderId, orderName, customerName) {
    this.orderData = {
      id: orderId,
      name: orderName,
      customer: customerName,
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
