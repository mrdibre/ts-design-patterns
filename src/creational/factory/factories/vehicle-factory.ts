import { Vehicle } from "../vehicle/interface";

abstract class VehicleFactory {
  abstract getVehicle(name: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);

    car.pickUp(customerName);

    return car;
  }
}

export { VehicleFactory };
