class Data {
  constructor() {
    this.mealOptions = [];
    this.dailyMenu = [{
      date: new Date(),
      menu_name: 'Name of menu',
      meal_options: this.mealOptions,
    }];
    this.orders = [{
      menu_name: 'Launch',
      customer_name: 'Frank',
      menu: this.dailyMenu,
    }];
  }
}

const data = new Data();

export default data;
