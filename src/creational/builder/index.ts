import { DefaultDishBuilder } from "./classes/default-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const defaultDishBuilder = new DefaultDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

defaultDishBuilder.makeMeal().makeDessert().makeBeverage();
console.log(defaultDishBuilder.getMeal(), defaultDishBuilder.getPrice());

veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMeal(), veganDishBuilder.getPrice());
