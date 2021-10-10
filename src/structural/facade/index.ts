import { BuilderFacade } from "./builder-facade";

const defaultDish = new BuilderFacade().getDefaultDish();
const veganDish = new BuilderFacade().getVeganDish();

console.log(defaultDish);
console.log(veganDish);
