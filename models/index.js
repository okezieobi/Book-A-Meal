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

  calculateTotal(optionOneArray, optionTwoArray) {
    this.total = 0;
    optionOneArray.foreEach((optionOne) => {
      optionTwoArray.foreEach((optionTwo) => {
        if (optionOne === optionTwo) {
          this.total += (optionOne.price || optionTwo.price);
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
      mealOptions: data.mealOptionList,
      total: data.menuPrice + this.calculateTotal(data.mealOptionList, super.mealOptionList),
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
      menu: data.menuList,
      total: super.calculateTotal(data.menuList, super.menuList),
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
