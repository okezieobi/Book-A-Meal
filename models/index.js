class BookAMeal {
  constructor() {
    this.mealOptionList = [];
    this.menuList = [];
    this.orderList = [];
  }

  mealFormat(data) {
    this.mealOptionData = {
      id: data.mealId,
      name: data.mealOptionName,
      price: parseInt(data.mealOptionPrice, 10),
    };
    return this.mealOptionData;
  }

  totalPrice(optionOneArray, optionTwoArray) {
    this.total = 0;
    optionOneArray.forEach((optionOne) => {
      optionTwoArray.forEach((optionTwo) => {
        if (optionOne === optionTwo.name) {
          this.total += optionTwo.price;
          return;
        }
        if (optionOne === optionTwo.menuName) {
          this.total += optionTwo.total;
        }
      });
    });
    return this.total;
  }

  menuFormat(data) {
    if (data.menuOptions) {
      this.menuData = {
        date: new Date(),
        id: data.menuId,
        menuName: data.menuName,
        mealOptions: data.menuOptions.split(' '),
        total: this.totalPrice(data.menuOptions.split(' '), this.mealOptionList),
      };
    }
    return this.menuData;
  }

  orderFormat(data) {
    if (data.menuList) {
      this.orderData = {
        id: data.orderId,
        customer: data.customerName,
        menu: data.menuList.split(' '),
        total: this.totalPrice(data.menuList.split(' '), this.menuList),
      };
    }
    return this.orderData;
  }
}

const data = new BookAMeal();

export default data;
