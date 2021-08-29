import { IMealComposite } from "../interfaces";

abstract class AbstractMeal implements IMealComposite {
  constructor(private readonly name: string, private readonly price: number) {}

  getPrice(): number {
    return this.price;
  }
}

export { AbstractMeal };
