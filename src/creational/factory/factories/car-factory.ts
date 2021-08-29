import { VehicleFactory } from "./vehicle-factory";
import { Vehicle } from "../vehicle/interface";
import { Car } from "../vehicle/car";

class CarFactory extends VehicleFactory {
  getVehicle(name: string): Vehicle {
    return new Car(name);
  }
}

export { CarFactory };
