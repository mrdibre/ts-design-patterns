import { VehicleFactory } from "./vehicle-factory";
import { Vehicle } from "../vehicle/interface";
import { Bicycle } from "../vehicle/bicycle";

class BicycleFactory extends VehicleFactory {
  getVehicle(name: string): Vehicle {
    return new Bicycle(name);
  }
}

export { BicycleFactory };
