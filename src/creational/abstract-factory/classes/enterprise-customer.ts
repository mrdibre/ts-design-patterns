import { Customer } from "../interfaces";

class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}

export { EnterpriseCustomer };
