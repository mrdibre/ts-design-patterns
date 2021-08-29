import { IMealBuilder } from "../interfaces";
import { MealBox } from "./meal-box";
import { Bean, Beverage, Dessert, Meat, Rice } from "./meals";

class VeganDishBuilder implements IMealBuilder {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice("Arroz", 5);
    const bean = new Bean("Feijão", 10);

    this._meal.add(rice, bean);

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

export { VeganDishBuilder };
