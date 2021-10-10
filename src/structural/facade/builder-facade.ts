// Facade for src/creational/builder

import { DefaultDishBuilder } from "../../creational/builder/classes/default-dish-builder";
import { VeganDishBuilder } from "../../creational/builder/classes/vegan-dish-builder";

class BuilderFacade {
  private veganDishBuilder = new VeganDishBuilder();
  private defaultDishBuilder = new DefaultDishBuilder();

  getDefaultDish() {
    return this.defaultDishBuilder.makeMeal().makeDessert().makeBeverage();
  }

  getVeganDish() {
    return this.veganDishBuilder.makeMeal();
  }
}

export { BuilderFacade };
