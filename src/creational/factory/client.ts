import { CarFactory } from "./factories/car-factory";
import { BicycleFactory } from "./factories/bicycle-factory";

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca  = carFactory.getVehicle("Fusca");
fusca.pickUp("Joana");
fusca.stop();

const bmx = bicycleFactory.getVehicle("BMX");
bmx.pickUp("Helena");
bmx.stop();
