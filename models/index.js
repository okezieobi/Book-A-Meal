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
      customer: data.customerName,
      menu: data.menuList.split(' '),
      total: this.totalPrice(data.menuList.split(' '), this.menuList),
    };
    return this.orderData;
  }
}

class Data extends Order {
  async meals() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataOne = {
      mealId: this.mealOptionList.length,
      mealOptionName: 'Dodo',
      mealOptionPrice: 100,
    };
    this.testDataTwo = {
      mealId: this.mealOptionList.length,
      mealOptionName: 'Rice',
      mealOptionPrice: 1000,
    };
    this.testDataThree = {
      mealId: this.mealOptionList.length,
      mealOptionName: 'Beans',
      mealOptionPrice: 10000,
    };

    this.addMealOne = await this.mealFormat(this.testDataOne);
    this.addMealTwo = await this.mealFormat(this.testDataTwo);
    this.addMealThree = await this.mealFormat(this.testDataThree);
    this.testDataList = [this.addMealOne, this.addMealTwo, this.addMealThree];
    await this.mealOptionList.push(...this.testDataList);
  }

  async menus() {
    this.testDataFour = {
      menuId: this.menuList.length,
      menuName: 'Launch',
      menuOptions: 'Rice Dodo',
    };
    this.testDataFive = {
      menuId: this.menuList.length,
      menuName: 'Dinner',
      menuOptions: 'Rice Beans',
    };
    this.testDataSix = {
      menuId: this.menuList.length,
      menuName: 'Breakfast',
      menuOptions: 'Beans Dodo',
    };

    this.addOne = await this.menuFormat(this.testDataFour);
    this.addTwo = await this.menuFormat(this.testDataFive);
    this.addThree = await this.menuFormat(this.testDataSix);
    this.testDataListTwo = [this.addOne, this.addTwo, this.addThree];
    await this.menuList.push(...this.testDataListTwo);
  }

  async orders() {
    this.testDataSeven = {
      orderId: this.orderList.length,
      customerName: 'Okezie',
      menuList: 'Breakfast Lunch',
    };
    this.testDataEight = {
      orderId: this.orderList.length,
      customerName: 'Frank',
      menuList: 'Breakfast Dinner',
    };
    this.testDataNine = {
      orderId: this.orderList.length,
      customerName: 'Obiedere',
      menuList: 'Lunch Dinner',
    };

    this.addFour = await this.orderFormat(this.testDataSeven);
    this.addFive = await this.orderFormat(this.testDataEight);
    this.addSix = await this.orderFormat(this.testDataNine);
    this.testDataListThree = [this.addFour, this.addFive, this.addSix];
    await this.orderList.push(...this.testDataListThree);
  }
}

const meals = new Meal();
const menus = new Menu();
const orders = new Order();
const testData = new Data();

export default {
  meals,
  menus,
  orders,
  testData,
};
