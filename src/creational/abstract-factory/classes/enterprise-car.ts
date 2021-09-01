import { Vehicle, Customer } from "../interfaces";

class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {
  }

  pickUp(): void {
    console.log(`EnterpriseCar - ${this.name} está buscando o ${this.customer.name}`);
  }
}

export { EnterpriseCar };
