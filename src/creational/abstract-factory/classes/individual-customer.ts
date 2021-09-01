import { Customer } from "../interfaces";

class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}

export { IndividualCustomer };
