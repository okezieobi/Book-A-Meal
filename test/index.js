/* eslint-disable import/first */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
// @ts-nocheck

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
      mealId: data.meals.mealOptionList.length,
      mealOptionName: 'Dodo',
      mealOptionPrice: 100,
    };
    this.testDataTwo = {
      mealId: data.meals.mealOptionList.length,
      mealOptionName: 'Rice',
      mealOptionPrice: 1000,
    };
    this.testDataThree = {
      mealId: data.meals.mealOptionList.length,
      mealOptionName: 'Beans',
      mealOptionPrice: 10000,
    };

    this.addMealOne = await data.meals.mealFormat(this.testDataOne);
    this.addMealTwo = await data.meals.mealFormat(this.testDataTwo);
    this.addMealThree = await data.meals.mealFormat(this.testDataThree);
    this.testDataList = [this.addMealOne, this.addMealTwo, this.addMealThree];
    await data.meals.mealOptionList.push(...this.testDataList);
    this.testId += this.addMealOne.id;
    this.secondTestId += this.addMealTwo.id;
    this.thirdTestId += this.addMealThree.id;
  }

  async menus() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataFour = {
      menuId: data.menus.menuList.length,
      menuName: 'Launch',
      menuOptions: 'Rice Dodo',
    };
    this.testDataFive = {
      menuId: data.menus.menuList.length,
      menuName: 'Dinner',
      menuOptions: 'Rice Beans',
    };
    this.testDataSix = {
      menuId: data.menus.menuList.length,
      menuName: 'Breakfast',
      menuOptions: 'Beans Dodo',
    };

    this.addOne = await data.menus.menuFormat(this.testDataFour);
    this.addTwo = await data.menus.menuFormat(this.testDataFive);
    this.addThree = await data.menus.menuFormat(this.testDataSix);
    this.testDataListTwo = [this.addOne, this.addTwo, this.addThree];
    await data.menus.menuList.push(...this.testDataListTwo);
    this.testId += this.addOne.id;
    this.secondTestId += this.addTwo.id;
    this.thirdTestId += this.addThree.id;
  }

  async orders() {
    this.testId = 0;
    this.secondTestId = 0;
    this.thirdTestId = 0;

    this.testDataSeven = {
      orderId: data.orders.orderList.length,
      customerName: 'Okezie',
      menuList: 'Breakfast Lunch',
    };
    this.testDataEight = {
      orderId: data.orders.orderList.length,
      customerName: 'Frank',
      menuList: 'Breakfast Dinner',
    };
    this.testDataNine = {
      orderId: data.orders.orderList.length,
      customerName: 'Obiedere',
      menuList: 'Lunch Dinner',
    };

    this.addFour = await data.orders.orderFormat(this.testDataSeven);
    this.addFive = await data.orders.orderFormat(this.testDataEight);
    this.addSix = await data.orders.orderFormat(this.testDataNine);
    this.testDataListThree = [this.addFour, this.addFive, this.addSix];
    await data.orders.orderList.push(...this.testDataListThree);
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
