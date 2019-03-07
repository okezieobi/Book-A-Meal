import chai, {
  expect,
} from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

import data from '../models';

class Data {
  async meals() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataOne = {
      mealId: data.mealOptionList.length,
      mealOptionName: 'Dodo',
      mealOptionPrice: 100,
    };
    this.testDataTwo = {
      mealId: data.mealOptionList.length,
      mealOptionName: 'Rice',
      mealOptionPrice: 1000,
    };
    this.testDataThree = {
      mealId: data.mealOptionList.length,
      mealOptionName: 'Beans',
      mealOptionPrice: 10000,
    };

    this.addMealOne = await data.mealFormat(this.testDataOne);
    this.addMealTwo = await data.mealFormat(this.testDataTwo);
    this.addMealThree = await data.mealFormat(this.testDataThree);
    this.testDataList = [this.addMealOne, this.addMealTwo, this.addMealThree];
    await data.mealOptionList.push(...this.testDataList);
    this.testId += this.addMealOne.id;
    this.secondTestId += this.addMealTwo.id;
    this.thirdTestId += this.addMealThree.id;
  }

  async menus() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataFour = {
      menuId: data.menuList.length,
      menuName: 'Launch',
      menuOptions: 'Rice Dodo',
    };
    this.testDataFive = {
      menuId: data.menuList.length,
      menuName: 'Dinner',
      menuOptions: 'Rice Beans',
    };
    this.testDataSix = {
      menuId: data.menuList.length,
      menuName: 'Breakfast',
      menuOptions: 'Beans Dodo',
    };

    this.addOne = await data.menuFormat(this.testDataFour);
    this.addTwo = await data.menuFormat(this.testDataFive);
    this.addThree = await data.menuFormat(this.testDataSix);
    this.testDataListTwo = [this.addOne, this.addTwo, this.addThree];
    await data.menuList.push(...this.testDataListTwo);
    this.testId += this.addOne.id;
    this.secondTestId += this.addTwo.id;
    this.thirdTestId += this.addThree.id;
  }

  async orders() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataSeven = {
      orderId: data.orderList.length,
      customerName: 'Okezie',
      menuList: 'Breakfast Lunch',
    };
    this.testDataEight = {
      orderId: data.orderList.length,
      customerName: 'Frank',
      menuList: 'Breakfast Dinner',
    };
    this.testDataNine = {
      orderId: data.orderList.length,
      customerName: 'Obiedere',
      menuList: 'Lunch Dinner',
    };

    this.addFour = await data.orderFormat(this.testDataSeven);
    this.addFive = await data.orderFormat(this.testDataEight);
    this.addSix = await data.orderFormat(this.testDataNine);
    this.testDataListThree = [this.addFour, this.addFive, this.addSix];
    await data.orderList.push(...this.testDataListThree);
    this.testId += this.addFour.id;
    this.secondTestId += this.addFive.id;
    this.thirdTestId += this.addSix.id;
  }
}

const dataSetup = new Data();

export {
  expect,
  chai,
  chaiHttp,
  app,
  dataSetup,
};
