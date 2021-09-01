import { Customer, CustomerVehicleFactory, Vehicle } from "../interfaces";
import { EnterpriseCar } from "./enterprise-car";
import { EnterpriseCustomer } from "./enterprise-customer";

class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(name: string): Customer {
    return new EnterpriseCustomer(name);
  }

  createVehicle(name: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);

    return new EnterpriseCar(name, customer);
  }

}

export { EnterpriseCustomerVehicleFactory };
