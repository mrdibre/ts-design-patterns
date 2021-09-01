export interface Customer {
  name: string;
}

export interface Vehicle {
  pickUp(): void;
}

export interface CustomerVehicleFactory {
  createCustomer(name: string): Customer;
  createVehicle(name: string, customerName: string): Vehicle;
}
