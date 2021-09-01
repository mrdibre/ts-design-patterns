import { Customer, CustomerVehicleFactory, Vehicle } from "../interfaces";
import { EnterpriseCar } from "./enterprise-car";
import { EnterpriseCustomer } from "./enterprise-customer";
import { IndividualCar } from "./individual-car";

class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);

    return new IndividualCar(name, customer);
  }

}

export { IndividualCustomerVehicleFactory };
