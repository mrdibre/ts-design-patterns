import { IMealComposite } from "../interfaces";

class MealBox implements IMealComposite {
  private readonly _children: IMealComposite[] = [];

  getPrice(): number {
    return this._children.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  add(...meal: IMealComposite[]): void {
    this._children.push(...meal);
  }
}

export { MealBox };
