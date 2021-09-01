import { EnterpriseCustomerVehicleFactory } from "./classes/enterprise-customer-vehicle-factory";
import { IndividualCustomerVehicleFactory } from "./classes/individual-customer-vehicle-factory";

const enterprise = new EnterpriseCustomerVehicleFactory();
const individual = new IndividualCustomerVehicleFactory();

const enterpriseCar = enterprise.createVehicle("BMW", "CEO");
const individualCard = individual.createVehicle("Celta", "João");

enterpriseCar.pickUp();
individualCard.pickUp();
