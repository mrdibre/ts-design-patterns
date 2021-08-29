import { IMealBuilder } from "../interfaces";
import { MealBox } from "./meal-box";
import { Bean, Beverage, Dessert, Meat, Rice } from "./meals";

class DefaultDishBuilder implements IMealBuilder {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const bean = new Bean("Feijão", 10);
    const meat = new Meat("Carne", 20);

    this._meal.add(rice, bean, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage("Bebida", 7);

    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert("Sobremesa", 10);
    this._meal.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  reset(): this {
    this._meal = new MealBox();

    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}

export { DefaultDishBuilder };
