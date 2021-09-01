import { Customer, Vehicle } from "../interfaces";

class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {
  }

  pickUp(): void {
    console.log(`IndividualCar - ${this.name} está buscando ${this.customer.name}`);
  }
}

export { IndividualCar };
